// core modules
import { Component, OnInit } from '@angular/core';

// material modules
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

const username = localStorage.getItem('username')

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    public snackBar: MatSnackBar, 
    public dialog: MatDialog,
    public router: Router,
    ) { }

  ngOnInit(): void {
  }

  /**
   * opens modal with user details
   */
  toProfile(): void {
    this.router.navigate(['/profile'])
      .then(success => console.log('navigation success?', success))
      .catch(console.error);
  }

   /**
   * navigates to "all movies"
   */
  toMovies(): void {
    this.router.navigate(['/movies'])
      .then(success => console.log('navigation success?', success))
      .catch(console.error);
  }

  /**
   * navigates to homescreen
   */
  backToHome(): void {
    this.router.navigate(['/movies'])
      .then(success => console.log('navigation success?', success))
      .catch(console.error);
  }

  /**
   * logs out the user by clearing the localstorage (username, token) and reloads the page
   * then -> redirect to welcome page
   */
  logOut(): void {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.router.navigate(['/welcome'])
      .then(success => console.log('navigation success?', success))
      .catch(console.error);
  }
}