import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatSidenavModule } from "@angular/material/sidenav";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { SideNavService } from "./service/side-nav.service";
import { MatListModule, MatList } from "@angular/material/list";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { LayoutComponent } from "./layout/layout.component";
import { MatCardModule, MatCard } from "@angular/material/card";
import { CardComponent } from "./layout/feature/card-layout/card/card.component";
import { CardLayoutComponent } from "./layout/feature/card-layout/card-layout.component";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatSliderModule } from "@angular/material/slider";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { FormLayoutComponent } from "./layout/feature/form-layout/form-layout.component";
import { MatTreeModule } from "@angular/material/tree";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { TablePaginationComponent } from "./layout/feature/table-layout/table-pagination/table-pagination.component";
import { PaginatedTableComponent } from "./layout/feature/table-layout/paginated-table/paginated-table.component";
import { SortedTableComponent } from "./layout/feature/table-layout/sorted-table/sorted-table.component";
import { FilteredTableComponent } from "./layout/feature/table-layout/filtered-table/filtered-table.component";
import { SelectionTableComponent } from "./layout/feature/table-layout/selection-table/selection-table.component";
import { StickyTableComponent } from "./layout/feature/table-layout/sticky-table/sticky-table.component";
import { ButtonLayoutComponent } from "./layout/feature/button-layout/button-layout.component";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ToolbarComponent,
    LayoutComponent,
    CardComponent,
    CardLayoutComponent,
    FormLayoutComponent,
    TablePaginationComponent,
    PaginatedTableComponent,
    SortedTableComponent,
    FilteredTableComponent,
    SelectionTableComponent,
    StickyTableComponent,
    ButtonLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MaterialModule,
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
    MatPaginatorModule
  ],
  providers: [SideNavService],
  bootstrap: [AppComponent]
})
export class AppModule {}
