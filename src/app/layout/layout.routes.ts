import { Routes } from "@angular/router";
import { SocialLayoutComponent } from "./feature/social-layout/social-layout.component";
import { SelectionTableComponent } from "./feature/table-layout/selection-table/selection-table.component";
import { FilteredTableComponent } from "./feature/table-layout/filtered-table/filtered-table.component";
import { PaginatedTableComponent } from "./feature/table-layout/paginated-table/paginated-table.component";
import { SortedTableComponent } from "./feature/table-layout/sorted-table/sorted-table.component";
import { StickyTableComponent } from "./feature/table-layout/sticky-table/sticky-table.component";
import { FormLayoutComponent } from "./feature/form-layout/form-layout.component";
import { DataTableComponent } from "./feature/table-layout/data-table/data-table.component";
import { TreeComponent } from "./feature/componants/tree/tree.component";
import { FileUploadComponent } from "./feature/componants/file-upload/file-upload.component";
import { ImageCropperComponent } from "./feature/image-cropper/image-cropper.component";
import { AlertComponent } from "./feature/componants/alert/alert.component";
import { ButtonComponent } from "./feature/componants/button/button.component";
import { TabsComponent } from "./feature/componants/tabs/tabs.component";
import { CardComponent } from "./feature/componants/card/card.component";
import { ListComponent } from './feature/componants/list/list.component';
import { ProgressBarComponent } from './feature/componants/progress-bar/progress-bar.component';
import { PopOverComponent } from './feature/componants/pop-over/pop-over.component';
import { ToolTipComponent } from './feature/componants/tool-tip/tool-tip.component';
import { ModalComponent } from './feature/componants/modal/modal.component';
import { DateComponent } from './feature/componants/date/date.component';
import { LineComponent } from './feature/graph/line/line.component';
import { BarComponent } from './feature/graph/bar/bar.component';
import { RadarComponent } from './feature/graph/radar/radar.component';
import { DognutComponent } from './feature/graph/dognut/dognut.component';
import { StickyComponent } from './feature/graph/sticky/sticky.component';
import { BubbleComponent } from './feature/graph/bubble/bubble.component';
import { ScatterComponent } from './feature/graph/scatter/scatter.component';
import { AreaComponent } from './feature/graph/area/area.component';
import { MixedComponent } from './feature/graph/mixed/mixed.component';

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
  // { path: "accordions", component: FormLayoutComponent },
  // { path: "badges", component: FormLayoutComponent },
  { path: "buttons", component: ButtonComponent },
  { path: "cards", component: CardComponent },
  // { path: "card-metrics", component: FormLayoutComponent },
  // { path: "corousels", component: FormLayoutComponent },
  { path: "lists", component: ListComponent },
  // { path: "paginations", component: FormLayoutComponent },
  { path: "pop-overs", component: PopOverComponent },
  { path: "progressbars", component: ProgressBarComponent },
  { path: "tabs", component: TabsComponent },
  { path: "tooltips", component: ToolTipComponent },
  { path: "modals", component: ModalComponent },
  { path: "trees", component: TreeComponent },
  { path: "dates", component: DateComponent },
  { path: "file-upload", component: FileUploadComponent },
  { path: "image-cropper", component: ImageCropperComponent },
  { path: "charts/line", component: LineComponent },
  { path: "charts/bar", component: BarComponent },
  { path: "charts/radar", component: RadarComponent },
  { path: "charts/dognut", component: DognutComponent },
  { path: "charts/sticky", component: StickyComponent },
  { path: "charts/bubble", component:  BubbleComponent},
  { path: "charts/scatter", component: ScatterComponent },
  { path: "charts/area", component: AreaComponent },
  { path: "charts/mixed", component: MixedComponent }
];
