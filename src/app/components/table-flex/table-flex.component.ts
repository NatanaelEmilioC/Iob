import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-table-flex',
  templateUrl: './table-flex.component.html',
  styleUrls: ['./table-flex.component.css']
})
export class TableFlexComponent implements OnInit {
 @Input() DATA:any;
  columns!: Array<any>;
  displayedColumns!: Array<any>;
  dataSource:any

  ngOnInit() {
    // Get list of columns by gathering unique keys of objects found in DATA.
    const columns = this.DATA
      .reduce((columns: any, row: {}) => {
        return [...columns, ...Object.keys(row)]
      }, [])
      .reduce((columns: string | any[], column: any) => {
        return columns.includes(column)
          ? columns
          : [...columns, column]
      }, [])
    // Describe the columns for <mat-table>.
    this.columns = columns.map((column: string | number) => {
      return {
        columnDef: column,
        header: column,
        cell: (element: any) => `${element[column] ? element[column] : ``}`
      }
    })
    this.displayedColumns = this.columns.map(c => c.columnDef);
    // Set the dataSource for <mat-table>.
    this.dataSource = this.DATA
  }
}
