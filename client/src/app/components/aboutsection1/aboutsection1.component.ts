import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-aboutsection1',
  standalone: true,
  imports: [],
  templateUrl: './aboutsection1.component.html',
  styleUrl: './aboutsection1.component.css'
})
export class Aboutsection1Component {
  @Input() desc = ''
}
