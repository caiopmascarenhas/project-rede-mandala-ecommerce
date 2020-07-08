import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginAuthService } from './services/login-auth.service';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import {NgxMaskModule} from 'ngx-mask';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { LayoutHeaderComponent } from './components/layoutHeader/layoutHeader.component';
import { LayoutFooterComponent } from './components/layoutFooter/layoutFooter.component';
import { PageHomeComponent } from './components/pageHome/pageHome.component';
import { PageAboutComponent } from './components/pageAbout/pageAbout.component';
import { PageContactComponent } from './components/pageContact/pageContact.component';
import { PageCartComponent } from './components/pageCart/pageCart.component';
import { PageAccessoriesComponent } from  './components/pageAccessories/pageAccessories.component';
import { PageProductRedeAdultComponent } from './components/pageProductRedeAdult/pageProductRedeAdult.component';
import { PageProductKidComponent } from'./components/pageProductKid/pageProductKid.component';
import { PageProductDetailsComponent } from './components/pageProductDetails/pageProductDetails.component';

import { SystemLoginComponent } from './components/systemLogin/systemLogin.component';
import { SystemRegisterComponent } from './components/systemRegister/systemRegister.component';
import { SystemForgotPassComponent } from './components/systemForgotPass/systemForgotPass.component';

import { UserColumnMenuComponent } from './components/userColumnMenu/userColumnMenu.component';
import { UserPersonalInformationComponent } from './components/userPersonalInformation/userPersonalInformation.component';
import { UserAlterAddressComponent } from './components/userAlterAddress/userAlterAddress.component';
import { UserAlterPasswordComponent } from './components/userAlterPassword/userAlterPassword.component';
import { UserPaymentComponent } from './components/userPayment/userPayment.component';
import { UserOrdersComponent } from './components/userOrders/userOrders.component';
import { UserCheckoutComponent } from'./components/userCheckout/userCheckout.component';
import { UserMenuComponent } from'./components/userMenu/userMenu.component';
import { PurchaseDetailsComponent } from './components/purchase-details/purchase-details.component';




@NgModule({
  declarations: [

    AppComponent,

    LayoutHeaderComponent,
    LayoutFooterComponent,

    PageHomeComponent,
    PageAboutComponent,
    PageContactComponent,
    PageCartComponent,
    PageAccessoriesComponent,
    PageProductRedeAdultComponent,
    PageProductKidComponent,
    PageProductDetailsComponent,

    SystemLoginComponent,
    SystemRegisterComponent,
    SystemForgotPassComponent,
    
    UserColumnMenuComponent,
    UserPersonalInformationComponent,
    UserAlterAddressComponent,
    UserAlterPasswordComponent,
    UserPaymentComponent,
    UserOrdersComponent,
    UserCheckoutComponent,
    UserMenuComponent,
    PurchaseDetailsComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot() 
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
