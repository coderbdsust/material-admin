import { Component, OnInit, NgModule } from "@angular/core";
import { MatTableDataSource } from "@angular/material";
import { ELEMENT_DATA } from "../table-data";
import {MyMaterialModule} from '../../../../my-material.module';

@NgModule({
  imports: [ MyMaterialModule ]
})
@Component({
  selector: "app-filtered-table",
  templateUrl: "./filtered-table.component.html",
  styleUrls: ["./filtered-table.component.scss"]
})
export class FilteredTableComponent implements OnInit {
  displayedColumns: string[] = ["position", "name", "weight", "symbol"];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor() {}

  ngOnInit() {}
}
