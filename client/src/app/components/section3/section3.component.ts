import { Component } from '@angular/core';
import { cardData } from '../../model/job';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JobpostApiService } from '../../service/jobpost-service/jobpost-api.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-section3',
  standalone: true,
  imports: [CommonModule , FormsModule, RouterLink],
  templateUrl: './section3.component.html',
  styleUrl: './section3.component.css'
})
export class Section3Component {
categorydata=cardData
alljobs: any[] = [];
countJobs = 0;

constructor(
  private jobpostApi:JobpostApiService,
  private router:Router
){}

ngOnInit(){
  this.handleSearch("Designing Jobs")
}

handleSearch(category:string){
  const params =  {jobcategory:category}
  this.jobpostApi.getfilter(params).subscribe({
    next: (res: any) => {

      this.alljobs = res.body.data

      this.countJobs = res?.body.data.length
      // console.log(this.alljobs)
     
      
     
    },
    error: (error) => {
      console.log(error);
    }
  })
}

handlebutton(id: string) {
  const path = `/job-detail/${id}`
  this.router.navigate([path])
}
}
