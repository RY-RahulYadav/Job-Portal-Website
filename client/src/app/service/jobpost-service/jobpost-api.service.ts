import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobpostApiService {
 private apiUrl= environment.apiUrl
  constructor(private http: HttpClient , private cokkieService:CookieService) { }

  createjob(uid: string, data: any) {
    const api = `${this.apiUrl}/api/jobpost/create`
    const token = uid
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })

    return this.http.post(api, data, { headers: header, observe: 'response' })
  }

  getjob(id: string) {
    const api = `${this.apiUrl}/api/jobpost/get/${id}`

    const header = new HttpHeaders({
      'Content-Type': 'application/json',

    })

    return this.http.get(api, { headers: header, observe: 'response' })
  }
  getalljob() {
    const api = `${this.apiUrl}/api/jobpost/getall`

    const header = new HttpHeaders({
      'Content-Type': 'application/json',

    })

    return this.http.get(api, { headers: header, observe: 'response' })
  }
  
  getfilter(params:any) {
    const api = `${this.apiUrl}/api/jobpost/filter`

    const header = new HttpHeaders({
      'Content-Type': 'application/json',
       
    })
    const httpParams = new HttpParams({ fromObject: params });

    return this.http.get(api,  {params:httpParams, headers: header, observe: 'response' })
  }

  postapply( data:any , token:string){
    
    const api = `${this.apiUrl}/api/jobpost/apply`

    const header = new HttpHeaders({
      'Content-Type': 'application/json',
       'Authorization': `Bearer ${token}`
    })

    return this.http.post(api, data, {headers: header, observe: 'response' })
  }

  postsave( data:any , token:string){
    
    const api = `${this.apiUrl}/api/jobpost/saved`

    const header = new HttpHeaders({
      'Content-Type': 'application/json',
       'Authorization': `Bearer ${token}`
    })

    return this.http.post(api, data, {headers: header, observe: 'response' })
  }
}
