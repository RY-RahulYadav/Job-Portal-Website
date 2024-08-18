import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { routes } from '../../app.routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ci2-part2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ci2-part2.component.html',
  styleUrl: './ci2-part2.component.css'
})
export class Ci2Part2Component implements OnInit {
  @Input() user: any = ''
  @Input() text?: string = "";
  visiblejobs: any[] = []
  currentPage:number = 1;
  alljobs: any[] = [];
  countJobs:number = 0;
  pageNo:number = 0

  constructor(
    private router: Router
  ) { }

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

  ngOnInit() {

    if (this.user.usertype == 'applicant' && this.text === 'applied') {

      this.alljobs = this.user?.appliedjob
    }
    else if (this.user.usertype == 'applicant' && this.text === 'saved') {
      this.alljobs = this.user?.savedjob
    }
    else {
      this.alljobs = this.user.postedJobs
    }
    this.countJobs = this.alljobs?.length
    this.pageNo= Math.ceil(this.countJobs/15)
    this.visiblepages()
    // console.log(this.alljobs, this.user);


  }

  handlebutton(id: string) {
    const path = `/job-detail/${id}`
    this.router.navigate([path])
  }
}
