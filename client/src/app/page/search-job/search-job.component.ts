import { Component } from '@angular/core';
import { SearchJobSection1Component } from "../../components/search-job-section1/search-job-section1.component";

import { Aboutsection1Component } from "../../components/aboutsection1/aboutsection1.component";
import { Section5Component } from "../../components/section5/section5.component";
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-search-job',
  standalone: true,
  imports: [SearchJobSection1Component, Aboutsection1Component, Section5Component],
  templateUrl: './search-job.component.html',
  styleUrl: './search-job.component.css'
})
export class SearchJobComponent {
  loading: boolean = false
  queryData: any = { category: "", location: "", title: "" };

  constructor(private router:Router) 
  {
    const navigation = this.router.getCurrentNavigation();

    const state: any = navigation?.extras.state;

    if (state) {
      this.queryData.category = state?.category || ""
      this.queryData.location = state?.location || ""
      this.queryData.title = state?.title || ""

    }
  }

  ngOnInit() {
    window.scrollTo(0, 0)
    this.loading = true
    // console.log(this.queryData);
    
  }
}
