import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AppService } from '../app.service';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
declare const SwaggerUIBundle: any;
interface MenuNode {
  name: string;
  files?: string;
  childs?: MenuNode[];
}
@Component({
  selector: 'app-swagger-ui',
  templateUrl: './swagger-ui.component.html',
  styleUrls: ['./swagger-ui.component.css']
})
export class SwaggerUiComponent implements OnInit {

  title = 'EXCHANGE-PORTAL-UI';

  treeControl = new NestedTreeControl<MenuNode>(node => node.childs); 
  dataSource = new MatTreeNestedDataSource<MenuNode>();
  mainMenuData:any = []  
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


  refreshMenu(){
    
    this.appService.getAllMenu().subscribe(data =>{
        this.mainMenuData = data
        this.dataSource.data = this.mainMenuData;
    })


    // this.mainMenuData = [
    //     {
    //         "name": "Music",
    //         // "route": "/{name}",
    //         "files": [
    //         "music.json"
    //         ],
    //         "childs": [
    //         {
    //             "name": "New folder",
    //             "files": [],
    //             "childs": [
    //             {
    //                 "name": "nested",
    //                 "files": [],
    //                 "childs": []
    //             }
    //             ]
    //         },
    //         {
    //             "name": "Sub Music",
    //             "files": [
    //             "new folder.json"
    //             ],
    //             "childs": []
    //         }
    //         ]
    //     },
    //     {
    //         "name": "New User",
    //         "files": [
    //         "new user.json"
    //         ],
    //         "childs": []
    //     },
    //     {
    //         "name": "Order",
    //         "files": [
    //         "order.json"
    //         ],
    //         "childs": []
    //     },
    //     {
    //         "name": "Service",
    //         "files": [
    //         "service.json"
    //         ],
    //         "childs": []
    //     }
    // ]
    

  }

}