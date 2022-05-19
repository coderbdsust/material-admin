import { BrowserModule } from "@angular/platform-browser";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { LayoutComponent } from "./layout/layout.component";
import { SideNavService } from "./service/side-nav.service";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MyMaterialModule } from "./my-material.module";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DynamicDatabase } from "../app/layout/feature/componants/tree/tree.component";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { AlertService } from "./service/alert.service";
import { LoginComponent } from "./layout/pages/login/login.component";
import { SignupComponent } from "./layout/pages/signup/signup.component";
import { ForgotPasswordComponent } from "./layout/pages/forgot-password/forgot-password.component";
import { NotFoundComponent } from "./layout/pages/not-found/not-found.component";
import { ExceptionComponent } from "./layout/pages/exception/exception.component";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { HttpClientModule } from '@angular/common/http';
import { BillingComponent } from './layout/pages/billing/billing.component';
import { FlexLayoutModule } from "@angular/flex-layout";

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SidebarComponent,
    ToolbarComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    NotFoundComponent,
    ExceptionComponent,
    BillingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    MyMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatDatepickerModule,
    MatSnackBarModule,
    PerfectScrollbarModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  providers: [
    HttpClientModule,
    SideNavService,
    DynamicDatabase,
    MatDatepickerModule,
    AlertService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
