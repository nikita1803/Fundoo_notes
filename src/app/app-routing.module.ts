import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatenoteComponent } from './components/createnote/createnote.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { NotesComponent } from './components/notes/notes.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

const routes: Routes = [
  {path: 'registration', component: RegistrationComponent},
  { path: 'login', component: LoginComponent},
  { path: 'forget-password', component: ForgetPasswordComponent },
  { path: 'resetpassword/:token', component: ResetPasswordComponent },
  {path: 'dashboard', component: DashboardComponent},
  {path: 'header', component: HeaderComponent},
  { path: 'createnotes', component: CreatenoteComponent },
  {path : 'notes', component: NotesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
