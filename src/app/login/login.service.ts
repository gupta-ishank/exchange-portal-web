import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { BASE_PATH } from '../variables';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userSessionErrorMsg: null | undefined;
  basePath = 'http://localhost:8080';

  constructor(private http: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string) {
    if(basePath){
      this.basePath = basePath;
    }
 }
  user = {
    'userName': 'Guest',
    'password': 'Guest',
    'preferredBu' : '715'
  }

  doLogin(userName: string, password: string) {

    this.userSessionErrorMsg = null;
    let headers = {'Content-Type':'application/json', 'rwos-version':'5ef1726a2', 'rwos-application':'RWOS'};
    this.user.password = btoa(password);
    this.user.userName = userName;
    let url = this.basePath + '/rwos/uia/uia/login';
    this.http.post(url, JSON.stringify(this.user),{'headers':headers})
    return this.http.post(url, JSON.stringify(this.user),{'headers':headers});
  }

  checkLogin(){
    let url = this.basePath + '/rwos/uia/uia/login/check';
    return this.http.get(url);
  }

  doLogout() {
    let headers = {};
    let url = this.basePath + '/rwos/uia/uia/logout';
    return this.http.post(url, { 'headers': headers })
  }
}
