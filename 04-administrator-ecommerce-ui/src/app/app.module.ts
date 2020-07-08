import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";

import { LayoutHeaderComponent } from './components/layoutHeader/layoutHeader.component';
import { LayoutFooterComponent } from './components/layoutFooter/layoutFooter.component';

import { PageHomeComponent } from './components/pageHome/pageHome.component';

import { ProfileUserComponent } from './components/profileUser/profileUser.component';
import { ProductListComponent } from './components/productList/productList.component';
import { ProductAlterComponent } from './components/productAlter/productAlter.component';
import { ProductAddComponent } from './components/productAdd/productAdd.component';

import { ClientListComponent } from './components/clientList/clientList.component';
import { ProfileLoginComponent } from './components/profileLogin/profileLogin.component';
import { ProfilePasswordComponent } from './components/profilePassword/profilePassword.component';

import { ProfilePersonalInformationComponent } from './components/profilePersonalInformation/profilePersonalInformation.component';
import { ProfileForgotPasswordComponent } from './components/profileForgotPassword/profileForgotPassword.component';

import { OrderListComponent } from './components/order-list/order-list.component';
import { ProductEnableComponent } from './components/product-enable/product-enable.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHomeComponent,
    LayoutHeaderComponent,
    LayoutFooterComponent,
    ProfileUserComponent,
    ProductListComponent,
    ProductAlterComponent,
    ProductAddComponent,
    ClientListComponent,
    ProfileLoginComponent,
    ProfilePasswordComponent,
    ProfilePersonalInformationComponent,
    ProfileForgotPasswordComponent,
 
    OrderListComponent,
 
    ProductEnableComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
