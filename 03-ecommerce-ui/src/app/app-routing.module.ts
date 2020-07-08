import { NgModule, Component} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginAuthService } from './services/login-auth.service';


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
import {  UserCheckoutComponent } from'./components/userCheckout/userCheckout.component';
import { PurchaseDetailsComponent } from './components/purchase-details/purchase-details.component';





const routes: Routes = [
  {
    path: "",
    redirectTo: "/pageHome",
    pathMatch: "full",
  },

  {
    path: "pageHome",
    component: PageHomeComponent,

  },

  {
    path: "pageAbout",
    component: PageAboutComponent
  },

  {
    path: "pageContact",
    component: PageContactComponent,
  },

  {
    path: "pageCart",
    component: PageCartComponent
  },
  
  {
    path: "pageAccessories",
    component: PageAccessoriesComponent
  },

  {
    path: "pageProductRedeAdult",
    component: PageProductRedeAdultComponent
  },

  {
    path: "pageProductRedeKid",
    component: PageProductKidComponent
  },

  {
    path: "pageProductDetails/:id",
    component: PageProductDetailsComponent
  },

  {
    path: "systemLogin",
    component: SystemLoginComponent
  },

  {
    path: "systemRegister",
    component: SystemRegisterComponent
  },

  {
    path: "systemForgotPass",
    component: SystemForgotPassComponent
  },
  

  {
    path: "userColumnMenu",
    component: UserColumnMenuComponent,
    canActivate: [LoginAuthService],
    children: [
      {
        path: "userPersonalInformation",
        component: UserPersonalInformationComponent
      },
      {
        path: "userAlterAddress",
        component: UserAlterAddressComponent
      },
      {
        path: "userAlterPassword",
        component: UserAlterPasswordComponent
      },
      {
        path: "userPayment",
        component: UserPaymentComponent
      },
      {
        path: "userOrders",
        component: UserOrdersComponent
      },
      {
        path : "userOrder/:compra",
        component: PurchaseDetailsComponent
      }
     
    ]
  },
  {
    path: "userCheckout",
    canActivate: [LoginAuthService],
    component: UserCheckoutComponent
  },
  {
    path: "**",
    redirectTo: "pageHome",
    pathMatch: "full"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
