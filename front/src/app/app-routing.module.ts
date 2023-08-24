import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './modules/home/login/login.component';
import { HeaderComponent } from './modules/home/header/header.component';
import { MainComponent } from './modules/home/main/main.component';
import { FooterComponent } from './modules/home/footer/footer.component';

const routes: Routes = [
  /*{
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
  },*/
  
  {
    path:'login',component:LoginComponent
  },
  {
    path:'',component:LoginComponent
  },
  { path: 'header', component: HeaderComponent
  },
  { 
    path: 'main', component: MainComponent
  },
  { 
    path: 'footer', component: FooterComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
