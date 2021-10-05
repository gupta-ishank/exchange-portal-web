import { Component, Injectable, OnInit } from '@angular/core';
@Injectable({
  providedIn:'root'
})

@Component({
  selector: 'app-custom-component',
  templateUrl: './custom-component.component.html',
  styleUrls: ['./custom-component.component.css']
})
export class CustomComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
