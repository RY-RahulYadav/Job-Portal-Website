import { Component } from '@angular/core';
import { Aboutsection1Component } from "../../components/aboutsection1/aboutsection1.component";
import { Section2Component } from "../../components/section2/section2.component";
import { Section1Component } from "../../components/section1/section1.component";
import { Section0Component } from "../../components/section0/section0.component";
import { Section3Component } from "../../components/section3/section3.component";
import { Section4Component } from "../../components/section4/section4.component";
import { Section5Component } from "../../components/section5/section5.component";
import { Section1aComponent } from "../../components/section1a/section1a.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [Aboutsection1Component, Section2Component, Section1Component, Section0Component, Section3Component, Section4Component, Section5Component, Section1aComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  ngOnInit(){
    window.scrollTo(0, 0)
   }
}
