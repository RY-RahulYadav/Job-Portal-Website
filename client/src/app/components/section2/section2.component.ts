import { Component } from '@angular/core';
import { CandidatesInfoSection2Component } from "../candidates-info-section2/candidates-info-section2.component";
import { CardComponent } from "../card/card.component";
import {cardData} from '../../model/job';
import { Router } from '@angular/router';
import { state } from '@angular/animations';

@Component({
  selector: 'app-section2',
  standalone: true,
  imports: [CandidatesInfoSection2Component, CardComponent],
  templateUrl: './section2.component.html',
  styleUrl: './section2.component.css'
})
export class Section2Component {
  cardData = cardData


  constructor(private router:Router){

  }
  handleitem(category:string){
    // console.log(category);
    
   this.router.navigate(['/search-job'] , { state: { category}})
  }
}
