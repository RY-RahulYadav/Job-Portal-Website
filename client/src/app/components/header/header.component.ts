import { CommonModule } from '@angular/common';
import { AfterContentChecked, ChangeDetectorRef, Component, effect, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { CookieService } from 'ngx-cookie-service';
import { UserStatusService } from '../../service/dataService/user-status.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  menuActive = false;
  loginStatus = false
  userData: any = this.userStatus.getuser();
  urlname='';
  urlid=''

  constructor(
    public userStatus: UserStatusService,
    private cokkieService: CookieService,
    private router: Router,
    private cdr:ChangeDetectorRef,
    private activatedRoute:ActivatedRoute
   
  ) { }

  ngOnInit() {


    this.userStatus.authStatus$.subscribe(state => {
      this.loginStatus =state
      this.userStatus.userData$.subscribe((data:any) => {
        this.userData = data
        
        this.urlid = data?._id
        // console.log(data, state);
        this.cdr.detectChanges()
      })

    })

  }


  opensideNav() {
    
    this.menuActive = true;
    // console.log(this.menuActive);
  }
  closesideNav(){
    this.menuActive=false;
    // console.log(this.menuActive);
  }


  handleLogout() {
    const token = this.cokkieService.get('uid')
    if (token) {
      this.cokkieService.deleteAll()
      this.userStatus.updateauthstatus(false)
      this.userStatus.updateUser(null)
      alert('succesfully logout')
      this.router.navigate(['/'])
      
    }
  }
}
