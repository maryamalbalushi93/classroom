import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GradeService {
  private students = [
    { id: 1, name: 'Student 1', task1: 0, task2: 0, totalGrade: 0 },
    { id: 2, name: 'Student 2', task1: 0, task2: 0, totalGrade: 0 },
    // Add more students as needed
  ];

  getStudents(batch: string): any[] {
    // Logic to retrieve students based on the batch
    if (batch === 'batch1') {
      return [
        { id: 1, name: 'maryam mohaamed', task1: 90, task2: 85, totalGrade: 0 },
        { id: 2, name: 'aysha alsadi', task1: 75, task2: 80, totalGrade: 0 },
        { id: 1, name: 'waad alsreeqi', task1: 90, task2: 50, totalGrade: 0 },
        { id: 2, name: 'ibtsam almamri', task1: 100, task2: 99, totalGrade: 0 },
        // Add more students as needed
      ];
    } else if (batch === 'batch2') {
      return [
        { id: 3, name: 'khoold albosafi', task1: 60, task2: 70, totalGrade: 0 },
        { id: 4, name: 'marya alsadi', task1: 70, task2: 25, totalGrade: 0 },
        { id: 1, name: 'sara albalushi', task1: 50, task2: 85, totalGrade: 0 },
        { id: 2, name: 'rahaf alqyoomi', task1: 35, task2: 22, totalGrade: 0 },
        // Add more students as needed
      ];
    }
    return []; // Return an empty array if batch is not recognized
  }

  updateGrade(id: number, task1: number, task2: number) {
    const student = this.students.find(s => s.id === id);
    if (student) {
      student.task1 = task1;
      student.task2 = task2;
      student.totalGrade = this.calculateTotalGrade(task1, task2);
    }
  }

  private calculateTotalGrade(task1: number, task2: number): number {
    return (task1 + task2) / 2;
  }
}
