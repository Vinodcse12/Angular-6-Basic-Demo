import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersComponent } from './users/users.component';
import { EditUserDetailsComponent } from './edit-user-details/edit-user-details.component';
import { AuthGarudService } from './auth-garud.service';
import { AuthService } from './auth.service';
import { AddUserComponent } from './add-user/add-user.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'adduser', component: AddUserComponent },
  { path: 'addEmployee', component: EmployeeDetailsComponent },
  { path: 'users', 
    component: UsersComponent,
    children: [
      { path: ':id/:name', component: UserComponent},
    ] 
  },  
  { path: 'details', component: UserDetailsComponent},
  { path: 'edituser', component: EditUserDetailsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    UserDetailsComponent,
    UsersComponent,
    EditUserDetailsComponent,
    AddUserComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [
    AuthGarudService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
