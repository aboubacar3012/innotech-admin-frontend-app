import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StacksComponent } from './components/stacks/stacks.component';
import { CampusComponent } from './components/campus/campus.component';
import { BatchesComponent } from './components/batches/batches.component';
import { StudentsComponent } from './components/students/students.component';
import { TeachersComponent } from './components/teachers/teachers.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'students',
    component: StudentsComponent,
  },
  {
    path: 'stacks',
    component: StacksComponent,
  },
  {
    path: 'campus',
    component: CampusComponent,
  },
  {
    path: 'batches',
    component: BatchesComponent,
  },
  {
    path: 'groupes',
    component: BatchesComponent,
  },
  {
    path: 'teachers',
    component: TeachersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
