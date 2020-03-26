import { Component, OnInit } from '@angular/core';
import { News } from '../mynews';
import { MyhttpserveService } from '../myhttpserve.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  newobj : News;
  newsarray : Array<News>=[];
  constructor(private myhttpobj : MyhttpserveService) { 
    this.newobj=new News();
  }

  ngOnInit(): void {
    this.getRecords();
  }

  StoreNews()
  {
    //this.newsarray.push(this.newobj);
    this.myhttpobj.addNews(this.newobj).subscribe(
      (newsobj)=>
       {
      console.log("Added " + newsobj.description);
     this.newsarray.push(this.newobj);
     this.newobj=new News();
       }
         ,
         (err)=>
         {
           console.log("not added");
         }
    );
    
   // this.getRecords();
  }

  getRecords()
  {
    this.myhttpobj.getallNews().subscribe(
    (narrayobj) =>
    {
      this.newsarray=narrayobj;
    },
    (err)=>
    {
      console.log("error" + err);
    }
  )
  }
}
