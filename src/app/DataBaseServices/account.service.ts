import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http:HttpClient) { }

  //register user acoount
  UserRegistration(registerData:any){
    var objData={
      email:registerData.email,
      password:registerData.password,
      role:registerData.role
    }
    return this.http.post('https://localhost:7210/api/Account/Register', registerData);
}

//login
LoginUserInApi(loginData:any)
{
  return this.http.post('https://localhost:7210/api/Account/Login',loginData);
}

  GetAllStudents()
  {
    return this.http.get('https://localhost:7210/api/Student/GetAllStudents');
  }
}
