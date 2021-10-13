import { Component, OnInit, ViewChild } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { SwaggerUiComponent } from './swagger-ui/swagger-ui.component';
import { AngularTreeGridComponent } from 'angular-tree-grid';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app'
  constructor(private route: Router) { 
    this.route.navigate(['/login']);
   }
}