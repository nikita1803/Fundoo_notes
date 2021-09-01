import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';
import { ActivatedRoute } from '@angular/router';
import { EmailValidator, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {UserServiceService} from 'src/app/services/user-service.service';


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private service: UserServiceService, private route: ActivatedRoute) {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    }); }

  get f() { return this.registerForm.controls; }
  token: any
  onSubmit() {
    this.submitted = true;
    let data = {
      email: this.registerForm .controls.email.value,
    }
    this.service.email(data).subscribe((data) => {
      console.log(data)
    })
  }
  ngOnInit(): void {
    
    console.log(this.route.snapshot.params['reset'].token)
    this.token = this.route.snapshot.params['reset'].token;

  }
}

