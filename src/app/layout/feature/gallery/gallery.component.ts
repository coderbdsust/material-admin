import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor() { }

  ngOnInit(): void {

    this.galleryOptions = [
      {
        width: '100%',
        height: '800px',
        thumbnailsColumns: 6,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: '../../../../assets/bird/birds-291a.jpg',
        medium: '../../../../assets/bird/birds-291a.jpg',
        big: '../../../../assets/bird/birds-291a.jpg'
      },
      {
        small: '../../../../assets/bird/birds-327a.jpg',
        medium: '../../../../assets/bird/birds-327a.jpg',
        big: '../../../../assets/bird/birds-327a.jpg'
      },
      {
        small: '../../../../assets/bird/birds-351a.jpg',
        medium: '../../../../assets/bird/birds-351a.jpg',
        big: '../../../../assets/bird/birds-351a.jpg'
      },
      {
        small: '../../../../assets/bird/birds-352a.jpg',
        medium: '../../../../assets/bird/birds-352a.jpg',
        big: '../../../../assets/bird/birds-352a.jpg'
      },
      {
        small: '../../../../assets/bird/birds-353a.jpg',
        medium: '../../../../assets/bird/birds-353a.jpg',
        big: '../../../../assets/bird/birds-353a.jpg'
      },
      {
        small: '../../../../assets/bird/birds-356a.jpg',
        medium: '../../../../assets/bird/birds-356a.jpg',
        big: '../../../../assets/bird/birds-356a.jpg'
      },
      {
        small: '../../../../assets/bird/birds-361a.jpg',
        medium: '../../../../assets/bird/birds-361a.jpg',
        big: '../../../../assets/bird/birds-361a.jpg'
      },
      {
        small: '../../../../assets/bird/birds-363a.jpg',
        medium: '../../../../assets/bird/birds-363a.jpg',
        big: '../../../../assets/bird/birds-363a.jpg'
      },      {
        small: '../../../../assets/bird/butterfly-49a.jpg',
        medium: '../../../../assets/bird/butterfly-49a.jpg',
        big: '../../../../assets/bird/butterfly-49a.jpg'
      }
    ];
  }

}
