import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { MustMatch } from './_helpers/must-match.validator';
import {UserServiceService} from 'src/app/services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
 export class LoginComponent implements OnInit  {
  registerForm: FormGroup;
  submitted = false;
  
  constructor(private formBuilder: FormBuilder,private service: UserServiceService, private router: Router) {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    }); }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    let data = {
      "email": this.registerForm.controls.email.value,
      "service": "advance",
      "password": this.registerForm.controls.password.value
    }
   // console.log(this.registerForm.value)

    /*if(this.registerForm.invalid) {
      return;
    }
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))*/
    
    this.service.login(data).subscribe((data: any) => {
      console.log(data);

      localStorage.setItem("firstName", data["firstName"]);
      localStorage.setItem("lastName", data["lastName"]);
      localStorage.setItem("email", data["email"]);
      localStorage.setItem("token", data["id"]);
      //this.router.navigate(['/dashboard']);
     
    });
  }
  ngOnInit(): void {
  }

}
