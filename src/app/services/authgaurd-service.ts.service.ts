import { Injectable } from '@angular/core';
import { CanActivate,Router} from '@angular/router';
import { UserServiceService } from './user-service.service';
@Injectable({
  providedIn: 'root'
})
export class AuthgaurdService implements CanActivate {

  constructor(private authservice: UserServiceService,private router :Router) { }
  canActivate() : boolean{
    if(this.authservice.loggedIn()){
      return true
    }
    else{
      this.router.navigate(['/login'])
      return false
    }
  }
}
