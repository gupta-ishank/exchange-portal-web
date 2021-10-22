import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { AppService } from '../app.service';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { CustomComponentComponent } from '../custom-component/custom-component.component'
import { MatSidenavContainer } from '@angular/material/sidenav';
import { Router } from '@angular/router';
declare const SwaggerUIBundle: any;
interface MenuNode {
  name: string;
  type: number;
  childs?: MenuNode[];
}
@Component({
  selector: 'app-swagger-ui',
  templateUrl: './swagger-ui.component.html',
  styleUrls: ['./swagger-ui.component.css']
})
export class SwaggerUiComponent implements OnInit{

  
  title = 'Netmeds Documentations';

  currentUser : any;

  @ViewChild(CustomComponentComponent) customReference : CustomComponentComponent | undefined;

  uiControl = {
    toogleSideBar: true
  }
  
  treeControl = new NestedTreeControl<MenuNode>(node => node.childs);
  dataSource = new MatTreeNestedDataSource<MenuNode>();
  mainMenuData: any = []

  editor : any
  constructor(private appService: AppService, 
    private route: Router) {
    this.refreshMenu();
  }

  ngOnInit(): void {
    
  }
  
  hasChild = (_: number, node: MenuNode) => !!node.childs && node.childs.length > 0; // !! = ?


  fileContent:any = []
  async loadEditorSpec(node: any){
    if(node === null){
      let specDetails = "";
      this.editor.specActions.updateSpec(specDetails)
    }else{
      this.appService.getContentOfFile(node).subscribe(data =>{
        console.log(data)
        this.fileContent = data;
        let specDetails = "";
        if(data != null) specDetails = this.fileContent["content"]
        this.editor.specActions.updateSpec(specDetails)
      })
    }
  }

  async onClick(node: any){
    // if(this.treeControl.isExpanded(node)) this.treeControl.expansionModel; 
    if(node.type != 1){
      await this.loadEditorSpec(node)
    }
    event?.stopPropagation()
  }

  refreshMenu() {
    this.appService.getAllMenu().subscribe(async data => {
      this.mainMenuData = data
      this.dataSource.data = this.mainMenuData;
      let user = localStorage.getItem("user");
      
      console.log("User = " + user)
      if(localStorage.length == 0){
        this.route.navigate(['/login']);
      }else{

        this.currentUser = JSON.parse(user == null ? " ": user);
      }
    })
  }

  renderData : any;
  handleRenderData(node : any){
    console.log(node);
    this.renderData = node;
    this.customReference?.renderMethodData(node);
  }

  handleLogout(){
    localStorage.removeItem("user");
    this.route.navigate(['/login']);
  }
}