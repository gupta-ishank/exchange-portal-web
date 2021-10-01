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
    username: "Admin",
    password: "admin"
  }
  constructor(private route: Router, private service: AppService) { }

  ngOnInit(): void {
  }

  response: any = [];
  status = "";
  handleLogin(){
    console.log(this.user)
    this.service.loginUser(this.user).subscribe(data =>{
        this.response = data;
        if(this.response.status == true)
            this.route.navigate(['/swagger'])
        else{
            status = "Wrong Credentials!";
            console.log("Wrong Credentials!");
        }
    })
  }

}   