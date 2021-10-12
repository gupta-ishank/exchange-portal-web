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
  constructor(private route: Router, private service: AppService) { }

  ngOnInit(): void {
  }

  status: any;
  statusMessage: any= "";
  handleLogin(){
    console.log(this.user)
    this.service.loginUser(this.user).subscribe(data =>{
      this.status = data;
      console.log(data);
      if(this.status.length != 0){
        this.route.navigate(['/swagger']);
      }else{
        console.log("Invalid credentials");
        this.statusMessage = "Invalid credentials!";
      }
    })
  }

}
