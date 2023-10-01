import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  private baseUrl = 'http://localhost:3000/attendance'; // Replace with your server URL
  private baseUrl1='http://localhost:3000/students';
  constructor(private http: HttpClient) { }

  saveAttendance(attendanceData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, attendanceData);
  }

  getStudents(batch: any): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl1}?batch=${batch}`);
  }
  
}
