import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { FirstComponent } from './first/first.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { LoginComponent } from './core/manageUser/login/login.component';
import { DetailComponent } from './core/manageUser/detail/detail.component';
import { ShowUserComponent } from './core/manageUser/show-user/show-user.component';
import { UpdateUserComponent } from './core/manageUser/update-user/update-user.component';
import { DeleteUserComponent } from './core/manageUser/delete-user/delete-user.component';
import { MainInvoiceComponent } from './main-invoice/main-invoice.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { InvoiceComponent } from './invoice/invoice.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'p',component:ProductsComponent},
  {path:'f',component:FirstComponent},
  {path:'detail/:id/:name',component:DetailComponent},
//  aandi plusieur route yebdew b user donc naamlou children
  // {path:'user',component:ShowUserComponent},
  {path:'user',component:ShowUserComponent,children:[
    //najem naadi 2 paramametre fil url 
    // {path:'detail/:id/:name',component:DetailComponent},  
    {path:'detail/:id',component:DetailComponent},
    {path:'edit/:id',component:UpdateUserComponent},
    {path:'delete/:id',component:DeleteUserComponent},
]},
  // {path:'user/:id/:name',component:DetailComponent},
  // {path:'user/edit/:id',component:UpdateUserComponent},
  // {path:'user/delete/:id',component:DeleteUserComponent},

  { path: '', redirectTo: '/mvoice', pathMatch: 'full' }, 
  {path:'mvoice',component:MainInvoiceComponent},
  {path:'list',component:InvoiceListComponent},
  {path:'invoice/:id/:active',component:InvoiceComponent},
  // {path:'invoice',component:InvoiceComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
