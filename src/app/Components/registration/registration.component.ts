import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AccountService } from '../../DataBaseServices/account.service';
import { json } from 'stream/consumers';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {


  constructor(private _registrationService:AccountService){}

  regForm = new FormGroup({
    email:new FormControl('', [Validators.required, Validators.email]),
    password:new FormControl('', [ Validators.required, Validators.minLength(6), Validators.maxLength(30)]),
    roles:new FormControl('', Validators.required),
  });

  errorMessage: string = '';

  Register() {
    console.log(this.regForm.value); // Ensure it logs the correct form data

    let registData = this.regForm.value;
    this._registrationService.UserRegistration(registData).subscribe(
      (res) => {
        console.log('Registration successful');
        alert('Registration successful');
        this.errorMessage = ''; // Clear any previous error messages
      },
      (error) => {
        console.error('Your Error:', error);
        this.errorMessage = error.error; // Display the error message from the API
      }
    );
  }




    GetStudentsAll()
    {
      this._registrationService.GetAllStudents().subscribe((res:any)=>{
        console.log(res);
      })
    }

}
