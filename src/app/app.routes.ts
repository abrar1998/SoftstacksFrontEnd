import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { AdminComponent } from './Components/admin/admin.component';
import { StudentComponent } from './Components/student/student.component';
import { LoginComponent } from './Components/login/login.component';

export const routes: Routes = [
    {path:'', redirectTo:'/home',pathMatch:'full'},
    {path:'register', component:RegistrationComponent},
    {path:'home', component:HomeComponent},
    {path:'login', component:LoginComponent},
    {path:'admin/:id', component:AdminComponent},
    {path:'student/:id', component:StudentComponent}
];
