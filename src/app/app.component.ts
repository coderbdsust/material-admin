import { Component, ViewChild, OnInit } from "@angular/core";
// import { DomSanitizer } from "@angular/platform-browser";
// import { MatIconRegistry } from "@angular/material";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "next2Solve";
  // constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
  //   iconRegistry.addSvgIcon(
  //       'thumbs-up',
  //       sanitizer.bypassSecurityTrustResourceUrl('assets/*'));
  // }
  constructor() { }
}
