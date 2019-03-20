import {BrowserModule} from "@angular/platform-browser";
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {LayoutComponent} from "./layout/layout.component";
import {SideNavService} from "./service/side-nav.service";
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {MyMaterialModule} from "./my-material.module";
import {CommonModule} from '@angular/common';
import {LayoutModule} from "./layout/layout.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from "./sidebar/sidebar.component";
import { ToolbarComponent } from "./toolbar/toolbar.component";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DynamicDatabase} from '../app/layout/feature/componants/tree/tree.component'

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SidebarComponent,
    ToolbarComponent  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    MyMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule
  ],
  providers: [SideNavService, DynamicDatabase],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
