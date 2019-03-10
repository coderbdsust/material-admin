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
import { SideNavService } from "./service/side-nav.service";
import { MatListModule, MatList } from "@angular/material/list";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { LayoutComponent } from "./layout/layout.component";
import { MatCardModule, MatCard } from "@angular/material/card";
import { CardComponent } from './layout/feature/card/card.component';
import { CardLayoutComponent } from './layout/feature/card-layout/card-layout.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ToolbarComponent,
    LayoutComponent,
    CardComponent,
    CardLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MaterialModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatCardModule,
    MatProgressBarModule
  ],
  providers: [SideNavService],
  bootstrap: [AppComponent]
})
export class AppModule {}
