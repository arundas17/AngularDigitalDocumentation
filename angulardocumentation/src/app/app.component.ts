import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angulardocumentation';
  name:string="AngularDocumentation";
  count:number=0;
  
  buttonClick() {
    console.log("Button clicked!");
    this.name="stay focus on AngularDocumentation";
   
  }
  couter(){
    this.count++;
  }
  couterinifite(){
    setInterval(() => {
    this.couter();
    },1000) 
  }
 

}
