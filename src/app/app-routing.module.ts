import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CardLayoutComponent } from "./layout/feature/card-layout/card-layout.component";
import { FormLayoutComponent } from "./layout/feature/form-layout/form-layout.component";
import { ROUTE_NAME } from "./routes/Routes";

const routes: Routes = [
  { path: ROUTE_NAME.SOCIAL, component: CardLayoutComponent },
  { path: ROUTE_NAME.TABLE, component: FormLayoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
