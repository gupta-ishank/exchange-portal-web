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
    username: "",
    password: "",
    confirmPassword: "",
    email: ""
  }
  constructor(private route : Router, private service : AppService) { }

  ngOnInit(): void {
  }
  response: any = [];
  handleSignUp(){
    this.service.signUpUser(this.newUser).subscribe(data => {
        this.response = data;
        if(this.response.status == true)
            this.route.navigate(['/swagger']);
        else{
            console.log("User Exists!");
        }
    })
  }

}