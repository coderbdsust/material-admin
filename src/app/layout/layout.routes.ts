import { Routes } from '@angular/router';
import { SocialLayoutComponent } from "./feature/social-layout/social-layout.component";
import { SelectionTableComponent } from "./feature/table-layout/selection-table/selection-table.component";
import { FilteredTableComponent } from "./feature/table-layout/filtered-table/filtered-table.component";
import { PaginatedTableComponent } from "./feature/table-layout/paginated-table/paginated-table.component";
import { SortedTableComponent } from "./feature/table-layout/sorted-table/sorted-table.component";
import { StickyTableComponent } from "./feature/table-layout/sticky-table/sticky-table.component";
import { FormLayoutComponent } from "./feature/form-layout/form-layout.component";
import { DataTableComponent } from './feature/table-layout/data-table/data-table.component';
import { TreeComponent } from './feature/componants/tree/tree.component';
import { FileUploadComponent } from './feature/componants/file-upload/file-upload.component';
import { ImageCropperComponent } from './feature/image-cropper/image-cropper.component';
import { AlertComponent } from './feature/componants/alert/alert.component';
import { ButtonComponent } from './feature/componants/button/button.component';
import { TabsComponent } from './feature/componants/tabs/tabs.component';
import { CardComponent } from './feature/componants/card/card.component';

export const LayoutRoutes: Routes = [
  { path: "", component: SocialLayoutComponent },
  { path: "social", component: SocialLayoutComponent },
  { path: "table/selection", component: SelectionTableComponent },
  { path: "table/filter", component: FilteredTableComponent },
  { path: "table/paginated", component: PaginatedTableComponent },
  { path: "table/sorted", component: SortedTableComponent },
  { path: "table/sticky", component: StickyTableComponent },
  { path: "table/data-table", component: DataTableComponent },
  { path: "alerts", component: AlertComponent },
  { path: "accordions", component: FormLayoutComponent },
  { path: "badges", component: FormLayoutComponent },
  { path: "buttons", component: ButtonComponent },
  { path: "cards", component: CardComponent },
  { path: "card-metrics", component: FormLayoutComponent },
  { path: "corousels", component: FormLayoutComponent },
  { path: "lists", component: FormLayoutComponent },
  { path: "paginations", component: FormLayoutComponent },
  { path: "pop-overs", component: FormLayoutComponent },
  { path: "progressbars", component: FormLayoutComponent },
  { path: "tabs", component: TabsComponent },
  { path: "tooltips", component: FormLayoutComponent },
  { path: "modals", component: FormLayoutComponent },
  { path: "sliders", component: FormLayoutComponent },
  { path: "trees", component: TreeComponent },
  { path: "dates", component: FormLayoutComponent },
  { path: "file-upload", component: FileUploadComponent },
  { path: "image-cropper", component: ImageCropperComponent }
];
