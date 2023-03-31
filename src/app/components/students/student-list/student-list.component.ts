import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
})
export class StudentListComponent implements OnInit {
  addStudentDialog!: boolean;
  constructor(private userService: UsersService) {}

  value!: string;

  users!: User[];

  ngOnInit(): void {
    this.userService.getAll().subscribe(
      (data) => (this.users = data),
      (error) => console.log(error)
    );
  }

  showAddStudentDialog() {
    this.addStudentDialog = true;
  }
}
