import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ApplicantApiService } from '../../service/applicant-service/applicant-api.service';
import { CookieService } from 'ngx-cookie-service';
import { RecruiterApiService } from '../../service/recruiter-service/recruiter-api.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UserStatusService } from '../../service/dataService/user-status.service';
import { UploadFileService } from '../../service/upload-file/upload-file.service';

@Component({
  selector: 'app-r-part1',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule],
  templateUrl: './r-part1.component.html',
  styleUrl: '../ci2-part1/ci2-part1.component.css'
})
export class RPart1Component {
  @Input() user: any;
  @Input() urlid:string=""
  @Input() urltitle:string=""
  sendStatus = false;

  recruiterForm: FormGroup = this.fb.group({});

  constructor(
    private fb: FormBuilder,
    private recruiterApi: RecruiterApiService,
    private cookieService: CookieService,
    private router:Router,
    private userState:UserStatusService,
    private uploadApi:UploadFileService
  ) { }

  ngOnInit(): void {

    this.recruiterForm = this.fb.group({
      name: [this.user.name||""],
      email: [this.user.email||""],
      phone: [this.user.phone||""],
      usertitle: [this.user.usertitle||""],
      companyname: [this.user.companyname||""],
      companyAddress: [this.user.companyAddress||""],
      companyWebsite: [this.user.companyWebsite||""],
      state: [this.user.state||""],
      country: [this.user.country||""],
      imglogo:[this.user.imglogo||""]
    });

  }



  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    // console.log(input);
    
    const name = input.name;
    if (name == 'imglogo') {

      this.recruiterForm.patchValue({ imglogo: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif" })
    }
    

    const file = input.files?.[0];
    // console.log(file);

    this.uploadApi.uploadFile(file).subscribe({
      next: (res: any) => {
        const url = res.body.fileUrl
        this.recruiterForm.patchValue({ [name]: url })
      
      },
      error: (err) => {
        alert('File Not Upload , Try again')
      }
    })


  }
  handlesubmit() {
    // console.log(this.recruiterForm.value);
    const data:any = this.recruiterForm.value
    const uid:string = this.cookieService.get('uid')
    if(this.user?.imglogo){this.uploadApi.deleteFile(this.user.imglogo)}
    this.recruiterApi.updateRecruiter(uid , data).subscribe({
      next:(res:any)=>{
       this.user=res.body.data
       this.userState.updateUser(res.body.data)
       alert("changes saved")
      //  this.router.navigate([`/user/${this.urltitle}/${this.urlid}`])
       this.sendStatus = true;

      },
      error:(error)=>{
        console.log(error.error.message);
        
        alert(error)}
    })
  }

}
