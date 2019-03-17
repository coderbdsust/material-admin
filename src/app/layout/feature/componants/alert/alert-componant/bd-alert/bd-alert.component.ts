import { Component, OnInit, Input, ElementRef, ViewChild } from "@angular/core";

@Component({
  selector: "app-bd-alert",
  templateUrl: "./bd-alert.component.html",
  styleUrls: ["./bd-alert.component.scss"]
})
export class BdAlertComponent implements OnInit {
  @Input() public alert: string = "Success";
  @Input() public message: string = "This is a success alert";
  @Input() public show: boolean = true;
  @Input() public cancelBtn: boolean = false;

  constructor() {}

  ngOnInit() {
  }

  onCancel(): void {
    this.show = false;
  }

}
