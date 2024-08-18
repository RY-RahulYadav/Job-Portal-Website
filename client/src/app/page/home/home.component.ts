import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { Section1Component } from '../../components/section1/section1.component';
import { Section2Component } from "../../components/section2/section2.component";
import { Section3Component } from "../../components/section3/section3.component";
import { Section4Component } from "../../components/section4/section4.component";
import { Section0Component } from "../../components/section0/section0.component";
import { Section5Component } from "../../components/section5/section5.component";
import { Section1aComponent } from "../../components/section1a/section1a.component";
import { Section1bComponent } from "../../components/section1b/section1b.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Section1Component, Section2Component, Section3Component, Section4Component, Section0Component, Section5Component, Section1aComponent, Section1bComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor() { }
  ngOnInit(){
    window.scrollTo(0, 0)
   }
}
