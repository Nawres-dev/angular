import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private activatedroute:ActivatedRoute){

  }

  ngOnInit(){
    // query param ba3ed ? fil url
  console.log(this.activatedroute.snapshot.queryParams['classe'])
console.log(this.activatedroute.snapshot.params['id'])
//onsole.log(this.activatedroute.snapshot.params['name'])
this.activatedroute.params.subscribe(
  // ki nheb naffichi id kahaw
  // (d)=>console.log(d['id'])
   (d)=>console.log(d));
  }
}
