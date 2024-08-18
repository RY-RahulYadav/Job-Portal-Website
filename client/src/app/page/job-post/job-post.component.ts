import { Component } from '@angular/core';
import { JobPostSectionComponent } from "../../components/job-post-section/job-post-section.component";
import { Aboutsection1Component } from "../../components/aboutsection1/aboutsection1.component";
import { Section5Component } from "../../components/section5/section5.component";
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { JobpostApiService } from '../../service/jobpost-service/jobpost-api.service';
import { UserStatusService } from '../../service/dataService/user-status.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-job-post',
  standalone: true,
  imports: [JobPostSectionComponent, Aboutsection1Component, Section5Component],
  templateUrl: './job-post.component.html',
  styleUrl: './job-post.component.css'
})
export class JobPostComponent {

  ngOnInit(){
    window.scrollTo(0, 0)
   }


}
