import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecruiterApiService {
  private apiUrl=environment.apiUrl
  constructor(
    private http: HttpClient
  ) { }

  updateRecruiter(uid:string , data:any) {
    const api = `${this.apiUrl}/api/recruiter/update-recruiter`
    const token = uid
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })

    return this.http.patch(api, data , { headers: header, observe: 'response' })
  }
}
