// core modules
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//import from components
import { FetchApiDataService } from '../fetch-api-data.service';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { SynopsisCardComponent } from '../synopsis-card/synopsis-card.component';
import { GenreCardComponent } from '../genre-card/genre-card.component';
import { DirectorCardComponent } from '../director-card/director-card.component';
// material modules
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})

export class UserProfileComponent implements OnInit {

  user: any = {};
  movies: any = {};
  favorites: any = {};

  constructor(
    public fetchApiData: FetchApiDataService,
    public snackBar: MatSnackBar,
    public dialog: MatDialog,
    public router: Router,
  ) { }

  /**
   * When opening the component, gets the user
   */
   ngOnInit(): void {
    this.getUserData();
  }

  /**
   * gets user details from API
   */
  getUserData(): void {
    let user = localStorage.getItem('Name');
    this.fetchApiData.getUser(user).subscribe((res: any) => {
      this.user = res;
    });
  }
  /**
   * opens a modal to edit the profile
   */
  openEditDialog(): void{
    this.dialog.open(EditUserComponent, {
      width: '500px'
    })
  }
  

  deleteProfile(): void {
    if(confirm('Are you sure? This cannot be undone.')) {
    this.fetchApiData.deleteUser().subscribe(() => {
      localStorage.clear();
      this.router.navigate(['welcome']);
      this.snackBar.open('Account Deleted', 'OK', {
        duration: 3000
        });
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/profile']).then(() => {
      window.location.reload();
    });
  }

}
  
