import { CommonModule, TitleCasePipe } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { JobpostApiService } from '../../service/jobpost-service/jobpost-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { cardData, techCities } from '../../model/job';

@Component({
  selector: 'app-search-job-section1',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, TitleCasePipe],
  templateUrl: './search-job-section1.component.html',
  styleUrl: './search-job-section1.component.css'
})
export class SearchJobSection1Component {
  @Input() queryData:any
  loading:boolean=false;
  categorydata = cardData
  techcities = techCities
  openfilter?: boolean;
  alljobs: any[] = [];
  countJobs = 0;
  selectworkArr = ['remote', 'full time', 'hybrid']
  selectexpArr = ['expert', 'intermidate', 'fresher']
  visiblejobs: any[] = []
  currentPage = 1;
  
  pageNo=0;





  filterForm: FormGroup = this.fb.group({})
  constructor(
    private cokkieService: CookieService,
    private jobpostApi: JobpostApiService,
    private router: Router,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute

  ) {


  }




  visiblepages() {
    const start = (this.currentPage - 1) * 15
    const end = start + 15

    this.visiblejobs = this.alljobs?.slice(start, end)
    // console.log(this.visiblejobs, 765, this.alljobs);

  }


  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.visiblepages()


    }
  }

  nextPage() {
    if (this.currentPage < this.pageNo) {
      this.currentPage++;
      this.visiblepages()

    }
  }

  ngOnInit(): void {
    this.onResize();

// console.log(this.queryData);

    this.filterForm = this.fb.group({
      jobtitle: [this.queryData.title],
      joblocation: [this.queryData.location],
      jobcategory: [this.queryData.category],
      experience: this.fb.array([[false], [false], [false]]),
      workmethod: this.fb.array([[false], [false], [false]])
    })
    // console.log(this.filterForm.value)
    this.handleSearch()
    this.loading=true


  }


  handleSearch() {
    this.countJobs = 0
    const params = this.filterForm.value
    console.log(params)
    params.experience = this.selectexpArr.filter((_, index) => params.experience[index]);
    params.workmethod = this.selectworkArr.filter((_, index) => params.workmethod[index]);
    this.jobpostApi.getfilter(params).subscribe({
      next: (res: any) => {

        this.alljobs = res.body.data

        this.countJobs = res?.body.data.length
        // console.log(this.alljobs);
        this.pageNo= Math.ceil(this.countJobs/15)
        // console.log(this.pageNo);
        this.currentPage =1;
        this.visiblepages();
        
      },
      error: (error) => {
        console.log(error);
      }
    })

  }


  handlebutton(id: string) {
    const path = `/job-detail/${id}`
    this.router.navigate([path])
  }





  @HostListener('window:resize', ['$event'])
  onResize() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 991) {
      this.openfilter = true;
    } else {
      this.openfilter = false;
    }
  }

  handlefilter() {
    this.openfilter = !this.openfilter;
  }
 
}
