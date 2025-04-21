import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { NgClass } from '@angular/common'; // 
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet, RegistrationComponent, LoginComponent, NgClass,NgIf], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 userlogined='isuserloggined';

 useraction(){
  this.userlogined='userloggouted'
 }
}
