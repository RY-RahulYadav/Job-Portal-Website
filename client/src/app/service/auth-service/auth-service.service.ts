import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
 
    private apiUrl = environment.apiUrl;

 
  constructor(
    private http: HttpClient
  ) { }

  loginPost(data: any) {
    const api = `${this.apiUrl}/api/auth/login`;

    const header = new HttpHeaders({
      'Content-Type': "application/json",

    })
    return this.http.post(api, data, { headers: header, observe: 'response'  })
  }


  signupPost(data: any) {
    const api = `${this.apiUrl}/api/auth/signup`
    const header = new HttpHeaders({
      'Content-Type': "application/json",

    })
    return this.http.post(api, data, { headers: header, observe: 'response' })
  }

  getdata(uid: String) {
    const api = `${this.apiUrl}/api/auth/getuser`
    const token = uid
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })

    return this.http.get(api, { headers: header, observe: 'response' })
  }


}
