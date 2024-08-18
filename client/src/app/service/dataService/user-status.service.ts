import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserStatusService {

  private authStatusSubject = new BehaviorSubject<boolean>(false);
  private userDataSubject = new BehaviorSubject<any>(null);
  private appliedApplicantSubject  = new BehaviorSubject<any>(null);

  
  authStatus$ = this.authStatusSubject.asObservable();
  userData$ = this.userDataSubject.asObservable();
  appliedApplicant$ = this.appliedApplicantSubject.asObservable();

 
  getauthStatus() {
    return this.authStatusSubject.getValue;
  }
  getuser() {
    return this.userDataSubject.getValue;
  }
 
  
  updateauthstatus(data: boolean) {
    this.authStatusSubject.next(data);
  }
  

  updateUser(data: any) {
    this.userDataSubject.next(data);
  }
  updateappliedApplicant(data: any) {
    this.appliedApplicantSubject.next(data);
  }
  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
}
