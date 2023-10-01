import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { NotesComponent } from './notes/notes.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { GradeComponent } from './grade/grade.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { GradeService } from './grade-service.service';
import { AssignmentComponent } from './assignment/assignment.component';
import { NoteServiceService } from './note-service.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AttendanceComponent,
    NotesComponent,
    UserProfileComponent,
    GradeComponent,
    AssignmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [GradeService,NoteServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
