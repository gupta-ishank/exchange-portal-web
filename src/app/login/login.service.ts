import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userSessionErrorMsg: null | undefined;

  constructor(
    private http: HttpClient
  ) { }
  user = {
    'userName': '',
    'password': '',
    'preferredBu' : '715'
  }

  doLogin(userName: string, password: string) {
    this.userSessionErrorMsg = null;
    let headers = {'Content-Type':'application/json', 'rwos-version':'5ef1726a2', 'rwos-application':'RWOS'};
    this.user.password = btoa(password);
    this.user.userName = userName;
    let url = 'http://localhost:8084/rwos/uia/uia/login';
    this.http.post(url, JSON.stringify(this.user),{'headers':headers})
    return this.http.post(url, JSON.stringify(this.user),{'headers':headers});
  }

  checkLogin(){
    let url = 'http://localhost:8084/rwos/uia/uia/login/check';
    return this.http.get(url);
  }

  doLogout() {
    let headers = {};
    let url = 'http://localhost:8084/rwos/uia/uia/logout';
    return this.http.post(url, { 'headers': headers })
        
  }
}
