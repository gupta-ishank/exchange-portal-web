import { Component, OnInit, AfterViewInit} from '@angular/core';
import { AppService } from '../app.service';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { CustomComponentComponent } from '../custom-component/custom-component.component'
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
export class SwaggerUiComponent implements OnInit {

  
  title = '';

  uiControl = {
    toogleSideBar: true
  }
  
  treeControl = new NestedTreeControl<MenuNode>(node => node.childs);
  dataSource = new MatTreeNestedDataSource<MenuNode>();
  mainMenuData: any = []

  editor : any
  constructor(private appService: AppService, private customComponentComponent: CustomComponentComponent) {
    this.refreshMenu();
  }

  ngOnInit(): void {
    // this.editor = SwaggerUIBundle({
    //   dom_id: '#swagger-ui',
    //   layout: 'BaseLayout',
    //   presets: [
    //     SwaggerUIBundle.presets.apis,
    //     SwaggerUIBundle.SwaggerUIStandalonePreset
    //   ],
    //   //to inject custom components
    //   // plugins: [CustomComponentComponent],
    //   // Layout: "./custom-component.component.html"
    //   // url: 'https://petstore.swagger.io/v2/swagger.json',
    // });
  }

  hasChild = (_: number, node: MenuNode) => !!node.childs && node.childs.length > 0; // !! = ?


  fileContent:any = []
//   async loadEditorSpec(node: any){
//     if(node === null){
//       let specDetails = "";
//       this.editor.specActions.updateSpec(specDetails)
//     }else{
//       this.appService.getContentOfFile(node).subscribe(data =>{
//         console.log(data)
//         this.fileContent = data;
//         let specDetails = "";
//         if(data != null) specDetails = this.fileContent["content"]
//         this.editor.specActions.updateSpec(specDetails)
//       })
//     }
//   }

//   async onClick(node: any){
//     // if(this.treeControl.isExpanded(node)) this.treeControl.expansionModel; 
//     if(node.type != 1){
//       await this.loadEditorSpec(node)
//     }
//     event?.stopPropagation()
//  }

  refreshMenu() {
    this.appService.getAllMenu().subscribe(async data => {
      console.log(data);
      this.mainMenuData = data
      this.dataSource.data = this.mainMenuData;
    //   await this.loadEditorSpec(null)
    })
  }
  
    renderData: any;
    renderMethod(node: any) {
      console.log(node);
      this.renderData = node;
      this.customComponentComponent.methodTitle = node.description;
    //   console.log(node.description);
    }
}