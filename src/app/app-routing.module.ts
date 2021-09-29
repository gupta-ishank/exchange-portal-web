import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SwaggerUiComponent } from './swagger-ui/swagger-ui.component';

const routes: Routes = [
    {path: 'swagger', component: SwaggerUiComponent},
    {path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
