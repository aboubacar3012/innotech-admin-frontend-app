import { Component, OnInit } from '@angular/core';
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
    private campusService: CampusService
  ) {}

  addModalVisible!: boolean;
  editModalVisible!: boolean;

  value!: string;
  campuses!: Campus[];
  selectedCampus!: Campus;

  ngOnInit(): void {
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

  showAddDialog() {
    this.addModalVisible = true;
  }

  showEditDialog(id: string) {
    const campus = this.campuses.find((campus) => campus.id === id);
    if (campus) this.selectedCampus = campus;
    this.editModalVisible = true;
  }

  deleteById(id: string) {
    this.confirmationService.confirm({
      message: 'Etes vous sure de vouloir supprimer?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Confirmé',
          detail: 'Campus supprimé avec success',
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
}
