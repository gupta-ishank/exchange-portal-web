import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_PATH } from './variables';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

    currentUser: any
    basePath = 'http://localhost:8080';

    constructor(private http: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string) {
        if(basePath){
          this.basePath = basePath;
        }
     }

    getAllMenu(){ 
        const headers={'Access-Control-Allow-Origin': this.basePath};
        let api_url = this.basePath + "/menu";
        return this.http.get(api_url);
    }

    getContentOfFile(data:any){
      let api_url = this.basePath + "/fileContent";
      const headers = { 'content-type': 'application/json'}
      const body=JSON.stringify(data);
      console.log(body);
      return this.http.post(api_url, body,{'headers':headers})
    }

    loginUser(user:any){
      let api_url = this.basePath + "/login";
      const headers = { 'content-type': 'application/json'}
      const body=JSON.stringify(user);
      return this.http.post(api_url, body,{'headers':headers})
    }

    signUpUser(user:any){
      let api_url = this.basePath + "/signup";
      const headers = { 'content-type': 'application/json'}
      const body=JSON.stringify(user);
      return this.http.post(api_url, body,{'headers':headers})
    }

}