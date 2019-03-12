import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { LayoutComponent } from "./layout/layout.component";
import { SideNavService } from "./service/side-nav.service";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MyMaterialModule } from "./my-material.module";
import { CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    MyMaterialModule,
  ],
  providers: [SideNavService],
  bootstrap: [AppComponent]
})
export class AppModule {}
