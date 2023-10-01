import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  login(username: string, password: string): boolean {
    // Check if the provided username and password match the fixed values
    if (username === 'maryam' && password === '123') {
      return true;
    } else {
      return false;
    }
  }
}