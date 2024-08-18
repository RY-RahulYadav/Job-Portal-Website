import { AfterContentChecked, AfterContentInit, ChangeDetectorRef, Component, DoCheck, effect, OnChanges, OnInit } from '@angular/core';
import { AppliedUserModalComponent } from "../applied-user-modal/applied-user-modal.component";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CookieService } from 'ngx-cookie-service';
import { Router, RouterLink } from '@angular/router';
import { AuthServiceService } from '../../service/auth-service/auth-service.service';
import { UserStatusService } from '../../service/dataService/user-status.service';



@Component({
  selector: 'app-login-section',
  standalone: true,
  imports: [AppliedUserModalComponent, ReactiveFormsModule , FormsModule , RouterLink],
  templateUrl: './login-section.component.html',
  styleUrl: './login-section.component.css'
})

export class LoginSectionComponent {
  loginStatus?: boolean
  checked=new FormControl(false);
  email = new FormControl(null);
  password = new FormControl(null);
  

  loginForm = new FormGroup({
    email: this.email,
    password: this.password
  })


  constructor(
    private authService: AuthServiceService,
    private cookieService: CookieService,
    private router: Router,
    private userStatus: UserStatusService,
  ) { }




  handleLogin() {
    this.cookieService.deleteAll();
    const data = this.loginForm.value
    if(this.loginForm.invalid) {alert("Fill All Details"); return}
if(!this.checked){alert("plz checked box"); return}
    this.userStatus.authStatus$.subscribe((state)=>{
      if(!state){
      this.authService.loginPost(data).subscribe(({
        next: this.handleResponse,
        error: this.handleError
      }))
    }
    })
  }



  private handleResponse = async (response: any) => {
    
    this.authService.getdata(response.body.uid).subscribe({
      next:(res:any)=>{this.userStatus.updateUser(res.body.data)},
      error:(err)=>{alert("Having some issue plz login again")}
    })
    this.cookieService.set('uid', response.body.uid)
    this.userStatus.updateauthstatus(true)
    alert(response.body.message)
   this.router.navigate(['/'])
  }

  private handleError = (error: any) => {
    alert(error.error.message)
  }
}
