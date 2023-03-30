import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Stack } from 'src/app/models/stack.model';
import { StacksService } from 'src/app/services/stacks.service';

@Component({
  selector: 'app-stacks',
  templateUrl: './stacks.component.html',
  styleUrls: ['./stacks.component.scss'],
  providers: [ConfirmationService, MessageService],
})
export class StacksComponent implements OnInit {
  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private stackService: StacksService,
    private formBuilder: FormBuilder
  ) {}

  formModalVisible!: boolean;

  value!: string;
  stacks!: Stack[];
  selectedStack!: Stack;

  stackForm!: FormGroup;
  formType: 'edit' | 'add' = 'add';

  ngOnInit(): void {
    // Initialisation du form
    if (this.formType === 'add') {
      this.stackForm = this.formBuilder.group({
        name: [null, Validators.required],
        duration: [null, Validators.required],
      });
    }
    // End form
    this.getAllStacks();
  }

  showFormDialog(type: 'add' | 'edit', id?: string) {
    if (type === 'add') {
      console.log('addType');
      this.formType = 'add';
      this.stackForm = this.formBuilder.group({
        name: [null, Validators.required],
        duration: [null, Validators.required],
      });
    } else if (type === 'edit') {
      this.formType = 'edit';
      if (id) {
        const stack = this.stacks.find((stack) => stack.id === id);
        if (stack) this.selectedStack = stack;
        this.stackForm = this.formBuilder.group({
          name: [this.selectedStack.name, Validators.required],
          duration: [this.selectedStack.duration, Validators.required],
        });
      }
    }
    this.formModalVisible = true;
  }

  deleteById(id: string) {
    this.confirmationService.confirm({
      message: 'Etes vous sure de vouloir supprimer?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.stackService.delete(id).subscribe(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Confirmé',
            detail: 'Programme supprimé avec success',
          });
          this.getAllStacks();
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

  getAllStacks() {
    this.stackService.getAll().subscribe(
      (data) => {
        this.stacks = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onSubmitStackForm() {
    const form = this.stackForm.value;
    const stack = {
      name: form.name,
      duration: form.duration,
    };
    if (this.formType === 'add') {
      this.stackService.create(stack).subscribe((response) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Ajout du programme',
          detail: 'Le programme a été crée avec success',
        });
        this.formModalVisible = false;
        this.getAllStacks();
      });
    } else if (this.formType === 'edit') {
      if (this.selectedStack.id) {
        this.stackService
          .update(this.selectedStack.id, stack)
          .subscribe((response) => {
            this.messageService.add({
              severity: 'success',
              summary: 'Ajout du programme',
              detail: 'Le programme a été crée avec success',
            });
            this.formModalVisible = false;
            this.getAllStacks();
          });
      }
    }
  }
}
