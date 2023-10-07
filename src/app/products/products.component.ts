import { Component, OnInit, SimpleChange } from '@angular/core';
import { Product } from '../repertoire/Product';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {



  nameOfProduct='';
  listProducts:Product[]=[
    {id: 1, title: "T-shirt 1", price: 18, quantity: 0, like: 0},
    {id: 2, title: "T-shirt 2", price: 21, quantity: 10, like: 0},
    {id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0}, ]
    increaseLike(p:any){
//console.log(p);
//let index=this.listProducts.indexOf(p);
this.listProducts[p].like++;
    }

   

    constructor(private router: Router) { }
    
// route service qui me permet de naviguer entre les route
  

    ngOnInit():void{

    }
    

    ngOnchanges(changes:SimpleChange):void{

    }

    goTocomponentDetail(idofproduct:any){
   this.router.navigate(['user/detail',idofproduct])

    }
}