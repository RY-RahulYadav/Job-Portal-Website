import { Component, OnInit } from '@angular/core';
import { CandidatesInfoSection1Component } from "../../components/candidates-info-section1/candidates-info-section1.component";
import { CandidatesInfoSection2Component } from "../../components/candidates-info-section2/candidates-info-section2.component";
import { Section5Component } from "../../components/section5/section5.component";
import { ActivatedRoute, Router } from '@angular/router';
import { UserStatusService } from '../../service/dataService/user-status.service';
import { CommonModule } from '@angular/common';
import { CookieOptions, CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-candidates-info',
  standalone: true,
  imports: [CandidatesInfoSection1Component, CandidatesInfoSection2Component, Section5Component, CommonModule],
  templateUrl: './candidates-info.component.html',
  styleUrl: './candidates-info.component.css'
})
export class CandidatesInfoComponent implements OnInit {
  urlname: string = "";
  urlid: string = ""
  userdata: any;
  loginStatus = this.cokkieService.get('state');
  loading: boolean = false;

  constructor(
    private activeRouter: ActivatedRoute,
    private router: Router,
    private userStatus: UserStatusService,
    private cokkieService: CookieService
  ) { }

  ngOnInit() {
   
    window.scrollTo(0,0)
    this.activeRouter.params.subscribe(params => {
      this.urlid = params['Id'];
      this.urlname= params['name'],
      console.log(this.urlid ,this.urlname);
    });
    
    this.userStatus.authStatus$.subscribe(this.handleuser)
  }

  handleuser = (state: boolean) => {
    if (state) {
      this.userStatus.userData$.subscribe(data => {
        if (data.usertype == 'applicant') {
          this.userdata = data

        }
        // else if (data.usertype = 'recruiter' && this.urlname == 'profile') {
          
        //   this.userStatus.appliedApplicant$.subscribe((applyuser)=>{
            
        //     const user = applyuser.find((job: any) => job._id === this.urlid);
        //     console.log(user);
            
        //     if (!user) {
        //       alert('you cant access this page')
        //       this.router.navigate(['/'])
        //     }
        //     this.userdata=user
        //   })
        // }
        else {
          alert('you cant access this page')
          this.router.navigate(['/'])

        }
        this.loading = true
      })
    }
  }


}
