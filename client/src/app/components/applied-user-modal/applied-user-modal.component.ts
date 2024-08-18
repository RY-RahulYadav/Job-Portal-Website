import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserStatusService } from '../../service/dataService/user-status.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-applied-user-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './applied-user-modal.component.html',
  styleUrl: './applied-user-modal.component.css'
})
export class AppliedUserModalComponent implements OnInit {
  @Input() jobid: string = "";
  @Output() emitModel: EventEmitter<boolean> = new EventEmitter<boolean>();
  applicantData: any ;
  applicantcount=0;
 
  constructor(
    private userState: UserStatusService,
    private router:Router
  ) { }

  ngOnInit() {
    this.userState.userData$.subscribe((data) => {
      // console.log(this.jobid);
      
      if(data){
        const job = data.postedJobs.find((job: any) => job._id === this.jobid);
      
      // console.log(this.jobid , job , data.postedJobs , this.applicantData);
      this.applicantData=job.appliedApplicant
      this.applicantcount=job.appliedApplicant.length
     
    }
    })
  }
  handleview(url:string){
    if(url){

      window.open(url);
    }else{
      alert("user not upload resume");
    }
  }

  handleclose(){
    this.emitModel.emit(false)
  }
 
}
