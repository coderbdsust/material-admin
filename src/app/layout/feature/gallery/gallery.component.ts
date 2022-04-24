import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation, NgxGalleryImageSize } from 'ngx-gallery';

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
        height: '450px',
        thumbnailsColumns: 6,
        imagePercent: 100,
        imageAnimation: NgxGalleryAnimation.Rotate
      },
      {
        breakpoint: 800,
        width: '100%',
        height: '750px',
        imagePercent: 100,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: 'https://cdn.glitch.global/ffed6655-f0c8-43de-b7fc-94a19528fcaf/birds-291a.jpg?v=1648999635005',
        medium: 'https://cdn.glitch.global/ffed6655-f0c8-43de-b7fc-94a19528fcaf/birds-291a.jpg?v=1648999635005',
        big: 'https://cdn.glitch.global/ffed6655-f0c8-43de-b7fc-94a19528fcaf/birds-291a.jpg?v=1648999635005'
      },
      {
        small: 'https://cdn.glitch.global/ffed6655-f0c8-43de-b7fc-94a19528fcaf/birds-327a.jpg?v=1648999634449',
        medium: 'https://cdn.glitch.global/ffed6655-f0c8-43de-b7fc-94a19528fcaf/birds-327a.jpg?v=1648999634449',
        big: 'https://cdn.glitch.global/ffed6655-f0c8-43de-b7fc-94a19528fcaf/birds-327a.jpg?v=1648999634449'
      },
      {
        small: 'https://cdn.glitch.global/ffed6655-f0c8-43de-b7fc-94a19528fcaf/birds-351a.jpg?v=1648999634526',
        medium: 'https://cdn.glitch.global/ffed6655-f0c8-43de-b7fc-94a19528fcaf/birds-351a.jpg?v=1648999634526',
        big: 'https://cdn.glitch.global/ffed6655-f0c8-43de-b7fc-94a19528fcaf/birds-351a.jpg?v=1648999634526'
      },
      {
        small: 'https://cdn.glitch.global/ffed6655-f0c8-43de-b7fc-94a19528fcaf/birds-352a.jpg?v=1648999632541',
        medium: 'https://cdn.glitch.global/ffed6655-f0c8-43de-b7fc-94a19528fcaf/birds-352a.jpg?v=1648999632541',
        big: 'https://cdn.glitch.global/ffed6655-f0c8-43de-b7fc-94a19528fcaf/birds-352a.jpg?v=1648999632541'
      },
      {
        small: 'https://cdn.glitch.global/ffed6655-f0c8-43de-b7fc-94a19528fcaf/birds-353a.jpg?v=1648999634154',
        medium: 'https://cdn.glitch.global/ffed6655-f0c8-43de-b7fc-94a19528fcaf/birds-353a.jpg?v=1648999634154',
        big: 'https://cdn.glitch.global/ffed6655-f0c8-43de-b7fc-94a19528fcaf/birds-353a.jpg?v=1648999634154'
      },
      {
        small: 'https://cdn.glitch.global/ffed6655-f0c8-43de-b7fc-94a19528fcaf/birds-356a.jpg?v=1648999633538',
        medium: 'https://cdn.glitch.global/ffed6655-f0c8-43de-b7fc-94a19528fcaf/birds-356a.jpg?v=1648999633538',
        big: 'https://cdn.glitch.global/ffed6655-f0c8-43de-b7fc-94a19528fcaf/birds-356a.jpg?v=1648999633538'
      },
      {
        small: 'https://cdn.glitch.global/ffed6655-f0c8-43de-b7fc-94a19528fcaf/birds-361a.jpg?v=1648999634539',
        medium: 'https://cdn.glitch.global/ffed6655-f0c8-43de-b7fc-94a19528fcaf/birds-361a.jpg?v=1648999634539',
        big: 'https://cdn.glitch.global/ffed6655-f0c8-43de-b7fc-94a19528fcaf/birds-361a.jpg?v=1648999634539'
      },
      {
        small: 'https://cdn.glitch.global/ffed6655-f0c8-43de-b7fc-94a19528fcaf/birds-363a.jpg?v=1648999633844',
        medium: 'https://cdn.glitch.global/ffed6655-f0c8-43de-b7fc-94a19528fcaf/birds-363a.jpg?v=1648999633844',
        big: 'https://cdn.glitch.global/ffed6655-f0c8-43de-b7fc-94a19528fcaf/birds-363a.jpg?v=1648999633844'
      },      {
        small: 'https://cdn.glitch.global/ffed6655-f0c8-43de-b7fc-94a19528fcaf/butterfly-49a.jpg?v=1648999634554',
        medium: 'https://cdn.glitch.global/ffed6655-f0c8-43de-b7fc-94a19528fcaf/butterfly-49a.jpg?v=1648999634554',
        big: 'https://cdn.glitch.global/ffed6655-f0c8-43de-b7fc-94a19528fcaf/butterfly-49a.jpg?v=1648999634554'
      }
    ];
  }

}
