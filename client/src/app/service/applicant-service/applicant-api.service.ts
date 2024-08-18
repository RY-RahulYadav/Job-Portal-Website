import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApplicantApiService {
  private apiUrl = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) { }

  updateApplicant(uid:string , data:any) {
    const api = `${this.apiUrl}api/applicant/update-applicant`
    const token = uid
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })

    return this.http.patch(api, data , { headers: header, observe: 'response' })
  }
}
