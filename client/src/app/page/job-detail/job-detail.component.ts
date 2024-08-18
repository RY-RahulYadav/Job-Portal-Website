import { Component } from '@angular/core';
import { Aboutsection1Component } from "../../components/aboutsection1/aboutsection1.component";
import { JobDetailSection1Component } from "../../components/job-detail-section1/job-detail-section1.component";
import { Section5Component } from "../../components/section5/section5.component";
import { AppliedUserModalComponent } from "../../components/applied-user-modal/applied-user-modal.component";


@Component({
  selector: 'app-job-detail',
  standalone: true,
  imports: [Aboutsection1Component, JobDetailSection1Component, Section5Component, AppliedUserModalComponent],
  templateUrl: './job-detail.component.html',
  styleUrl: './job-detail.component.css'
})
export class JobDetailComponent {
  ngOnInit(){
    window.scrollTo(0, 0)
   }
}
