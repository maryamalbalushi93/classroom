import { Component, OnInit } from '@angular/core';
import { AssignmentService } from '../assignment-service.service';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit{
  file: File | undefined;
  assignments: any[] | undefined;

  constructor(private assignmentService: AssignmentService) { }
  ngOnInit(): void {
    this.assignmentService.getAssignments().subscribe(
      (assignments: any[]) => {
        this.assignments = assignments;
      },
      (error: any) => {
        console.error('Error fetching assignments', error);
      }
    );
  }  

  onFileSelected(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    const selectedFile = fileInput.files?.[0]; // Use optional chaining to handle potential null
  
    if (selectedFile) {
      this.file = selectedFile;
    }
  }
  

  submitAssignment() {
    if (this.file) {
      this.assignmentService.submitAssignment(this.file).subscribe(
        (response: any) => {
          console.log('Assignment submitted successfully', response);
        },
        (error: any) => {
          console.error('Error submitting assignment', error);
        }
      );
    } else {
      console.error('Please select a file.');
    }
  }
}
