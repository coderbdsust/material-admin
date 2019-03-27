import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";
import { LayoutModule } from "./layout/layout.module";
import { LoginComponent } from "./layout/pages/login/login.component";
import { SignupComponent } from "./layout/pages/signup/signup.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "admin",
    pathMatch: "full"
  },
  { path: "pages/sign-in", component: LoginComponent },
  { path: "pages/sign-up", component: SignupComponent },
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () => LayoutModule
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
