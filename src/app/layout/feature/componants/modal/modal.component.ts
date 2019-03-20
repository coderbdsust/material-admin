import { Component, OnInit } from "@angular/core";
import { MatBottomSheet, MatBottomSheetRef } from "@angular/material";

@Component({
  selector: "app-bottom-sheet",
  templateUrl: "bottom-sheet.html"
})
export class BottomSheet {
  constructor(private bottomSheetRef: MatBottomSheetRef<BottomSheet>) {}
  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"]
})
export class ModalComponent implements OnInit {
  constructor(private bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this.bottomSheet.open(BottomSheet);
  }

  ngOnInit() {}
}
