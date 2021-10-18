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
      console.log("false");
      this.statusMessage = "Password doesn't match";
    }else{
      this.service.signUpUser(this.newUser).subscribe(data => {
        // this.status = data;
        console.log(data);
        if(data){
          this.route.navigate(['/login']);
        }else{
          console.log("User already exists");
          this.statusMessage = "User already exists !";
        }
      })
    }
  }

}