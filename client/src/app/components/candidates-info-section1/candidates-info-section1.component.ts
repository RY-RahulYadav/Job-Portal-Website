import { ChangeDetectorRef, Component, effect, Input, signal, WritableSignal } from '@angular/core';

import { CandiateProfilePreviewSectionComponent } from "../candiate-profile-preview-section/candiate-profile-preview-section.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidates-info-section1',
  standalone: true,
  imports: [CandiateProfilePreviewSectionComponent],
  templateUrl: './candidates-info-section1.component.html',
  styleUrl: './candidates-info-section1.component.css'
})
export class CandidatesInfoSection1Component {
  @Input() user:any;
  @Input() urltitle:string="";
  @Input() urlid:string=""
  preview:boolean= false;

  constructor(private cdr: ChangeDetectorRef
    , private router:Router
  ) {}

  OpenPreview(): void {
    this.preview= !this.preview;
    // console.log(this.preview);
   
  }

  handleResume(){
    if(this.user.resume){
     window.open(this.user.resume , '_blank')
     
    }
  }

  handleViewPostedJob(){
     if(this.user.usertype=="recruiter"){
      const path = `/user/recruiter/posted/${this.user?._id}`
     this.router.navigate([path])
     }
     return null;
  }

}
