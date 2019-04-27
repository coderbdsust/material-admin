import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { PeriodicElement, ELEMENT_DATA } from '../table-data';
import { SelectionModel } from '@angular/cdk/collections';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['select', 'position', 'name', 'weight', 'symbol', 'edit', 'remove'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  editItem(row) {
    console.log('editItem');
    console.log(row);
  }

  removeItem(row) {
    console.log('removeItem');
    console.log(row);
    let index: number = this.dataSource.data.findIndex(d => d === row);
    console.log('remove index' + index);
    this.dataSource.data.splice(index, 1);
  }

}
