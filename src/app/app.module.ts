import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import {HttpClientModule } from '@angular/common/http';
import { DemoMaterialModule } from './material-module';
import { SwaggerUiComponent } from './swagger-ui/swagger-ui.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CustomComponentComponent } from './custom-component/custom-component.component';
import {AngularTreeGridModule} from 'angular-tree-grid';

@NgModule({
  declarations: [
    AppComponent,
    SwaggerUiComponent,
    LoginComponent,
    SignupComponent,
    CustomComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DemoMaterialModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularTreeGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
