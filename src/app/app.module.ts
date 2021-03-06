//core modules
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

// Material design modules
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

//Components
import { UserLoginFormComponent } from './user-login-form/user-login-form.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DirectorCardComponent } from './director-card/director-card.component';
import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';
import { SynopsisCardComponent } from './synopsis-card/synopsis-card.component';
import { GenreCardComponent } from './genre-card/genre-card.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';
import { ProfileDeleteComponent } from './profile-delete/profile-delete.component';


const appRoutes: Routes = [
  { path: 'welcome', component: WelcomePageComponent },
  { path: 'movies', component: MovieCardComponent },
  { path: 'users', component: UserProfileComponent },
  { path: 'genres', component: GenreCardComponent },
  { path: 'directors', component: DirectorCardComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'prefix' },
];

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationFormComponent,
    UserLoginFormComponent,
    SynopsisCardComponent,
    MovieCardComponent,
    WelcomePageComponent,
    DirectorCardComponent,
    GenreCardComponent,
    UserProfileComponent,
    NavbarComponent,
    ProfileUpdateComponent,
    ProfileDeleteComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
