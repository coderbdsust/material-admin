import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LayoutRoutes } from "./layout.routes";
import { CardComponent } from "./feature/card-layout/card/card.component";
import { CardLayoutComponent } from "./feature/card-layout/card-layout.component";
import { TablePaginationComponent } from "./feature/table-layout/table-pagination/table-pagination.component";
import { PaginatedTableComponent } from "./feature/table-layout/paginated-table/paginated-table.component";
import { SortedTableComponent } from "./feature/table-layout/sorted-table/sorted-table.component";
import { FilteredTableComponent } from "./feature/table-layout/filtered-table/filtered-table.component";
import { SelectionTableComponent } from "./feature/table-layout/selection-table/selection-table.component";
import { StickyTableComponent } from "./feature/table-layout/sticky-table/sticky-table.component";
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
import { DataTableComponent } from "./feature/table-layout/data-table/data-table.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MatTabsModule } from "@angular/material/tabs";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatBadgeModule} from '@angular/material/badge';
import {MatChipsModule} from '@angular/material/chips';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatDialogModule} from '@angular/material/dialog';
import { OtherLayoutComponent } from './feature/other-layout/other-layout.component';
import { FileUploadComponent } from './feature/file-upload/file-upload.component';
import { MatFileUploadModule } from 'angular-material-fileupload';
import { ImageCropperComponent } from './feature/image-cropper/image-cropper.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { FileDropModule } from 'ngx-file-drop';
import { AlertComponent } from './feature/componants/alert/alert.component';
import { BdAlertComponent } from './feature/componants/alert/alert-componant/bd-alert/bd-alert.component';

 

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
    FormLayoutComponent,
    DataTableComponent,
    OtherLayoutComponent,
    FileUploadComponent,
    ImageCropperComponent,
    AlertComponent,
    BdAlertComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
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
    MatTabsModule,
    MatProgressSpinnerModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatChipsModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatFileUploadModule,
    ImageCropperModule,
    RouterModule,
    FormsModule,
    FileDropModule,
    ReactiveFormsModule,
    RouterModule.forChild(LayoutRoutes)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LayoutModule {}
