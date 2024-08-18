import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { Section1Component } from "./components/section1/section1.component";
import { FooterComponent } from "./components/footer/footer.component";
import { AuthServiceService } from './service/auth-service/auth-service.service';
import { UserStatusService } from './service/dataService/user-status.service';
import { CookieService } from 'ngx-cookie-service';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, Section1Component, FooterComponent , RouterModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
export class AppComponent {
  loading:boolean=false;
  constructor(
    private authApi: AuthServiceService,
    private userStatus: UserStatusService,
    private router: Router,
    private cokkieService: CookieService

  ) {}

  private handleResponse = (response: any) => {
    this.userStatus.updateUser(response.body.data);
    this.userStatus.updateauthstatus(true);
    this.loading=true
    // console.log(response.body.data);
  }

  private handleError = (error: any) => {
    // console.log(error);
    this.cokkieService.delete('uid')
 
  }

  ngOnInit() {
    const token = this.cokkieService.get('uid')
    if (!token) {
      this.userStatus.updateUser(null)
      this.userStatus.updateauthstatus(false)
    }
    // console.log(token);

    this.authApi.getdata(token).subscribe({
      next: this.handleResponse,
      error: this.handleError
    })
    this.loading=true
  }
}
