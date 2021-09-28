import { Component, OnInit } from '@angular/core';
// import { MenuService } from './menu.service';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import { SwaggerUiComponent } from './swagger-ui/swagger-ui.component';

// declare const SwaggerUIBundle: any;
interface MenuNode {
  name: string;
  files?: string;
  childs?: MenuNode[];
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EXHCHANGE-PORTAL-UI';

  treeControl = new NestedTreeControl<MenuNode>(node => node.childs); 
  dataSource = new MatTreeNestedDataSource<MenuNode>();
  mainMenuData:any = []  
  allMenuData:any = [] 
  uiToogler = {
    menuSelected: "",
    button : "Create"
  }
//   ngOnInit(): void {
//     const ui = SwaggerUIBundle({
//         dom_id: '#swagger-ui',
//         layout: 'BaseLayout',
//         presets: [
//           SwaggerUIBundle.presets.apis,
//           SwaggerUIBundle.SwaggerUIStandalonePreset
//         ],
//         url: 'https://petstore.swagger.io/v2/swagger.json',
//       });
//   }
//   menuData = {
//     name: "",
//     route: "",
//     permission: "",
//     parent_id: "",
//     projId : "P_001"
//   }

  constructor() { 
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
    // this.menuService.getMainMenuData(this.menuData.projId).subscribe(data =>{
    //   this.mainMenuData = data
    // })
    // this.menuService.getAllMenuData(this.menuData.projId).subscribe(data =>{
        //   this.allMenuData = data
        // })

    this.mainMenuData = [
        {
            "name": "Music",
            // "route": "/{name}",
            "files": [
            "music.json"
            ],
            "childs": [
            {
                "name": "New folder",
                "files": [],
                "childs": [
                {
                    "name": "nested",
                    "files": [],
                    "childs": []
                }
                ]
            },
            {
                "name": "Sub Music",
                "files": [
                "new folder.json"
                ],
                "childs": []
            }
            ]
        },
        {
            "name": "New User",
            "files": [
            "new user.json"
            ],
            "childs": []
        },
        {
            "name": "Order",
            "files": [
            "order.json"
            ],
            "childs": []
        },
        {
            "name": "Service",
            "files": [
            "service.json"
            ],
            "childs": []
        }
    ]
    this.dataSource.data = this.mainMenuData;

  }
}
