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
  showLoading = true;

  @ViewChild(CustomComponentComponent) customReference : CustomComponentComponent | undefined;

  uiControl = {
    toogleSideBar: true
  }
  
  treeControl = new NestedTreeControl<MenuNode>(node => node.childs);
  dataSource = new MatTreeNestedDataSource<MenuNode>();
  mainMenuData: any = []

  editor : any
  constructor(private appService: AppService, 
    public loginService: LoginService,
    private route: Router) {
  }

  ngOnInit(): void {
    this.refreshMenu();
  }
  
  hasChild = (_: number, node: MenuNode) => !!node.childs && node.childs.length > 0; // !! = ?


  fileContent:any = []


  refreshMenu() {
    this.appService.getAllMenu().subscribe(data => {
      this.showLoading = false;
      this.mainMenuData = data
      this.dataSource.data = this.mainMenuData;
    })
  }

  renderData : any;
  handleRenderData(node : any){
    this.renderData = node;
    this.customReference?.renderMethodData(node);
  }

  handleLogout(){
    this.route.navigate(['/login']);
  }
}