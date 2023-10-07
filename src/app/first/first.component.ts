import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  klass="4TWIN5"
  kolor='red';
  Q=40;
  property2="Bonsoir";

  property1="Bonjour";
  methodeA(){
    return 2
  }


isdisabled=true;


message: string = '';
methodeB(){
this.message = "vous avez implémenté le EventvBinding"
}


getColor(){
  if(this.Q<10){return 'pink';}
  else{
    return 'green';
  }
}

sayHello(){
  console.log('hello')
}


changeColor(k:any){
  this.kolor=k;
}

}
