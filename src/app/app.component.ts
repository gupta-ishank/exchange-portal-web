import { Component } from '@angular/core';
// import { SwaggerUI } from 'swagger-ui';

declare const SwaggerEditorBundle: any;
declare const SwaggerEditorStandalonePreset: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  opened = false;

  ngOnInit(): void {
    const editor = SwaggerEditorBundle({
      dom_id: '#swagger-editor',
      layout: 'StandaloneLayout',
      presets: [
        SwaggerEditorStandalonePreset
      ]   
    });
  }

  

  toggleSidebar(){
    this.opened = !this.opened;
  }
}
