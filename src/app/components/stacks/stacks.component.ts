import { Component, OnInit } from '@angular/core';
import {
  ConfirmationService,
  MessageService,
  ConfirmEventType,
} from 'primeng/api';
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
    private stackService: StacksService
  ) {}

  addModalVisible!: boolean;
  editModalVisible!: boolean;

  value!: string;
  stacks!: Stack[];
  selectedStack!: Stack;

  ngOnInit(): void {
    this.stackService.getAll().subscribe(
      (data) => {
        this.stacks = data;
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
    const stack = this.stacks.find((stack) => stack.id === id);
    if (stack) this.selectedStack = stack;
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
          detail: 'Programme supprimé avec success',
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
