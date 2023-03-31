import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss'],
  providers: [MessageService],
})
export class AddStudentComponent {
  dateOfBirth!: Date;
  genderOptions: { name: string; value: string }[] = [
    {
      name: 'Homme',
      value: 'man',
    },
    {
      name: 'Femme',
      value: 'woman',
    },
  ];

  constructor(private messageService: MessageService) {}

  onBasicUploadAuto(event: any) {
    this.messageService.add({
      severity: 'info',
      summary: 'Success',
      detail: 'File Uploaded with Auto Mode',
    });
  }
}
