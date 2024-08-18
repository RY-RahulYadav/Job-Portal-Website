import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RecruiterComponent } from "../recruiter/recruiter.component";
import { CandidatesInfoComponent } from "../candidates-info/candidates-info.component";
import { UserStatusService } from '../../service/dataService/user-status.service';
import { state } from '@angular/animations';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute, Router } from '@angular/router';
import { distinctUntilChanged } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RecruiterComponent, CandidatesInfoComponent , CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  userType: string = "";
loading:boolean=false;
  constructor(private userStatus: UserStatusService,
    private cokkieService: CookieService,
    private router: Router,
    private activedRoute:ActivatedRoute,
   
  ) {

  }

  ngOnInit() {
    window.scrollTo(0, 0)
    this.userStatus.authStatus$.pipe(distinctUntilChanged()).subscribe((state)=>{
      if(state){
        
          
          this.userType = this.activedRoute.snapshot.paramMap.get('type')!
          this.loading=true
    }
    
  })

  
  }
}
