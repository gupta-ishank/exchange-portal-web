import { AfterViewInit, Component, ElementRef, Injectable, Input, OnInit, ViewChild } from '@angular/core';

import { AngularTreeGridComponent } from 'angular-tree-grid';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-custom-component',
  templateUrl: './custom-component.component.html',
  styleUrls: ['./custom-component.component.css']
})
export class CustomComponentComponent implements OnInit{
  // @Input() childMessage: any ;

  childMessage: any;
  content: any= [];
  methodTitle = "";
  methodDescription = "";
  endpoint="";
  requestType="";
  tip= "";
  requestPayload: any;
  responsePayload: any;
  requestPayloadArray: any = [];
  responsePayloadArray: any = [];
  

  constructor() { 
  }
  

  @ViewChild('angularGrid') angularGrid: AngularTreeGridComponent | undefined;
  data: any = [ 
    { id: 1, name: 'Endpoint:', details: "", parent: 0},
    { id: 2, name: 'Request Type:', details: "", parent: 0},
    { id: 3, name: 'Scheme:', details: "HTTPS", parent: 0},
    { id: 4, name: 'Header (Content-Type):', details: "application/json", parent: 0}
  ];

  configs: any = {
    id_field: 'id',
    parent_id_field: 'parent',
    parent_display_field: 'name',
    css: { // Optional
      expand_class: 'fa fa-caret-right',
      collapse_class: 'fa fa-caret-down',
    },
    columns: [
      {
        name: 'name',
        header: 'Name',
        width: '200px'
      },
      {
        name: 'details',
        header: 'Details',
        width: '200px'
      }
    ]
  };

  collapseAll() {
    if(this.angularGrid)
      this.angularGrid.collapseAll();
  }

  expandAll($event :any) {
    console.log($event.data.id)
    let id = $event?.data?.id;
    console.log(this.endpoint);
    if(this.angularGrid)
      this.angularGrid?.expandRow(id);
  }

//for request payload details
  @ViewChild('angularGrid2') angularGrid2: AngularTreeGridComponent | undefined;
  data2: any =[];

  configs2: any = {
    id_field: 'Level',
    parent_id_field: 'parentId',
    parent_display_field: 'parameter',
    css: { // Optional
      expand_class: 'fa fa-caret-right',
      collapse_class: 'fa fa-caret-down',
    },
    columns: [
      {
        name: 'parameter',
        header: 'Parameter',
        width: '200px'
      },
      {
        name: 'Type',
        header: 'Type',
        width: '200px'
      }
    ]
  };

  collapseAll2() {
    if(this.angularGrid2)
      this.angularGrid2?.collapseAll();
  }

  expandAll2($event :any) {
    console.log($event?.data?.Level)
    let id = $event?.data?.Level;
    console.log("here");
    if(this.angularGrid2){
      console.log(id);
      this.angularGrid2?.expandRow(id);
      console.log("here3");
    }
  }



  //for response payload details
  @ViewChild('angularGrid3') angularGrid3: AngularTreeGridComponent | undefined;
  data3: any =[];

  configs3: any = {
    id_field: 'Level',
    parent_id_field: 'parentId',
    parent_display_field: 'parameter',
    css: { // Optional
      expand_class: 'fa fa-caret-right',
      collapse_class: 'fa fa-caret-down',
    },
    columns: [
      {
        name: 'parameter',
        header: 'Parameter',
        width: '200px'
      },
      {
        name: 'Type',
        header: 'Type',
        width: '200px'
      }
    ]
  };

  collapseAll3() {
    if(this.angularGrid3)
      this.angularGrid3?.collapseAll();
  }

  expandAll3($event :any) {
    console.log($event?.data?.Level)
    let id = $event?.data?.Level;
    console.log("here");
    if(this.angularGrid3){
      console.log(id);
      this.angularGrid3?.expandRow(id);
      console.log("here3");
    }
  }

  ngOnInit(): void {
  }

  renderMethodData(methodData:any){
    console.log(methodData);
    this.childMessage = methodData; 
    this.tip = "It is recommended to check out Notes for the reader. You might find this helpful as it contains Guidelines for using API references and Terminologies used here.";
    // this.methodDescription = this.childMessage;
    // this.endpoint = this.childMessage?.path;
    // this.requestType = this.childMessage?.name;
    this.requestPayloadArray = this.childMessage?.schema?.requestPayloadDetails;
    this.responsePayloadArray = this.childMessage?.schema?.responsePayloadDetails;
    this.methodTitle = methodData?.description;
    this.methodDescription = methodData?.subDescription;
    this.requestPayload = methodData?.schema?.requestPayload;
    this.responsePayload = methodData?.schema?.responsePayload;
    this.data[0].details = methodData?.path;
    this.data[1].details = methodData?.name;
    this.data2 = methodData?.schema?.requestPayloadDetails;
    this.data3 = methodData?.schema?.responsePayloadDetails;
    console.log(" heloo" +this.data3)
  }


  emptyCheck(node: any){

    // console.log( "pup sala" + node );
    // return true;
    return node != null && Object.keys(node).length > 0;
  }


}
