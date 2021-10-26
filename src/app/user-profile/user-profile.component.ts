// core modules
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//import from components
import { FetchApiDataService } from '../fetch-api-data.service';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { EditUserComponent } from '../edit-user/edit-user.component';
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

  constructor(
    public fetchApiData: FetchApiDataService,
    public snackBar: MatSnackBar,
    public dialog: MatDialog,
    public router: Router,
    public movieCard: MovieCardComponent,
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
      this.user.Birthday = new Date(this.user.Birthday).toDateString() 
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
  
}