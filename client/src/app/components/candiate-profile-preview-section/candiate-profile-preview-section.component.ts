import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-candiate-profile-preview-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './candiate-profile-preview-section.component.html',
  styleUrl: './candiate-profile-preview-section.component.css'
})
export class CandiateProfilePreviewSectionComponent {
@Input() previewClose!:()=>void ; 
@Input() user:any=''
@Input() urlname:string="";
@Input() urlid:string=""


 
handleclick(){
  this.previewClose()
}

}
