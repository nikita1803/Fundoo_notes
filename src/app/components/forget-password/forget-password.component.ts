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
    });
    
  }
  colors=['color:#3566b8','color:#34a853', 'color:#ea4335','color:#3566b8','color:#fabb05','color: #34a853','color:#ea4335','color:#34a853','color:#fabb05','color:#3566b8','color:#e6c9a8']
  fontText=['F','u','n','d','o','o','n','o','t','e','s']
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

