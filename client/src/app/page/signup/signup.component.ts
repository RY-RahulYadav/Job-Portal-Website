import { Component } from '@angular/core';
import { SignupSectionComponent } from "../../components/signup-section/signup-section.component";

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [SignupSectionComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
 ngOnInit(){
  window.scrollTo(0, 0)
 }
}
