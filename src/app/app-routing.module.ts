import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SwaggerUiComponent } from './swagger-ui/swagger-ui.component';

const routes: Routes = [
    {path: '', component: SwaggerUiComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
