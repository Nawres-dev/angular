import { Component } from '@angular/core';
import { Produit } from '../repertoire/Produit';

@Component({
  selector: 'app-list-produits-component',
  templateUrl: './list-produits-component.component.html',
  styleUrls: ['./list-produits-component.component.css']
})
export class ListProduitsComponentComponent {

  j=-1;
  search: string = '';

  listProduits:Produit[]=
  [
    {idProduit:1,code:"P147852P",libelle:"Produit1", prixUnitaire:12.5, tauxTVA:0.02},
    {idProduit:2,code:"P147552P",libelle:"Produit1", prixUnitaire:30, tauxTVA:0.1980},
    {idProduit:3,code:"D14785CC",libelle:"Produit1", prixUnitaire:20, tauxTVA:0.1980},
    {idProduit:4,code:"E147852P",libelle:"Produit1", prixUnitaire:50, tauxTVA:0.1980},
    {idProduit:5,code:"F147852P",libelle:"Produit1", prixUnitaire:70, tauxTVA:0.02},
    ]

    
    get filteredProduits(): Produit[] {
      return this.listProduits.filter(produit =>
        produit.code.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  
  
    CalculTVA(i:number){

      this.listProduits[i].tauxTVA=0.02;
      this.j=i;
    }

   
    Ajouter(f:any){
      // console.log(f);

      this.listProduits.push(f.value);
    }

}
