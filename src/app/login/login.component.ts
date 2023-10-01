import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: any;
  password: any;

  constructor(private authService: AuthenticationService, private router: Router) {}

  onSubmit() {
    const authenticated = this.authService.login(this.username, this.password);

    if (authenticated) {
      this.router.navigate(['/dashboard']);
    } else {
      // Handle authentication failure
    }
  }
}