import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  @Input()
  array: any = []

// make toggle a single value to make 1 work
  toggle: boolean[] = [this.array.length].fill(false);
  index: number;

  constructor() { 
    this.index = 0;
  }

  ngOnInit(): void {
  }

  toggler(i : number) {
    this.index = i;
    if (this.toggle[i]) this.toggle[i] = false;
    else this.toggle[i] = true
  }

}
