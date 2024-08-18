import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section0',
  standalone: true,
  imports: [CardComponent , CommonModule],
  templateUrl: './section0.component.html',
  styleUrl: './section0.component.css'
})
export class Section0Component {

}
