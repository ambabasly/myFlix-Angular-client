import { Component, OnInit, Input } from '@angular/core';

import { FetchApiDataService } from '../fetch-api-data.service';

import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})

export class EditUserComponent implements OnInit {


  @Input() userData = { 
    Username: '',
    Name: '', 
    Password: '', 
    Email: '', 
    Birthday: '',
  };

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<EditUserComponent>,
    public snackBar: MatSnackBar,
  ) {}

  ngOnInit(): void {}

 
  editUser(): void {
    this.fetchApiData.editUser(this.userData).subscribe((res) => {
      // Logic for successful user registration needs to be implemented here!
      this.dialogRef.close();
      localStorage.setItem('Name', res.Name)
      console.log(res)
      this.snackBar.open(this.userData.Name, 'Successfully updated user details!', {
        duration: 2500
      });
    }, (res) => {
      this.snackBar.open(res, 'OK', {
        duration: 2500
      });
      setTimeout(function () {
        window.location.reload();
       }, 3500);
  })}
}