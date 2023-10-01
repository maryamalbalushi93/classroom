import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    trigger('cardAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('300ms', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})
export class DashboardComponent implements OnInit, AfterViewInit {
  username: any;

  constructor() {
    
  
   
  }
  

  ngOnInit(): void {
    this.username = 'Maryam'; // Instead of retrieving from localStorage

    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    console.log('Current User:', currentUser);
    this.username = currentUser.username;
  }

  ngAfterViewInit(): void {
    const body = document.querySelector('body');
  
    if (body) {
      const modeToggle = body.querySelector('.mode-toggle');
      const sidebar = body.querySelector('nav');
      const sidebarToggle = body.querySelector('.sidebar-toggle');
  
      if (modeToggle && sidebar && sidebarToggle) {
        let getMode = localStorage.getItem('mode');
        if (getMode && getMode === 'dark') {
          body.classList.toggle('dark');
        }
  
        let getStatus = localStorage.getItem('status');
        if (getStatus && getStatus === 'close') {
          sidebar.classList.toggle('close');
        }
  
        modeToggle.addEventListener('click', () => {
          body.classList.toggle('dark');
          if (body.classList.contains('dark')) {
            localStorage.setItem('mode', 'dark');
          } else {
            localStorage.setItem('mode', 'light');
          }
        });
  
        sidebarToggle.addEventListener('click', () => {
          sidebar.classList.toggle('close');
          if (sidebar.classList.contains('close')) {
            localStorage.setItem('status', 'close');
          } else {
            localStorage.setItem('status', 'open');
          }
        });
      }
    }
  }

  

  
}  
  