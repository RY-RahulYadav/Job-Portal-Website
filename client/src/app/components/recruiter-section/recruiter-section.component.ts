import { Component, Input } from '@angular/core';
import { CandidatesInfoSection1Component } from "../candidates-info-section1/candidates-info-section1.component";
import { CandiateProfilePreviewSectionComponent } from "../candiate-profile-preview-section/candiate-profile-preview-section.component";
import { Ci2Part1Component } from "../ci2-part1/ci2-part1.component";
import { Ci2Part2Component } from "../ci2-part2/ci2-part2.component";
import { RPart1Component } from "../r-part1/r-part1.component";
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-recruiter-section',
  standalone: true,
  imports: [CandidatesInfoSection1Component, CandiateProfilePreviewSectionComponent, Ci2Part1Component, Ci2Part2Component, RPart1Component , RouterLink],
  templateUrl: './recruiter-section.component.html',
  styleUrl: './recruiter-section.component.css'
})
export class RecruiterSectionComponent {
  @Input() urltitle=""
  @Input() urlid=""
  @Input()  user:any=""

  constructor(private router: Router) { }

  
}
