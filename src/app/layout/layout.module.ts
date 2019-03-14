import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LayoutRoutes } from "./layout.routes";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { ToolbarComponent } from "../toolbar/toolbar.component";
import { CardComponent } from "./feature/card-layout/card/card.component";
import { CardLayoutComponent } from "./feature/card-layout/card-layout.component";
import { TablePaginationComponent } from "./feature/table-layout/table-pagination/table-pagination.component";
import { PaginatedTableComponent } from "./feature/table-layout/paginated-table/paginated-table.component";
import { SortedTableComponent } from "./feature/table-layout/sorted-table/sorted-table.component";
import { FilteredTableComponent } from "./feature/table-layout/filtered-table/filtered-table.component";
import { SelectionTableComponent } from "./feature/table-layout/selection-table/selection-table.component";
import { StickyTableComponent } from "./feature/table-layout/sticky-table/sticky-table.component";
import { ButtonLayoutComponent } from "./feature/button-layout/button-layout.component";
import { FormLayoutComponent } from "./feature/form-layout/form-layout.component";

import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatCardModule } from "@angular/material/card";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatSliderModule } from "@angular/material/slider";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatTreeModule } from "@angular/material/tree";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { DataTableComponent } from './feature/table-layout/data-table/data-table.component';

@NgModule({
  declarations: [
    CardComponent,
    CardLayoutComponent,
    TablePaginationComponent,
    PaginatedTableComponent,
    SortedTableComponent,
    FilteredTableComponent,
    SelectionTableComponent,
    StickyTableComponent,
    ButtonLayoutComponent,
    FormLayoutComponent,
    DataTableComponent
  ],
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatCardModule,
    MatProgressBarModule,
    MatInputModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatTreeModule,
    MatTableModule,
    MatPaginatorModule,
    RouterModule,
    RouterModule.forChild(LayoutRoutes)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LayoutModule {}
