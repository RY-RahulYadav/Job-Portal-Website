import { Component, OnInit } from '@angular/core';
import { cardData, techCities } from '../../model/job';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section1',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './section1.component.html',
  styleUrl: './section1.component.css'
})
export class Section1Component {

  categorydata = cardData
  techcities = techCities
  title = ''
  category = ''
  location = ''

  constructor(private fb: FormBuilder,
    private router: Router
  ) {}




  handleSearch(title: string, location: string, category: string) {
    // console.log(category, location, title);
    this.router.navigate(['/search-job'], { state: { category  , location , title} })

  }
}
