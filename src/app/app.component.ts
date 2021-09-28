import { Component } from '@angular/core';
// import { MenuService } from './menu.service';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';


interface MenuNode {
  name: string;
  mId: string;
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
  
  menuData = {
    mid: "",
    name: "",
    description: "",
    route: "",
    permission: "",
    parent_id: "",
    projId : "P_001"
  }
  constructor() { 
      this.refreshMenu();
   }

   hasChild = (_: number, node: MenuNode) => !!node.childs && node.childs.length > 0; // !! = ?
   onClick(menuId: any){
     this.uiToogler.button = "Update"
    for (const menu of this.allMenuData) {
      if(menu.mId === menuId){
        this.menuData = menu
        this.uiToogler.menuSelected = menuId
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
          "mId":"M_001",
          "pid":"P_001",
          "name":"Home",
          "desc":"home",
          "route":"/home",
          "permission":"HOME",
          "childs":[]
        },
        {
          "mId":"M_002",
          "name":"Petstore",
          "desc":"Petstore",
          "route":"/petstore",
          "permission":"SALE_TRANSACTION",
          "childs":[
              {
                  "mId":"M_003",
                  "name":"petstore.json",
                  "desc":"petstore.json",
                  "route":"/petstore.json",
                  "permission":"PETSTORE_JSON",
                }
            ]
        },
        {
            "mId":"M_002",
            "name":"AppUi",
            "desc":"appui",
            "route":"/app-ui",
            "permission":"APP_UI",
            "childs":[
                {
                    "mId":"M_003",
                    "name":"appui.json",
                    "desc":"appui.json",
                    "route":"/appui.json",
                    "permission":"APP_UI_JSON",
                  }
              ]
          }
    ]
    this.dataSource.data = this.mainMenuData;

  }
}
