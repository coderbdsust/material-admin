import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";
import { LoginComponent } from "./layout/pages/login/login.component";
import { SignupComponent } from "./layout/pages/signup/signup.component";
import { ExceptionComponent } from "./layout/pages/exception/exception.component";
import { NotFoundComponent } from "./layout/pages//not-found/not-found.component";
import { ForgotPasswordComponent } from "./layout/pages/forgot-password/forgot-password.component";
import { BillingComponent } from './layout/pages/billing/billing.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "admin",
    pathMatch: "full"
  },
  { path: "pages/sign-in", component: LoginComponent },
  { path: "pages/sign-up", component: SignupComponent },
  { path: "pages/404", component: NotFoundComponent },
  { path: "pages/500", component: ExceptionComponent },
  { path: "pages/forgot-password", component: ForgotPasswordComponent },
  { path: "pages/billing", component: BillingComponent },
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        loadChildren: './layout/layout.module#LayoutModule'
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
