import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApplicantApiService } from '../../service/applicant-service/applicant-api.service';
import { CookieService } from 'ngx-cookie-service';
import { UploadFileService } from '../../service/upload-file/upload-file.service';
import { UserStatusService } from '../../service/dataService/user-status.service';

@Component({
  selector: 'app-ci2-part1',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './ci2-part1.component.html',
  styleUrls: ['./ci2-part1.component.css']
})
export class Ci2Part1Component implements OnInit, OnDestroy {
  @Input() user?: any;
  loading: boolean = false
  educationCount: number = 1;
  experienceCount: number = 1;
  skillInput = new FormControl('');
  UserEditForm: FormGroup = this.fb.group({});
  resumeStatus = 0
  sendStatus = false;

  constructor(
    private fb: FormBuilder,
    private applicantApi: ApplicantApiService,
    private cookieService: CookieService,
    private uploadApi: UploadFileService,
    private cdr: ChangeDetectorRef,
    private userStatus:UserStatusService
  ) { }



  ngOnInit(): void {

    this.UserEditForm = this.fb.group({
      name: [this.user?.name],
      email: [this.user?.email],
      phone: [this.user?.phone],
      desc: [this.user?.desc],
      github: [this.user?.github],
      linkdin: [this.user?.linkdin],
      state: [this.user?.state],
      country: [this.user?.country],
      education: this.fb.array([]),
      experienceArray: this.fb.array([]),
      skills: this.fb.array([]),
      imglogo: [this.user?.imglogo],
      resume: [this.user?.resume],
    

    });

    this.resumeStatus = this.user.resume ? 2 : 0;


    if (this.user?.education?.length == 0) {
      this.addEducation()
    } else {
      this.user?.education.forEach((item: any) => {
        this.getEducation().push(this.fb.group(item))
      });
    }

    if (this.user?.experienceArray?.length == 0) {
      this.addExperience()
    } else {
      this.user?.experienceArray?.forEach((item: any) => {
        this.getExperience().push(this.fb.group(item))
      });
    }

    if (this.user?.skills?.length !== 0) {

      this.user?.skills.forEach((item: any) => {
        this.getskills().push(this.fb.control(item))
      });
    }
    this.loading = true
    this.cdr.detectChanges()
  }


  getExperience() {
    return this.UserEditForm.get('experienceArray') as FormArray
  }
  getEducation() {
    return this.UserEditForm.get('education') as FormArray
  }

  addExperience() {
    const experienceArray = this.getExperience();
    if (experienceArray) {
      experienceArray.push(this.fb.group({
        title: [""],
        jobcompany: [""], // Correct initialization
        start: [""],
        end: [""],
        loc: [""]
      }));
    }
    // console.log(this.UserEditForm.get('experienceArray')?.value);
  }


  addEducation() {
    const educationArray = this.getEducation();
    if (educationArray) {
      educationArray.push(this.fb.group({
        degree: [""],
        college: [""],
        start: [""],
        end: [""],
        loc: [""]
      }));
    }
  }


  removeExperience(index: number) {
    if (this.getExperience()) {
      this.getExperience().removeAt(index)
    }

  }

  removeEducation(index: number) {
    if (this.getEducation()) {
      this.getEducation().removeAt(index)
    }

  }

  getskills() {
    return this.UserEditForm.get('skills') as FormArray
  }

  addskills() {
    if ((this.getskills().value.length) <= 15) {

      this.getskills().push(this.fb.control(this.skillInput?.value))
      this.skillInput.reset()
      return;
    }
    alert('skill more than 15')

  }
  removeskills(index: number) {
    this.getskills().removeAt(index)
  }


  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const name = input.name;
    if (name == 'imglogo') {

      this.UserEditForm.patchValue({ imglogo: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif" })
    }
    else {
      this.resumeStatus = 1
    }

    const file = input.files?.[0];
    // console.log(file);

    this.uploadApi.uploadFile(file).subscribe({
      next: (res: any) => {
        const url = res.body.fileUrl
        this.UserEditForm.patchValue({ [name]: url })
        if (name == 'resume') { this.resumeStatus = 2 }
      },
      error: (err) => {
        this.resumeStatus = 0;
        alert('File Not Upload , Try again')
      }
    })


  }



  handlesubmit() {
    const data: any = this.UserEditForm.value
    const uid: string = this.cookieService.get('uid')
    if(this.user?.imglogo){this.uploadApi.deleteFile(this.user.imglogo)}
    if(this.user.resume){this.uploadApi.deleteFile(this.user.resume)}
    this.applicantApi.updateApplicant(uid, data).subscribe({
      next: (res: any) => {
        this.user = res.body.data
        
        // console.log(res.body.data);
        this.userStatus.updateUser(res.body.data)
        alert("saved changes")
        this.sendStatus = true

      },
      error: (error) => {
        console.log(error.error.message);

        alert(error.error.message)
      }
    })

  }

  openInput() {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    if (fileInput) {

      fileInput.click();
    }
  }


  // @HostListener('window:beforeunload', ['$event'])
  ngOnDestroy(): void {
    const deleteArr = ['imglogo', 'resume']
    deleteArr.forEach(element => {

      if (this.UserEditForm.get(element)?.value && this.sendStatus == false) {
        this.deletefile(element)

      }
    });
  }

  deletefile(name: string) {
    this.uploadApi.deleteFile(this.UserEditForm.get(name)?.value).subscribe({
      next: (res) => {
        console.log("deleted");
      },
      error: (err) => {
        console.log(err);
      }
    })


  }

}
