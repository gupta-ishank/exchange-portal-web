import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AppService } from '../app.service';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import { MenuNode } from '../menuNode'
declare const SwaggerUIBundle: any;

@Component({
  selector: 'app-swagger-ui',
  templateUrl: './swagger-ui.component.html',
  styleUrls: ['./swagger-ui.component.css']
})
export class SwaggerUiComponent implements OnInit {

  title = 'EXCHANGE-PORTAL-UI';

  treeControl = new NestedTreeControl<MenuNode>(node => node.childs); 
  dataSource = new MatTreeNestedDataSource<MenuNode>();
//   fileDataSource = new MatTreeNestedDataSource<MenuNode>();
  mainMenuData:any = []  
  fileData:any = [] 
  allMenuData:any = [] 
  uiToogler = {
    menuSelected: "",
    button : "Create"
  }
  
  ngOnInit(): void {
    const ui = SwaggerUIBundle({
        dom_id: '#swagger-ui',
        layout: 'BaseLayout',
        presets: [
          SwaggerUIBundle.presets.apis,
          SwaggerUIBundle.SwaggerUIStandalonePreset
        ],
        url: 'https://petstore.swagger.io/v2/swagger.json',
      });
  }

  constructor(private appService: AppService) { 
    this.refreshMenu();
 }

 hasChild = (_: number, node: MenuNode) => !!node.childs && node.childs.length > 0; // !! = ?
   onClick(nameSearch: any){
     this.uiToogler.button = "Update"
    for (const menu of this.allMenuData) {
      if(menu.name === nameSearch){
        // this.menuData = menu
        this.uiToogler.menuSelected = nameSearch;
      }
    } 
    event?.stopPropagation()
  }

  doubleClick(node: MenuNode){
      if(node.type != 1){
          this.appService.getFileData(node).subscribe(data => {
                this.fileData = data;
                // this.fileDataSource.data = this.fileData;
          })
      }
      console.log(this.fileData);
  }

  refreshMenu(){
    

    this.appService.getAllMenu().subscribe(data =>{
        this.mainMenuData = data
        this.dataSource.data = this.mainMenuData;
    })
    // this.mainMenuData = [
    //     {
    //         "name": "Music",
    //         // "route": "/{name}",
    //         "type" : "1",
    //         "files": [
    //         "music.json"
    //         ],
    //         "childs": [
    //         {
    //             "name": "New folder",
    //             "type" : "1",
    //             "files": [],
    //             "childs": [
    //             {
    //                 "name": "nested.json",
    //                 "type" : "2",
    //                 "files": [],
    //                 "childs": []
    //             }
    //             ]
    //         },
    //         {
    //             "name": "Sub Music",
    //             "type" : "1",
    //             "files": [
    //             "new folder.json"
    //             ],
    //             "childs": [
    //                 {
    //                     "name": "nested",
    //                     "type" : "1",
    //                     "files": [],
    //                     "childs": []
    //                 }
    //                 ]
    //         }
    //         ]
    //     },
    //     {
    //         "name": "New User",
    //         "type" : "1",
    //         "files": [
    //         "new user.json"
    //         ],
    //         "childs": [
    //             {
    //                 "name": "nested",
    //                 "type" : "1",
    //                 "files": [],
    //                 "childs": []
    //             }
    //             ]
    //     },
    //     {
    //         "name": "Order",
    //         "type" : "1",
    //         "files": [
    //         "order.json"
    //         ],
    //         "childs": []
    //     },
    //     {
    //         "name": "Service",
    //         "type" : "1",
    //         "files": [
    //         "service.json"
    //         ],
    //         "childs": []
    //     }
    // ]
    // this.dataSource.data = this.mainMenuData;

  }

}