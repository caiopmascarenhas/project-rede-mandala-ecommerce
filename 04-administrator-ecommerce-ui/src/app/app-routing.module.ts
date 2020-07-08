import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileLoginComponent } from './components/profileLogin/profileLogin.component';
import { ProfileUserComponent } from './components/profileUser/profileUser.component';
import { ProfilePasswordComponent } from './components/profilePassword/profilePassword.component';
import { ProfilePersonalInformationComponent } from './components/profilePersonalInformation/profilePersonalInformation.component';
import { ProfileForgotPasswordComponent } from './components/profileForgotPassword/profileForgotPassword.component';

import { PageHomeComponent } from './components/pageHome/pageHome.component';

import { ProductListComponent } from './components/productList/productList.component';
import { ProductAlterComponent } from './components/productAlter/productAlter.component';
import { ProductAddComponent } from './components/productAdd/productAdd.component';

import { ClientListComponent } from './components/clientList/clientList.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { ProductEnableComponent } from './components/product-enable/product-enable.component';



const routes: Routes = [
  {
    path: "",
    redirectTo: "/profileLogin",
    pathMatch: "full",
  },
  {
    path: "profileForgotPassword",
    component: ProfileForgotPasswordComponent,
  },
  {
    path: "profileLogin",
    component: ProfileLoginComponent,
  },

  {
    path: "pageHome",
    component: PageHomeComponent,
  },

  {
    path: "productList",
    component: ProductListComponent,
  },

  {
    path: "productAlter/:id",
    component: ProductAlterComponent,
  },

  {
    path: "productEnable/:id",
    component: ProductEnableComponent,
  },

  {
    path: "productAdd",
    component: ProductAddComponent,
  },

  {
    path: "clientList",
    component: ClientListComponent,
  },

  {
    path: "orderList",
    component: OrderListComponent,
  },

  {
    path: "profileUser",
    component: ProfileUserComponent,
    children: [
      {
        path: "ProfilePersonalInformation",
        component: ProfilePersonalInformationComponent,
      }, 

      {
        path: "profilePassword",
        component: ProfilePasswordComponent,
      }, 
    ]
  },

  {
    path: "**",
    redirectTo: "pageHome",
    pathMatch: "full"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
