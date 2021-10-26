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
  validationPayload: any;
  requestPayloadArray: any = [];
  successPayloadArray: any = [];
  failurePayloadArray: any = [];
  validationPayloadArray: any = [];
  
  // data4: any = [
  //   {
  //     "enum":"John",
  //     "minLength":30,
  //     "maxLength":null,
  //     "pattern": null,
  //   },
  //   {
  //     "enum":"John",
  //     "minLength":30,
  //     "maxLength":null,
  //     "pattern": null,
  //   },

  // ];

  constructor() { 
  }
  

  @ViewChild('angularGrid') angularGrid: AngularTreeGridComponent | undefined;
  data: any = [ 
    { id: 1, name: 'Endpoint:', details: "", parent: 0},
    { id: 2, name: 'Request Type:', details: "", parent: 0},
    { id: 3, name: 'Scheme:', details: "HTTPS", parent: 0},
    { id: 4, name: 'Header (Content-Type):', details: "application/json", parent: 0},
    { id: 5, name: 'Header (Authorization):', details: "", parent: 0}
  ];

  // Basic Information
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
      },
    ]
  };


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
        width: '200px',
      },
      {
        name: 'Type',
        header: 'Type',
        width: '200px'
      },
      {
        name: 'Mendate',
        header: 'Mandatory',
        width: '200px'
      },
      {
        name: 'Description',
        header: 'Description',
        width: '200px'
      }
    ],
    subgrid_config: {
      show_summary_row: true
    }
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
      this.angularGrid2?.expandAll();
      console.log("here3");
    }
  }



  //for success payload details
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
      },
    ]
  };

  collapseAll3() {
    if(this.angularGrid3)
      this.angularGrid3?.collapseAll();
  }

  // success Payload Details
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

  
  @ViewChild('angularGrid4') angularGrid4: AngularTreeGridComponent | undefined;
  data4: any =[];

  configs4: any = {
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

  collapseAll4() {
    if(this.angularGrid4)
      this.angularGrid4?.collapseAll();
  }

  expandAll4($event :any) {
    console.log($event?.data?.Level)
    let id = $event?.data?.Level;
    console.log("here");
    if(this.angularGrid4){
      console.log(id);
      this.angularGrid4?.expandRow(id);
    }
  }

  //Validation
  @ViewChild('angularGrid5') angularGrid5: AngularTreeGridComponent | undefined;
  data5: any = [];
  configs5: any = {
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
        width: '100px'
      },
      {
        name: 'enum',
        header: 'Enum',
        width: '200px'
      },
      {
        name: 'maxLength',
        header: 'maxLength',
        width: '60px'
      },
      {
        name: 'minLength',
        header: 'minLength',
        width: '60px'
      },
      {
        name: 'pattern',
        header: 'Pattern',
        width: '400px'
      },
    ]
  };

  collapseAll5() {
    if(this.angularGrid5)
      this.angularGrid5?.collapseAll();
  }

  // Validation
  expandAll5($event :any) {
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
    this.successPayloadArray = this.childMessage?.schema?.responsePayload?.sucessDetails;
    this.failurePayloadArray = this.childMessage?.schema?.responsePayload?.failureDetails;

    // this.validationPayloadArray = this.childMessage?.schema?.validationPayloadArray;
    // this.failurePayloadArray = this.childMessage?.schema?.validationPayload?.failureDetails;

    this.methodTitle = methodData?.description;
    this.methodDescription = methodData?.subDescription;
    this.requestPayload = methodData?.schema?.requestPayload;
    this.responsePayload = methodData?.schema?.responsePayload;
    // this.validationPayload = methodData?.schema?.validationPayload;
    
    this.data[0].details = methodData?.path;
    this.data[1].details = methodData?.name;
    this.data[4].details = methodData?.schema?.security == [] ? "" : Object.keys(methodData?.schema?.security[0]);
    // console.log(methodData?.schema?.responsePayload);
    this.data2 = methodData?.schema?.requestPayloadDetails;
    this.data3 = methodData?.schema?.responsePayload?.successDetails;
    this.data4 = methodData?.schema?.responsePayload?.failureDetails;
    this.data5 = methodData?.schema?.requestValidation;

    // this.data5 = methodData?.schema?.validationPayload;
    // console.log("Validation Data: " +methodData?.schema?.validation);
  }


  emptyCheck(node: any){

    // console.log( "pup sala" + node );
    // return true;
    return node != null && Object.keys(node).length > 0;
  }


}
