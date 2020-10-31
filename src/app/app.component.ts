import { Component } from '@angular/core';
import  arraywords from "../utility//words";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'word-generator';
  words ='';
  limit =10;
  handle(newLimit:number){
     this.limit = newLimit;
  }
  generate(){
    this.words = arraywords.slice(0,this.limit).join(' ');

  }

}
