import {BrowserModule} from "@angular/platform-browser";
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {LayoutComponent} from "./layout/layout.component";
import {SideNavService} from "./service/side-nav.service";
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {MyMaterialModule} from "./my-material.module";
import {CommonModule} from '@angular/common';
import {LayoutModule} from "./layout/layout.module";

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
    LayoutModule

  ],
  providers: [SideNavService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
