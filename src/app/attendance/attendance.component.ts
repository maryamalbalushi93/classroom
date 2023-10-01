import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { AttendanceService } from '../attendance-service.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {
  attendanceForm: FormGroup;
  selectAllCheckbox: any;

  constructor(private fb: FormBuilder, private attandaceserver: AttendanceService) {
    this.attendanceForm = this.fb.group({
      date: ['', Validators.required],
      batch: ['', Validators.required],
      students: this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.onBatchChange();
  }

  onBatchChange() {
    const selectedBatch = this.attendanceForm.get('batch')?.value;
    this.attandaceserver.getStudents(selectedBatch).subscribe(
      (students: any[]) => {
        this.students.clear(); // Clear previous students
        students.forEach((student: any) => {
          this.students.push(this.createStudentFormGroup(student));
        });
      },
      (error: any) => {
        console.error('Error fetching students', error);
      }
    );
  }
  
  createStudentFormGroup(student: any) {
    return this.fb.group({
      id: [student.id],
      name: [student.name],
      status: [''],
      leaveReason: [''],
      certificate: ['']
    });
  }

  get students() {
    return this.attendanceForm.get('students') as FormArray;
  }

  getStudentId(index: number) {
    return this.students.at(index).get('id')?.value;
  }

  getStudentName(index: number) {
    return this.students.at(index).get('name')?.value;
  }

  onFileChange(event: Event, index: number) {
    const fileInput = event.target as HTMLInputElement;
    const file = fileInput.files?.[0];
    if (file) {
      this.students.at(index).get('certificate')?.setValue(file);
    }
  }

  selectAllStudents(event: Event) {
    const statusValue = (event.target as HTMLInputElement).checked ? 'present' : '';
  
    this.students.controls.forEach((student) => {
      let statusControl = student.get('status');
      if (statusControl) {
        statusControl.setValue(statusValue);
      }
    });
  }
  
  
  
  saveAttendance() {
    const attendanceData = [{
      date: this.attendanceForm.get('date')?.value,
      batch: this.attendanceForm.get('batch')?.value,
      students: this.students.controls.map(student => student.value)
    }];

    this.attandaceserver.saveAttendance(attendanceData).subscribe(
      (response: any) => {
        console.log('Attendance saved successfully', response);
      },
      (error: any) => {
        console.error('Error saving attendance', error);
      }
    );
  }
}
