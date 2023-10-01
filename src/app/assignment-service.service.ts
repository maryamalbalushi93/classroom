import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  private baseUrl = 'http://localhost:3000/assignments'; // Replace with your server URL
  private baseUrl11 = 'http://localhost:3000/submissions'; // Replace with your server URL

  submitAssignmentDetails: any;

  constructor(private http: HttpClient) { }

  submitAssignment(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
  
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'multipart/form-data');
  
    return this.http.post(`${this.baseUrl11}`, formData, { headers });
  }
  
  

  // Add this function
  getAssignments(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }

  // Add more functions as needed for your application
}