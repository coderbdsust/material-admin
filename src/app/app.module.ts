import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatSidenavModule } from "@angular/material/sidenav";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { ToolbarComponent } from "./toolbar/toolbar.component";
import {SideNavService} from './service/side-nav.service';

@NgModule({
  declarations: [AppComponent, SidebarComponent, ToolbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MaterialModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule
  ],
  providers: [SideNavService],
  bootstrap: [AppComponent]
})
export class AppModule {}
