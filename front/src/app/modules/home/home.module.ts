import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent

  ]
})
export class HomeModule { }
