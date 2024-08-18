import { Component, Input } from '@angular/core';
import { Ci2Part1Component } from "../ci2-part1/ci2-part1.component";
import { Ci2Part2Component } from "../ci2-part2/ci2-part2.component";
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CandiateProfilePreviewSectionComponent } from "../candiate-profile-preview-section/candiate-profile-preview-section.component";

@Component({
  selector: 'app-candidates-info-section2',
  standalone: true,
  imports: [Ci2Part1Component, Ci2Part2Component, RouterLink, CandiateProfilePreviewSectionComponent],
  templateUrl: './candidates-info-section2.component.html',
  styleUrl: './candidates-info-section2.component.css'
})
export class CandidatesInfoSection2Component {
  @Input() user:any = "";
  @Input() urltitle: string = "";
  @Input() urlid: string = ""

  constructor(private router: Router) { }
  handleRoute(name: string) {
    // console.log(this.user);
    
   if(this.user){
    const path: string = `/user/applicant/${name}/${this.user._id}`
    this.router.navigate([path])
    this.urltitle= name
  }}

}
