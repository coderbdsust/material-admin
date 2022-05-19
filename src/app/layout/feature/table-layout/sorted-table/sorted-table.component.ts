import {Component, OnInit, ViewChild, NgModule} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ELEMENT_DATA } from '../table-data';

@Component({
  selector: 'app-sorted-table',
  templateUrl: './sorted-table.component.html',
  styleUrls: ['./sorted-table.component.scss']
})
export class SortedTableComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort, { static: false }) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

}
