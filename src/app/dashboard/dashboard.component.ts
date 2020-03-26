import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  
  name:string ="mary";
  score:number;
  subjects : string[] = ["Maths","Physics","Chemistry"]

  mycolor:string="red";
  
  answer : boolean =true;


  constructor() {
    this.score=78;
   }

   callFun() : void 
   {

   if(this.score>50)
   {
   this.answer=false;
this.mycolor="green";
   }
   else
   {
    this.answer=true;
this.mycolor="blue";
   }

   }

  ngOnInit(): void {
  }

}
