import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import * as CryptoJS from 'crypto-js';

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
  constructor(private route: Router, private service: LoginService) {

    /* this.service.checkLogin().subscribe( res =>{
      let checkResponse: any = res;
      if(checkResponse.loggedIn) this.route.navigate(['/swagger']);
    }) */
   }

  ngOnInit(): void {
  }

  status: any;
  statusMessage: any= "";
  handleLogin(){
    this.route.navigate(['/swagger']);
    /* this.service.doLogin(this.user.userName, this.user.password).subscribe(
      res => {
        let loginResponse:any = res;
        if(loginResponse['returnCode'] == 1000){
          localStorage.setItem("name", this.user.userName);
          console.log(this.decryptResponseAndReturnJson(loginResponse['returnData']))
        }
        this.statusMessage = loginResponse['returnText'];
      }
    ) */
  }
  encryptedBase64Key = 'UVdFUlRZQVNERkdIWlhDVg==';
  decryptResponseAndReturnJson(responseStr:string){
    let start = new Date();
    let parsedBase64Key = CryptoJS.enc.Base64.parse(this.encryptedBase64Key);
    let decryptedData = CryptoJS.AES.decrypt( responseStr, parsedBase64Key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
        } );
    let decryptedText = decryptedData.toString( CryptoJS.enc.Utf8 );
    console.log("Time Taken for decrypt : " + (new Date().getTime() - start.getTime()));
    return JSON.parse(decryptedText);
}
}

