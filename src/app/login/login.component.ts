import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    username: "",
    password: ""
  }
  constructor(private route: Router, private service: AppService) { }

  ngOnInit(): void {
  }

  message = "";
  response: any = [];
  handleLogin(){
    console.log(this.user)
    this.service.loginUser(this.user).subscribe(data =>{
        this.response = data;
        if(this.response.status == true)
            this.route.navigate(['/swagger'])
        else{
          this.message = "Wrong Credentials!";
            console.log("Wrong Credentials!");
        }
    })
  }

}   