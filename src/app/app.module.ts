import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// primeng
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { StacksComponent } from './components/stacks/stacks.component';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { CampusComponent } from './components/campus/campus.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BatchesComponent } from './components/batches/batches.component';
import { GroupesComponent } from './components/groupes/groupes.component';
import { StudentsComponent } from './components/students/students.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { AddStudentComponent } from './components/students/add-student/add-student.component';
import { StudentDetailsComponent } from './components/students/student-details/student-details.component';
import { StudentListComponent } from './components/students/student-list/student-list.component';
import { InputSwitchModule } from 'primeng/inputswitch';
@NgModule({
  declarations: [
    AppComponent,
    StacksComponent,
    CampusComponent,
    DashboardComponent,
    BatchesComponent,
    GroupesComponent,
    StudentsComponent,
    TeachersComponent,
    AddStudentComponent,
    StudentDetailsComponent,
    StudentListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    ButtonModule,
    CardModule,
    ToolbarModule,
    FieldsetModule,
    InputTextModule,
    FormsModule,
    TableModule,
    DialogModule,
    ConfirmDialogModule,
    ToastModule,
    InputSwitchModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
