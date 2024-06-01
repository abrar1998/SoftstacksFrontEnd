import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AccountService } from '../../DataBaseServices/account.service';
import { ActivatedRoute, Router } from '@angular/router';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  myform = new FormGroup({
    email:new FormControl('', [Validators.required, Validators.email]),
    password:new FormControl('', [Validators.required])
  });
  
  constructor(private db:AccountService, private _route:Router){

  }
  errorMessage: string = '';
  data:any;
  // 
  
  LoginDetails() {
    console.log(this.myform.value);
    this.db.LoginUserInApi(this.myform.value).subscribe(
        (res) => {
            console.log(res);
            this.data = res;
            // Clear any previous error messages
            this.errorMessage = '';
            if (this.data.role === 'Admin') {
                this._route.navigate(['/admin', this.data.userId]);
            } else if (this.data.role === 'Student') {
                this._route.navigate(['/student', this.data.userId]);
            } else {
                this._route.navigate(['/']);
            }
        },
        (error) => {
            console.error('Your Error:', error);
            // Set the error message
            if (error.status === 400) {
                this.errorMessage = error.error.errorMessage || 'Invalid Credentials';
            } else {
                this.errorMessage = 'An unexpected error occurred. Please try again later.';
            }
        }
    );
}







}
