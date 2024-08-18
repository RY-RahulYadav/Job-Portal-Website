import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';


import { CookieService } from 'ngx-cookie-service';
import { Router, RouterLink } from '@angular/router';
import { AuthServiceService } from '../../service/auth-service/auth-service.service';
import { UserStatusService } from '../../service/dataService/user-status.service';



@Component({
  selector: 'app-signup-section',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule , RouterLink],
  templateUrl: './signup-section.component.html',
  styleUrl: './signup-section.component.css'
})
export class SignupSectionComponent {
  fetchdata?: any;
  email = new FormControl(null)
  name = new FormControl(null)
  userType = new FormControl(null)
  password = new FormControl(null)
  username = new FormControl(null)
  checked=new FormControl(false);

  signupdata = new FormGroup({
    email: this.email,
    name: this.name,
    username: this.username,
    password: this.password,
    userType: this.userType
  })

  constructor(
    private authService:AuthServiceService,
    private cokkieService:CookieService,
    private userStatus:UserStatusService,
    private router:Router
  ) { }


  handleSignup(){
    this.cokkieService.deleteAll();
    if(!this.signupdata.valid){
      alert("fill all details")
      return
    }
    if(!this.checked ){
      alert("Plz checked term and conditions")
      return
    }
    const data = this.signupdata.value;
    this.authService.signupPost(data).subscribe({
      next:this.handleResponse,
      error:this.handleError
    })
  }

  private handleResponse = (response:any)=>{
    this.authService.getdata(response.body.uid).subscribe({
      next:(res:any)=>{this.userStatus.updateUser(res.body.data)},
      error:(err)=>{alert("Having some issue plz login again")}
    })
    this.cokkieService.set('uid' , response.body.uid)
    this.userStatus.updateauthstatus(true)
    alert(response.body.message)
    this.router.navigate(['/'])
  }

  private handleError(error:any){
   alert(error.error.message)
  }


}
