import { Routes } from '@angular/router';
import { CardLayoutComponent } from "./feature/card-layout/card-layout.component";
import { SelectionTableComponent } from "./feature/table-layout/selection-table/selection-table.component";
import { FilteredTableComponent } from "./feature/table-layout/filtered-table/filtered-table.component";
import { PaginatedTableComponent } from "./feature/table-layout/paginated-table/paginated-table.component";
import { SortedTableComponent } from "./feature/table-layout/sorted-table/sorted-table.component";
import { StickyTableComponent } from "./feature/table-layout/sticky-table/sticky-table.component";
import { FormLayoutComponent } from "./feature/form-layout/form-layout.component";

export const LayoutRoutes: Routes = [
  { path: "", component: CardLayoutComponent },
  { path: "social", component: CardLayoutComponent },
  { path: "table/selection", component: SelectionTableComponent },
  { path: "table/filter", component: FilteredTableComponent },
  { path: "table/paginated", component: PaginatedTableComponent },
  { path: "table/sorted", component: SortedTableComponent },
  { path: "table/sticky", component: StickyTableComponent },
  { path: "form", component: FormLayoutComponent }
];
