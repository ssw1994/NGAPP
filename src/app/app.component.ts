import { Component } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crmtawk';

  constructor(){
    try{
      $("document").ready(()=>{
        alert("JQuery Loaded");
      });
    }catch(error){
      console.error(error);
    }
  }
}
