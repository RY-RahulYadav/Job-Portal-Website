import { Component } from '@angular/core';
import { Aboutsection1Component } from "../../components/aboutsection1/aboutsection1.component";
import { SearchJobComponent } from "../search-job/search-job.component";
import { Section5Component } from "../../components/section5/section5.component";
import { ContactSection1Component } from "../../components/contact-section1/contact-section1.component";

@Component({
  selector: 'app-contant-us',
  standalone: true,
  imports: [Aboutsection1Component, SearchJobComponent, Section5Component, ContactSection1Component],
  templateUrl: './contant-us.component.html',
  styleUrl: './contant-us.component.css'
})
export class ContantUsComponent {
  ngOnInit(){
    window.scrollTo(0, 0)
   }
}
