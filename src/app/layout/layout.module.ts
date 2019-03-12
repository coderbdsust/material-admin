import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {MyMaterialModule} from "../my-material.module";
import {LayoutRoutes} from "./layout.routes";
import {SidebarComponent} from "../sidebar/sidebar.component";
import {ToolbarComponent} from "../toolbar/toolbar.component";
import {CardComponent} from "./feature/card-layout/card/card.component";
import {CardLayoutComponent} from "./feature/card-layout/card-layout.component";
import {TablePaginationComponent} from "./feature/table-layout/table-pagination/table-pagination.component";
import {PaginatedTableComponent} from "./feature/table-layout/paginated-table/paginated-table.component";
import {SortedTableComponent} from "./feature/table-layout/sorted-table/sorted-table.component";
import {FilteredTableComponent} from "./feature/table-layout/filtered-table/filtered-table.component";
import {SelectionTableComponent} from "./feature/table-layout/selection-table/selection-table.component";
import {StickyTableComponent} from "./feature/table-layout/sticky-table/sticky-table.component";
import {ButtonLayoutComponent} from "./feature/button-layout/button-layout.component";
import {FormLayoutComponent} from "./feature/form-layout/form-layout.component";

@NgModule({
  declarations: [
    CardComponent,
    CardLayoutComponent,
    SidebarComponent,
    ToolbarComponent,
    TablePaginationComponent,
    PaginatedTableComponent,
    SortedTableComponent,
    FilteredTableComponent,
    SelectionTableComponent,
    StickyTableComponent,
    ButtonLayoutComponent,
    FormLayoutComponent
  ],
  exports: [
    CardComponent,
    CardLayoutComponent,
    SidebarComponent,
    ToolbarComponent,
    TablePaginationComponent,
    PaginatedTableComponent,
    SortedTableComponent,
    FilteredTableComponent,
    SelectionTableComponent,
    StickyTableComponent,
    ButtonLayoutComponent,
    FormLayoutComponent
  ],
  imports: [RouterModule.forChild(LayoutRoutes)],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LayoutModule {
}
