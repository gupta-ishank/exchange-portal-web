import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { AppService } from '../app.service';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { CustomComponentComponent } from '../custom-component/custom-component.component'
import { MatSidenavContainer } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';
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
    private loginService: LoginService,
    private route: Router) {
    this.refreshMenu();
  }

  ngOnInit(): void {
    
  }
  
  hasChild = (_: number, node: MenuNode) => !!node.childs && node.childs.length > 0; // !! = ?


  fileContent:any = []


  refreshMenu() {
    this.appService.getAllMenu().subscribe(async data => {
      this.mainMenuData = data
      this.dataSource.data = this.mainMenuData;
      let user = localStorage.getItem("name");
      /* this.loginService.checkLogin().subscribe( res =>{
        let checkRes : any = res;
        if(!checkRes.loggedIn){
          this.route.navigate(['/login']);
        }
      }) */
      this.currentUser = user == null ? " ": user;
    })
  }

  renderData : any;
  handleRenderData(node : any){
    this.renderData = node;
    this.customReference?.renderMethodData(node);
  }

  handleLogout(){
    localStorage.removeItem("name");
    this.loginService.doLogout().subscribe( res =>{
      if(res){
        this.route.navigate(['/login']);
      }
    })
  }
}