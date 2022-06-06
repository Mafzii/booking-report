import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  array_db: any = [
    { 
      id: 1,
      booking_id: 'HM-2205260000009',
      booker: 'Shaan Masood',
      date: '26 May: 2022 9:16 (GMT)',
      cargo: ['Container', 'Standard 20\'x 1', 'Standard 40\'x 1'],
      shipping_line: 'CMA CGM Shipping Line',
      sl_icon: '../assets/CMACGM.png',
      pickup: 'PK KHI',
      pickup_2: 'Karachi Pakistan',
      pickup_icon: '../assets/pak.png',
      dest: 'AE JEA',
      dest_2: 'Jebel Ali United Arab Emirates',
      dest_icon: '../assets/uae.png',
      cutoff: '23 May 2022',
      etd: '26 May 2022',
      eta: '29 May 2022',
      bl_num: '',

      provider_name: 'Costa Logistics',
      provider_icon: '../assets/costa.png',
      voyage_number: 'SDFSDFSDF001',
      vessel_name: 'SDFSDF',
      vessel_number: 'SDFSDF / SDFOO1',
      commodity_description: 'This is dummy text for testing. A craft for traveling on water, now usually one larger than an ordinary rowboat; a ship or boat.'
    },
    { 
      id: 2,
      booking_id: 'HM-2205260000008',
      booker: 'Mustafa Afzal',
      date: '24 May: 2022 12:16 (GMT)',
      cargo: ['Container', 'Flat Rack 20\'x 1', 'Standard 40\'x 1'],
      shipping_line: 'Msc. Shipping Company',
      sl_icon: '../assets/MSC.png',
      pickup: 'PK KHI',
      pickup_2: 'Karachi Pakistan',
      pickup_icon: '../assets/pak.png',
      dest: 'GB FAL',
      dest_2: 'Falmouth United Kingdom',
      dest_icon: '../assets/uk.png',
      cutoff: '20 May 2022',
      etd: '23 May 2022',
      eta: '27 May 2022',
      bl_num: '',

      provider_name: 'Mustafa Logistics',
      provider_icon: '../assets/costa.png',
      voyage_number: 'SDFSDFSDF002',
      vessel_name: 'SDFSCF',
      vessel_number: 'SDFSDCF / SDFOO2',
      commodity_description: 'This is a slightly different dummy text for testing. A craft for traveling on water, now usually one larger than an ordinary rowboat; a ship or boat.'
    },
    { 
      id: 3,
      booking_id: 'HM-2205260000008',
      booker: 'Mustafa Afzal',
      date: '22 May: 2022 12:16 (GMT)',
      cargo: ['Container', 'Flat Rack 20\'x 1', 'Standard 40\'x 1'],
      shipping_line: 'Msc. Shipping Company',
      sl_icon: '../assets/MSC.png',
      pickup: 'PK KHI',
      pickup_2: 'Karachi Pakistan',
      pickup_icon: '../assets/pak.png',
      dest: 'GB FAL',
      dest_2: 'Falmouth United Kingdom',
      dest_icon: '../assets/uk.png',
      cutoff: '20 May 2022',
      etd: '23 May 2022',
      eta: '27 May 2022',
      bl_num: '',

      provider_name: 'Mustafa Logistics',
      provider_icon: '../assets/costa.png',
      voyage_number: 'SDFSDFSDF002',
      vessel_name: 'SDFSCF',
      vessel_number: 'SDFSDCF / SDFOO2',
      commodity_description: 'This is a slightly different dummy text for testing. A craft for traveling on water, now usually one larger than an ordinary rowboat; a ship or boat.'
    },
    { 
      id: 4,
      booking_id: 'HM-2205260000008',
      booker: 'Mustafa Afzal',
      date: '21 May: 2022 12:16 (GMT)',
      cargo: ['Container', 'Flat Rack 20\'x 1', 'Standard 40\'x 1'],
      shipping_line: 'Msc. Shipping Company',
      sl_icon: '../assets/MSC.png',
      pickup: 'PK KHI',
      pickup_2: 'Karachi Pakistan',
      pickup_icon: '../assets/pak.png',
      dest: 'GB FAL',
      dest_2: 'Falmouth United Kingdom',
      dest_icon: '../assets/uk.png',
      cutoff: '20 May 2022',
      etd: '23 May 2022',
      eta: '27 May 2022',
      bl_num: '',

      provider_name: 'Mustafa Logistics',
      provider_icon: '../assets/costa.png',
      voyage_number: 'SDFSDFSDF002',
      vessel_name: 'SDFSCF',
      vessel_number: 'SDFSDCF / SDFOO2',
      commodity_description: 'This is a slightly different dummy text for testing. A craft for traveling on water, now usually one larger than an ordinary rowboat; a ship or boat.'
    },
    { 
      id: 5,
      booking_id: 'HM-2205260000008',
      booker: 'Mustafa Afzal',
      date: '17 May: 2022 12:16 (GMT)',
      cargo: ['Container', 'Flat Rack 20\'x 1', 'Standard 40\'x 1'],
      shipping_line: 'Msc. Shipping Company',
      sl_icon: '../assets/MSC.png',
      pickup: 'PK KHI',
      pickup_2: 'Karachi Pakistan',
      pickup_icon: '../assets/pak.png',
      dest: 'GB FAL',
      dest_2: 'Falmouth United Kingdom',
      dest_icon: '../assets/uk.png',
      cutoff: '20 May 2022',
      etd: '23 May 2022',
      eta: '27 May 2022',
      bl_num: '',

      provider_name: 'Mustafa Logistics',
      provider_icon: '../assets/costa.png',
      voyage_number: 'SDFSDFSDF002',
      vessel_name: 'SDFSCF',
      vessel_number: 'SDFSDCF / SDFOO2',
      commodity_description: 'This is a slightly different dummy text for testing. A craft for traveling on water, now usually one larger than an ordinary rowboat; a ship or boat.'
    }
  ]

  filtered: boolean = false;
  filtered_array : any[] = [];
  date: number = 0;

  stats: any = {
    ship_bookings: 76,
    plane_bookings: 58,
    truck_bookings: 68,
    warehouse_bookings: 41,
    total: 243,
    min_date: '10/05/2021',
    max_date: '25/05/2021'
  }

  constructor() { }

  ngOnInit(): void {
  }

  // function to create a filtered list based on user click (last = 10, 15, 30)
  filter (last : number) { 
    this.date = this.stats.min_date.split('/')
    console.log(this.date, last)
  }
}
