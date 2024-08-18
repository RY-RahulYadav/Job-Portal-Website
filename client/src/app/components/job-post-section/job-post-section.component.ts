import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { JobpostApiService } from '../../service/jobpost-service/jobpost-api.service';
import { UserStatusService } from '../../service/dataService/user-status.service';
import { CommonModule } from '@angular/common';
import { cardData, techCities } from '../../model/job';

@Component({
  selector: 'app-job-post-section',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './job-post-section.component.html',
  styleUrl: './job-post-section.component.css'
})
export class JobPostSectionComponent {
  jobpostForm: FormGroup = this.fb.group({})
  categorydata=cardData
  techcities=techCities

  constructor(
    private fb: FormBuilder,
    private cokkieService: CookieService,
    private router: Router,
    private jobpostApi: JobpostApiService,
    private userState: UserStatusService
  ) { }

  ngOnInit() {

    this.jobpostForm = this.fb.group({
      jobTitle: [''],
      workmethod: [''],
      desc: [''],
      requiredSkill: [''],
      skills:[''],
      jobcompany:[''],
      benefits: [''],
      jobcategory: [''],
      jobrole: [''],
      experience: [''],
      salary: [''],
      jobpostdate: [''],
      deadline: [''],
      joblocation: [''],
      uploadlogo: [''],
    })
  }


  handleSubmit() {
    // console.log(this.jobpostForm.value);
    const data = this.jobpostForm.value
    
    const uid = this.cokkieService.get('uid')
    this.jobpostApi.createjob(uid, data).subscribe({
      next: (response:any) => {
        this.userState.updateUser(response.body.data)
       
        
         alert('job posted')
      },
      error:(error)=>{alert("job not posted") ; console.log(error);
      }
    })


  }
}
