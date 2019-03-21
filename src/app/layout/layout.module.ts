import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LayoutRoutes } from "./layout.routes";
import { SocialComponent } from "./feature/social-layout/social/social-card.component";
import { SocialLayoutComponent } from "./feature/social-layout/social-layout.component";
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
import { MatDatepickerModule, MatNativeDateModule } from "@angular/material";
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
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatBadgeModule } from "@angular/material/badge";
import { MatChipsModule } from "@angular/material/chips";
import { MatBottomSheetModule } from "@angular/material/bottom-sheet";
import { MatDialogModule } from "@angular/material/dialog";
import { TreeComponent } from "./feature/componants/tree/tree.component";
import { FileUploadComponent } from "./feature/componants/file-upload/file-upload.component";
import { MatFileUploadModule } from "angular-material-fileupload";
import { ImageCropperComponent } from "./feature/image-cropper/image-cropper.component";
import { ImageCropperModule } from "ngx-image-cropper";
import { FileDropModule } from "ngx-file-drop";
import { AlertComponent } from "./feature/componants/alert/alert.component";
import { BdAlertComponent } from "./feature/componants/alert/alert-componant/bd-alert/bd-alert.component";
import { ButtonComponent } from "./feature/componants/button/button.component";
import { TabsComponent } from "./feature/componants/tabs/tabs.component";
import { CardComponent } from "./feature/componants/card/card.component";
import { ListComponent } from "./feature/componants/list/list.component";
import { ProgressBarComponent } from "./feature/componants/progress-bar/progress-bar.component";
import { ToolTipComponent } from "./feature/componants/tool-tip/tool-tip.component";
import {
  BottomSheet,
  DialogModal,
  ModalComponent
} from "./feature/componants/modal/modal.component";
import { PopOverComponent } from "./feature/componants/pop-over/pop-over.component";
import { DateComponent } from "./feature/componants/date/date.component";
import { LineComponent } from "./feature/graph/line/line.component";
import { BarComponent } from "./feature/graph/bar/bar.component";
import { RadarComponent } from "./feature/graph/radar/radar.component";
import { DognutComponent } from "./feature/graph/dognut/dognut.component";
import { StickyComponent } from "./feature/graph/sticky/sticky.component";
import { ScatterComponent } from "./feature/graph/scatter/scatter.component";
import { AreaComponent } from "./feature/graph/area/area.component";
import { MixedComponent } from "./feature/graph/mixed/mixed.component";
import { BubbleComponent } from "./feature/graph/bubble/bubble.component";

@NgModule({
  declarations: [
    SocialComponent,
    SocialLayoutComponent,
    TablePaginationComponent,
    PaginatedTableComponent,
    SortedTableComponent,
    FilteredTableComponent,
    SelectionTableComponent,
    StickyTableComponent,
    FormLayoutComponent,
    DataTableComponent,
    TreeComponent,
    FileUploadComponent,
    ImageCropperComponent,
    AlertComponent,
    BdAlertComponent,
    TreeComponent,
    ButtonComponent,
    TabsComponent,
    CardComponent,
    ListComponent,
    ProgressBarComponent,
    ToolTipComponent,
    ModalComponent,
    PopOverComponent,
    DateComponent,
    LineComponent,
    BarComponent,
    RadarComponent,
    DognutComponent,
    StickyComponent,
    ScatterComponent,
    AreaComponent,
    MixedComponent,
    BubbleComponent,
    BottomSheet,
    DialogModal
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
    MatNativeDateModule,
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
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [BottomSheet, DialogModal]
})
export class LayoutModule {}
