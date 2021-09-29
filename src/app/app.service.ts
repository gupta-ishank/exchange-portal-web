import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MenuNode } from './menuNode';
@Injectable({
  providedIn: 'root'
})
export class AppService {

    constructor(private http: HttpClient) { }

    getAllMenu(){ // we will use this
        let api_url = "http://www.localhost:8080/";
        return this.http.get(api_url);
    }

    getFileData(node: MenuNode){
        let api_url = "http://www.localhost:8080/";
        return this.http.get(api_url);
    }
}
