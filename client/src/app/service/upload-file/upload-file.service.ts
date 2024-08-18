import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {
private apiUrl=environment.apiUrl
  constructor(
    private http: HttpClient,
    private cokkieService:CookieService

  ) { }

  uploadFile(file: any) {
    const formData = new FormData();
    formData.append('file', file);
    console.log(formData);
    
    const api = `${this.apiUrl}/api/uploadfile`
    const token = this.cokkieService.get('uid')
    const header = new HttpHeaders({
     
      'Authorization': `Bearer ${token}`
    })
    return this.http.post(api , formData , { headers: header, observe: 'response' } )
  }
  
  deleteFile(url: string) {
    const data = {url:url}
    const api = `${this.apiUrl}/api/deletefile`
    const token = this.cokkieService.get('uid')
    const header = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.http.post(api , data , { headers: header, observe: 'response' } )
  }
}
