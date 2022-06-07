import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './bs.dropdown.component.html',
  styleUrls: ['./bs.dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  @Input()
  data: any = {};

  constructor() { }

  ngOnInit(): void {
  }

}
