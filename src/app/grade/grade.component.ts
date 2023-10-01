import { Component, OnInit } from '@angular/core';
import { GradeService } from '../grade-service.service';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.css']
})
export class GradeComponent implements OnInit {
  selectedBatch: string = 'batch1'; // Initialize with a default batch
  students: any[] = [];

  constructor(private gradeService: GradeService) {}

  ngOnInit() {
    this.loadFromLocalStorage(); // Load data from localStorage on component initialization
    this.loadStudents(this.selectedBatch);
  }

  loadStudents(batch: string) {
    this.students = this.gradeService.getStudents(batch);
  }

  updateGrade(id: number, task1: number, task2: number) {
    const student = this.students.find(s => s.id === id);
    if (student) {
      student.task1 = task1;
      student.task2 = task2;
      student.totalGrade = this.calculateTotalGrade(task1, task2);
  
      // Save to local storage after updating
      this.saveToLocalStorage();
  
      // Update the grade in the service
      this.gradeService.updateGrade(id, task1, task2);
    }
  }

  calculateTotalGrade(task1: number, task2: number): number {
    return (task1 + task2) / 2;
  }

  saveToLocalStorage() {
    localStorage.setItem('students', JSON.stringify(this.students));
  }

  loadFromLocalStorage() {
    const savedStudents = localStorage.getItem('students');
    if (savedStudents) {
      this.students = JSON.parse(savedStudents);
    }
  }

  getPassOrFail(totalGrade: number): string {
    return totalGrade > 56 ? 'Pass' : 'Fail';
  }
}
