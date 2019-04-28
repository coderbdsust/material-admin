import { Component, OnInit, ViewChild , Inject} from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { PeriodicElement, ELEMENT_DATA, PElement } from '../table-data';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";


@Component({
  selector: "app-data-table-item-add",
  templateUrl: "data-table-item-add.html"
})
export class DataTableItemAddModal {
  constructor(
    public dialogRef: MatDialogRef<DataTableItemAddModal>,
    @Inject(MAT_DIALOG_DATA) public data: PeriodicElement
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

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

  constructor(public dialog: MatDialog) { }

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
    let clone = Object.assign({}, row);
    this.openDialog(clone);
  }

  removeItem(row) {
    this.removeRow(row);
  }

  openDialog(row): void {
    let data:any;
    if(!row){
      data = new PElement();
    } else {
      data = row;
    }

    const dialogRef = this.dialog.open(DataTableItemAddModal, {
      width: "650px",
      data
    });

    dialogRef.afterClosed().subscribe(result => {
      const pEle = result as PeriodicElement;
      this.saveOrUpdate(pEle);
    });
  }

  saveOrUpdate(element) {
    const oldData = this.dataSource.data;
    if (element.position) {
      const index = this.dataSource.data.findIndex(d => d.position === element.position);
      oldData[index] = element;
    } else {
      element.position = this.getNewIndex(oldData);
      oldData.push(element);
    }
    this.dataSource.data = oldData;
  }

  removeRow(element){
    const oldData = this.dataSource.data;
    const index = this.dataSource.data.findIndex(d => d.position === element.position);
    oldData.splice(index, 1);
    this.dataSource.data = oldData;
  }

  getNewIndex(items): any {
    const position  = Math.max.apply(Math, items.map( o => o.position ));
    return position + 1;
  }


}
