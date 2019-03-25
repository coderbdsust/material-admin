import { Component, OnInit, NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MatSnackBar } from "@angular/material";
import { AlertService } from "src/app/service/alert.service";

@NgModule({
  imports: [NgbModule]
})
@Component({
  selector: "app-alert",
  templateUrl: "./alert.component.html",
  styleUrls: ["./alert.component.scss"]
})
export class AlertComponent implements OnInit {
  constructor(
    private snackBar: MatSnackBar,
    private alertService: AlertService
  ) {}

  openSnackBar(action: string, duration: number) {
    this.alertService.setDuration(duration);
    switch (action) {
      case "success":
        this.alertService.success("This is a success message");
        break;
      case "info":
        this.alertService.info("This is a info message");
        break;
      case "warning":
        this.alertService.warning("This is a warning message");
        break;
      case "danger":
        this.alertService.danger("This is a danger message");
        break;
      case "error":
        this.alertService.danger("This is a error message");
        break;
      case "primary":
        this.alertService.primary("This is a primary message");
        break;
      case "dark":
        this.alertService.dark("This is a dark message");
        break;
    }
  }

  ngOnInit() {}
}
