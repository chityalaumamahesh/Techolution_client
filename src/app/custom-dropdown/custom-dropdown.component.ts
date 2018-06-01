
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl:  './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.css']
})
export class CustomDropdownComponent implements OnInit {

  @Input()
  items: any = [];
  selecteditem;
  @Output()
  select: EventEmitter<string>;
hidedrop = true;
  constructor() {
    this.select = new EventEmitter();

  }

  ngOnInit() {
  }
  selectItem(value) {
    this.selecteditem = value; 
    this.select.emit(this.selecteditem);
  }
}
