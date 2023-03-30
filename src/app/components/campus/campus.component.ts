import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  ConfirmationService,
  MessageService,
  ConfirmEventType,
} from 'primeng/api';
import { Campus } from 'src/app/models/campus.model';
import { CampusService } from 'src/app/services/campus.service';

@Component({
  selector: 'app-campus',
  templateUrl: './campus.component.html',
  styleUrls: ['./campus.component.scss'],
  providers: [ConfirmationService, MessageService],
})
export class CampusComponent implements OnInit {
  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private campusService: CampusService,
    private formBuilder: FormBuilder
  ) {}

  formModalVisible!: boolean;

  value!: string;
  campuses!: Campus[];
  selectedCampus!: Campus;

  campusForm!: FormGroup;
  formType: 'edit' | 'add' = 'add';

  ngOnInit(): void {
    // Initialisation du form
    if (this.formType === 'add') {
      this.campusForm = this.formBuilder.group({
        name: [null, Validators.required],
        address: [null, Validators.required],
        city: [null, Validators.required],
        isOpen: [null, Validators.required],
      });
    }
    // End form
    this.getAllCampus();
  }

  getAllCampus() {
    this.campusService.getAll().subscribe(
      (data) => {
        console.log(data);
        this.campuses = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  showFormDialog(type: 'add' | 'edit', id?: string) {
    if (type === 'add') {
      this.formType = 'add';
      this.campusForm = this.formBuilder.group({
        name: [null, Validators.required],
        address: [null, Validators.required],
        city: [null, Validators.required],
      });
    } else if (type === 'edit') {
      this.formType = 'edit';
      if (id) {
        const campus = this.campuses.find((campus) => campus.id === id);
        if (campus) this.selectedCampus = campus;
        this.campusForm = this.formBuilder.group({
          name: [this.selectedCampus.name, Validators.required],
          address: [this.selectedCampus.address, Validators.required],
          city: [this.selectedCampus.city, Validators.required],
          isOpen: [this.selectedCampus.isOpen, Validators.required],
        });
      }
    }
    this.formModalVisible = true;
  }

  // showAddDialog() {
  //   this.addModalVisible = true;
  // }

  // showEditDialog(id: string) {
  //   const campus = this.campuses.find((campus) => campus.id === id);
  //   if (campus) this.selectedCampus = campus;
  //   this.editModalVisible = true;
  // }

  deleteById(id: string) {
    this.confirmationService.confirm({
      message: 'Etes vous sure de vouloir supprimer?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.campusService.delete(id).subscribe(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Confirmé',
            detail: 'Programme supprimé avec success',
          });
          this.getAllCampus();
        });
      },
      reject: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Annulé',
          detail: 'Vous avez annuler la suppression',
        });
      },
    });
  }

  onSubmitStackForm() {
    const form = this.campusForm.value;
    const campus = {
      name: form.name,
      address: form.address,
      city: form.city,
    };
    if (this.formType === 'add') {
      this.campusService.create(campus).subscribe((response) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Ajout du programme',
          detail: 'Le programme a été crée avec success',
        });
        this.formModalVisible = false;
        this.getAllCampus();
      });
    } else if (this.formType === 'edit') {
      if (this.selectedCampus.id) {
        this.campusService
          .update(this.selectedCampus.id, {
            ...campus,
            updatedAt: new Date().toISOString(),
          })
          .subscribe((response) => {
            this.messageService.add({
              severity: 'success',
              summary: 'Ajout du programme',
              detail: 'Le programme a été crée avec success',
            });
            this.formModalVisible = false;
            this.getAllCampus();
          });
      }
    }
  }
}
