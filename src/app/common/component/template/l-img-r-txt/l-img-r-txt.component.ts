import { Component, Input } from '@angular/core';
import { imgTxtData } from '../../../interface/template/textImageModel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-l-img-r-txt',
  imports: [CommonModule],
  templateUrl: './l-img-r-txt.component.html',
  styleUrl: './l-img-r-txt.component.scss',
  standalone:true
})
export class LImgRTxtComponent {

  @Input() data: imgTxtData = {
    imageUrl: '',
    imageAlt: '',
    title: '',
    description: '',
  };
}
