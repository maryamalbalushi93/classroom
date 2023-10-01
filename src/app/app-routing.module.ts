import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { NotesComponent } from './notes/notes.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { GradeComponent } from './grade/grade.component';
import { AssignmentComponent } from './assignment/assignment.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/attendance', component: AttendanceComponent },
  { path: 'dashboard/assignment', component: AssignmentComponent },
  { path: 'dashboard/note', component: NotesComponent },

  { path: 'dashboard/grade', component: GradeComponent },
{path:'dashboard/userprofile',component:UserProfileComponent}]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
