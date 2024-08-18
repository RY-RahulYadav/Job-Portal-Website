import { Component } from '@angular/core';


import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LoginSectionComponent } from '../../components/login-section/login-section.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginSectionComponent , ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 ngOnInit(){
  window.scrollTo(0, 0)
 }

}
