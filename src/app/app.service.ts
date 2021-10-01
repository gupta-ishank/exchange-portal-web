import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

    constructor(private http: HttpClient) { }

    getAllMenu(){ // we will use this
        let api_url = "http://localhost:8080/exchange-portal-0.0.1-SNAPSHOT/";
        return this.http.get(api_url);
    }

    getContentOfFile(data:any){
      let api_url = "http://localhost:8080/";
      const headers = { 'content-type': 'application/json'}
      const body=JSON.stringify(data);
      return this.http.post(api_url, body,{'headers':headers})
    }

    loginUser(user:any){
      let api_url = "http://localhost:8080/login";
      const headers = { 'content-type': 'application/json'}
      const body=JSON.stringify(user);
      return this.http.post(api_url, body,{'headers':headers})
    }

    signUpUser(user:any){
      let api_url = "http://localhost:8080/signup";
      const headers = { 'content-type': 'application/json'}
      const body=JSON.stringify(user);
      return this.http.post(api_url, body,{'headers':headers})
    }

}