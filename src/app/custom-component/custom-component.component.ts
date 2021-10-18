import { Component, Injectable, OnInit } from '@angular/core';
// import { SwaggerUiComponent } from '../swagger-ui/swagger-ui.component';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-custom-component',
  templateUrl: './custom-component.component.html',
  styleUrls: ['./custom-component.component.css']
})
export class CustomComponentComponent implements OnInit {
  content: any= [];
  methodTitle = "";
  methodDescription = "This is description of method";
  columns=["type", "header", "body"];
  tableData= [
    {
      "type":1,
      "header":"This is the header",
      "body":"This is the body",
    },
    {
      "type":1,
      "header":"This is the header",
      "body":"This is the body",
    },
    {
      "type":1,
      "header":"This is the header",
      "body":"This is the body",
    }
  ]

  setData(d: any, key: String) {
    // let k = "'" + key + "'"
    // console.log(d)
    // console.log(k)
    // console.log(d[k])
    return d.key;
  }

  tableDataKeys = Object.keys(this.tableData[0])
  
  constructor() { 
    // this.methodTitle = swaggerUiComponent.renderData.description;
    // this.methodDescription = swaggerUiComponent.renderData.subDescription;
    this.content = [
      {
        "type":"1",
        "header":"This is the header",
        "body":"This is the body",
        },
        {
        "type":"2",
        "body":"This is the body",
        },
        {
        "type":"3",
        "imgurl":".././basepath/url",
      }
    ]

    
  }

  ngOnInit(): void {
  }

}
