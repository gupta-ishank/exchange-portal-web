import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  newUser = {
    userName: "",
    password: "",
    confirmPassword: "",
    email: ""
  }
  constructor(private route : Router, private service : AppService) { }

  ngOnInit(): void {
  }

  status: any;
  statusMessage: any= "";
  handleSignUp(){
    if(this.newUser.password != this.newUser.confirmPassword){
      this.statusMessage = "Password doesn't match";
    }else{
      this.service.signUpUser(this.newUser).subscribe(data => {
        if(data){
          this.route.navigate(['/login']);
        }else{
          this.statusMessage = "User already exists !";
        }
      })
    }
  }

}