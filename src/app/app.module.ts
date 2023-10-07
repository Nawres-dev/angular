import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { FormsModule } from '@angular/forms';
import { ListUserComponentComponent } from './list-user-component/list-user-component.component';
import { ChangeColorDirective } from './change-color.directive';
import { ProductsComponent } from './products/products.component';
import { ListProduitsComponentComponent } from './list-produits-component/list-produits-component.component';

import { NavComponent } from './shared/nav/nav.component';
import { RouterModule } from '@angular/router';
import { ShowUserComponent } from './core/manageUser/show-user/show-user.component';
import { DetailComponent } from './core/manageUser/detail/detail.component';
import { DeleteUserComponent } from './core/manageUser/delete-user/delete-user.component';
import { UpdateUserComponent } from './core/manageUser/update-user/update-user.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { MainInvoiceComponent } from './main-invoice/main-invoice.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ListUserComponentComponent,
    ChangeColorDirective,
    ProductsComponent,
    ListProduitsComponentComponent,
    ShowUserComponent,
    DetailComponent,
    DeleteUserComponent,
    UpdateUserComponent,
    NavComponent,
    InvoiceComponent,
    InvoiceListComponent,
    MainInvoiceComponent,
    HeaderComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent,FirstComponent]
})
export class AppModule { }
