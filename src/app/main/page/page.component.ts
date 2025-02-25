import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { imgTxtData } from '../../common/interface/template/textImageModel';
import { LImgRTxtComponent } from '../../common/component/template/l-img-r-txt/l-img-r-txt.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss',
  imports: [LImgRTxtComponent,CommonModule],
  standalone: true,
})
export class PageComponent implements OnInit {
  title = '';
  limgRtxtData: imgTxtData[] = [
    {
      imageUrl: 'image01.png',
      imageAlt: '圖 1',
      title: '標題1標題1',
      description: '文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字',
    },
    {
      imageUrl: 'image02.png',
      imageAlt: '圖 2',
      title: '標題2標題2',
      description: '文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字',
    },
    {
      imageUrl: 'image03.png',
      imageAlt: '圖 3',
      title: '標題3標題3',
      description: '文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字',
    },
  ];
  constructor(private activateRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activateRoute.url.subscribe(urlSegments => {
      const url = urlSegments.map(segment => segment.path).join('/');
      this.title = url;
    });
  }
}
