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
    userName: "",
    password: ""
  }
  constructor(private route: Router, private service: AppService) {
    if(localStorage.getItem("user") != null){
      this.route.navigate(['/swagger']);
    }
   }

  ngOnInit(): void {
  }

  status: any;
  statusMessage: any= "";
  handleLogin(){
    // console.log(this.user)
    this.service.loginUser(this.user).subscribe(data =>{
      this.status = data;
      console.log(this.status[0]);
      if(data != null && this.status.length != 0){
        localStorage.setItem("user", JSON.stringify(this.status[0]));
        console.log("set user = " + this.status[0].userName);
        this.route.navigate(['/swagger']);
      }else{
        console.log("Invalid credentials");
        this.statusMessage = "Invalid credentials!";
      }
    })
  }

}
