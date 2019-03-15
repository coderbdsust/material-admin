import { Component, OnInit } from "@angular/core";
import {ImageCroppedEvent} from 'ngx-image-cropper';

@Component({
  selector: "app-image-cropper",
  templateUrl: "./image-cropper.component.html",
  styleUrls: ["./image-cropper.component.scss"]
})
export class ImageCropperComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  imageChangedEvent: any = "";
  croppedImage: any = "";

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }
  imageLoaded() {
    // show cropper
  }
  loadImageFailed() {
    // show message
  }
}
