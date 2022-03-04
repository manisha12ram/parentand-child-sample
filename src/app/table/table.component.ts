import { Component, OnInit } from '@angular/core';

// export interface PeriodicElement {
//   name: string;
//   phoneNumber: number;
//   address: string
//   state: string;
//   city: string;
// }
// const ELEMENT_DATA: PeriodicElement[] = [
//   { name: 'ram', phoneNumber: 9840672086, address: 'kavimani st', state: 'Tamil nadu', city: 'chennai' },
//   { name: 'ram', phoneNumber: 9840672086, address: 'kavimani st', state: 'Tamil nadu', city: 'chennai' },
//   { name: 'ram', phoneNumber: 9840672086, address: 'kavimani st', state: 'Tamil nadu', city: 'chennai' },
// ];
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }
  onEdit() {

  }
  onDelete() {

  }

}
