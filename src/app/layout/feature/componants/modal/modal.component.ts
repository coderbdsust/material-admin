import { Component, OnInit, Inject } from "@angular/core";
import { MatBottomSheet, MatBottomSheetRef } from "@angular/material/bottom-sheet";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

export interface DialogData {
  animal: string;
  name: string;
}

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
  selector: "app-dialog-modal",
  templateUrl: "dialog-modal.html"
})
export class DialogModal {
  constructor(
    public dialogRef: MatDialogRef<DialogModal>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"]
})
export class ModalComponent implements OnInit {
  animal: string;
  name: string;

  constructor(public dialog: MatDialog, private bottomSheet: MatBottomSheet) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogModal, {
      width: "250px",
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.animal = result;
    });
  }

  openBottomSheet(): void {
    this.bottomSheet.open(BottomSheet);
  }

  ngOnInit() {}
}
