import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JobpostApiService } from '../../service/jobpost-service/jobpost-api.service';
import { CookieService } from 'ngx-cookie-service';
import { UserStatusService } from '../../service/dataService/user-status.service';

@Component({
  selector: 'app-small-apply-model',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './small-apply-model.component.html',
  styleUrl: './small-apply-model.component.css'
})
export class SmallApplyModelComponent {
  @Input() jobid = ""
  @Input() user:any = ""
  @Output() emitsmallmodel: EventEmitter<boolean> = new EventEmitter<boolean>()
  checked: boolean = false;

  constructor(
    private jobpostApi: JobpostApiService,
    private cokkieService: CookieService,
    private userState: UserStatusService
  ) { }


  handleclose() {
    this.emitsmallmodel.emit(false)
  }

  handleApply() {
    const token = this.cokkieService.get('uid')
    if (!token) {
      alert('plz login first')
      return;
    }
    if(!this.checked){

      alert('plz check the box');
      return
    }
    this.jobpostApi.postapply({ jobId: this.jobid, applicantId: this.user._id }, token).subscribe({
      next: (response:any) => { 
        const user = response.body.data
        this.userState.updateUser(user) 
        alert('Applied Successfully !')
        this.handleclose()
      },
      error: (error) => { 
        console.log(error);
        alert(error.error.message)
        this.handleclose()
      }
    })
    
  }

  viewResume(url:string){
    if(url){
      window.open(url);
    }
  }

}
