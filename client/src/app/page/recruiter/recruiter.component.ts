import { Component, Input } from '@angular/core';
import { CandidatesInfoSection1Component } from "../../components/candidates-info-section1/candidates-info-section1.component";
import { RecruiterSectionComponent } from "../../components/recruiter-section/recruiter-section.component";
import { Section5Component } from "../../components/section5/section5.component";
import { ActivatedRoute, Router } from '@angular/router';
import { UserStatusService } from '../../service/dataService/user-status.service';
import { state } from '@angular/animations';
import { CookieOptions, CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-recruiter',
  standalone: true,
  imports: [CandidatesInfoSection1Component, RecruiterSectionComponent, Section5Component],
  templateUrl: './recruiter.component.html',
  styleUrl: './recruiter.component.css'
})
export class RecruiterComponent {
  urlname: string = "";
  urlid: string = ""
  userdata: any;
  loginStatus = false
  loading: boolean = false;

  constructor(
    private activeRouter: ActivatedRoute,
    private router: Router,
    private userStatus: UserStatusService,
    private cokkieService: CookieService
  ) { }

  ngOnInit() {
    window.scrollTo(0, 0)
    this.activeRouter.params.subscribe(params => {
      this.urlid = params['Id'];
      this.urlname= params['name']
      // console.log(this.urlid ,this.urlname)
      
    });
    this.userStatus.authStatus$.subscribe(this.handleuser)


  }

  handleuser = (state: boolean) => {
    if (state) {
      this.loginStatus = true
      this.userStatus.userData$.subscribe(data => {
        if (data.usertype === 'applicant') {
          alert('you are not valid user type for access this page ')
          this.router.navigate(['/'])

        }
        else if (data.usertype = 'recruiter') {
          this.userdata = data
        }
        else {
          alert('you cant access thisj page')
          this.router.navigate(['/'])
        }
        this.loading = true
      })
    }
  }
}
