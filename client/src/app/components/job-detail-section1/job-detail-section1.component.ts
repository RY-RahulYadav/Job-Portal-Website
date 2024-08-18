import { ApplicationModule, ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobpostApiService } from '../../service/jobpost-service/jobpost-api.service';
import { UserStatusService } from '../../service/dataService/user-status.service';
import { CookieService } from 'ngx-cookie-service';
import { CommonModule } from '@angular/common';
import { AppliedUserModalComponent } from '../applied-user-modal/applied-user-modal.component';
import { SmallApplyModelComponent } from "../small-apply-model/small-apply-model.component";

@Component({
  selector: 'app-job-detail-section1',
  standalone: true,
  imports: [CommonModule, AppliedUserModalComponent, SmallApplyModelComponent],
  templateUrl: './job-detail-section1.component.html',
  styleUrl: './job-detail-section1.component.css'
})
export class JobDetailSection1Component {
  jobdata: any;
  userType: string = ""
  jobid: string = ""
  jobpoststatus: boolean = false;
  applicantModel = false;
  smallApplyModel = false;
  userdata: any;
  candidateStatus = 'Apply Now'

  constructor(
    private router: Router,
    private jobpostApi: JobpostApiService,
    private activatedRouter: ActivatedRoute,
    private userState: UserStatusService,
    private cokkieService: CookieService,
    private cdr: ChangeDetectorRef
  ) { }



  ngOnInit() {
    this.jobid = this.activatedRouter.snapshot.paramMap.get('id')!;
    // console.log(this.jobid);



    this.userState.userData$.subscribe(data => {
      this.userdata = data;
      // console.log(this.userdata);



      if (this.userdata) {
        const appliedApplicantIds = this.userdata?.appliedjob;
        const hasApplied = appliedApplicantIds?.find((job: any) => job?._id === this.jobid);
        console.log(hasApplied);

        if (hasApplied) {
          // console.log(hasApplied);
          this.candidateStatus = "Already Applied";
        }
      }


      if (data?.usertype == 'recruiter') {
        // console.log(data.postedJobs);
        const findid = data?.postedJobs.find((item: any) => item._id === this.jobid);
        if (findid) {
          this.jobpoststatus = true;
        }
      }


      // console.log(this.jobpoststatus);
      this.cdr.detectChanges();
    });



    this.jobpostApi.getjob(this.jobid).subscribe({
      next: (response: any) => {
        this.jobdata = response.body.data;

        // this.jobdata.requiredSkill = this.jobdata.requiredSkill.split('\n');
        // this.jobdata.benefits = this.jobdata.benefits.split('\n');
        // this.userState.userData$.subscribe(date=>console.log(46 , date))
      },
      error: (error) => {
        console.log(error);
        alert('job not exist');
        this.router.navigate(['/']);
      }
    });
  }

  handleApplicantModel() {
    this.applicantModel = true;
  }
  handleEmitModel(event: boolean) {
    this.applicantModel = event
  }
  handleSmallModel() {
    this.smallApplyModel = true;
  }
  handlesmallmodel(event: boolean) {
    this.smallApplyModel = event;
  }

  

  handlesave() {
    const token = this.cokkieService.get('uid')
    if (!token) {
      alert('plz login first')
      return;
    }
    this.jobpostApi.postsave({ jobId: this.jobid, applicantId: this.userdata?._id }, token).subscribe({
      next: (response:any) => { 
        const user = response.body.data
        // console.log(user);
        
        this.userState.updateUser(user) 
        alert('Saved Successfully !')
        
      },
      error: (error) => { 
        console.log(error);
        alert(error.error.message)
        
      }
    })
  }
}
