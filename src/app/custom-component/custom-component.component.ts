import {Component } from '@angular/core';
import { basicTableConfig, parameterTableConfig, requestTableConfig, responseTableConfig, validationTableConfig } from './custom-component.table.configs';

@Component({
  selector: 'app-custom-component',
  templateUrl: './custom-component.component.html',
  styleUrls: ['./custom-component.component.css']
})
export class CustomComponentComponent{

  childMessage: any;
  tip= "It is recommended to check out Notes for the reader. You might find this helpful as it contains Guidelines for using API references and Terminologies used here.";

  constructor() { }

  basicTableData: any = [ 
    { id: 1, name: 'Endpoint:', details: "", parent: 0},
    { id: 2, name: 'Request Type:', details: "", parent: 0},
    { id: 3, name: 'Scheme:', details: "HTTPS", parent: 0},
    { id: 4, name: 'Header (Content-Type):', details: "application/json", parent: 0},
    { id: 5, name: 'Header (Authorization):', details: "", parent: 0}
  ];
  
  basicConfig: any = basicTableConfig
  requestConfig: any = requestTableConfig;
  responseConfig: any = responseTableConfig;
  parameterConfig: any = parameterTableConfig;
  validationConfig: any = validationTableConfig;

  renderMethodData(methodData:any){
    this.childMessage = methodData; 
    this.basicTableData[0].details = methodData?.path;
    this.basicTableData[1].details = methodData?.name;
    this.basicTableData[4].details = Object.keys(methodData?.schema?.security[0]);
  }

  emptyCheck(node: any){
    return node != null && Object.keys(node).length > 0;
  }
}
