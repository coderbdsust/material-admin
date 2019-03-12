import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LayoutRoutes } from "./layout.routes";

@NgModule({
  imports: [RouterModule.forChild(LayoutRoutes)]
})
export class LayoutModule {}
