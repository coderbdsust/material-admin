import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root"
})
export class AlertService {
  
  private duration: any = 2000;

  constructor(private snackBar: MatSnackBar) {}

  public setDuration(duration:Number){
    this.duration=duration;
  }

  info(message: string) {
    this.open(message, "Info", "alert-color-info");
  }

  error(message) {
    this.open(message, "Error", "alert-color-danger");
  }

  danger(message) {
    this.open(message, "Danger", "alert-color-danger");
  }

  success(message: string) {
    this.open(message, "Success", "alert-color-success");
  }

  primary(message) {
    this.open(message, "Primary", "alert-color-primary");
  }

  warning(message: string) {
    this.open(message, "Warning", "alert-color-warning");
  }

  dark(message) {
    this.open(message, "Dark", "alert-color-dark");
  }

  private open(message: string, action: string, className: string) {
    this.snackBar.open(message, '', {
      duration: this.duration,
      panelClass: [className, 'alert-text']
    });
  }
}
