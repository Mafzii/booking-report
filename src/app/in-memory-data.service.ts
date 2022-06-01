import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Entry } from './entry';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const data = [
      { 
        id: 1,
        booking_id: 'HM-2205260000009',
        booker: 'Shaan Masood',
        date: '26 May: 2022 9:16 (GMT)',
        cargo: ['Container', 'Standard 20\'x 1', 'Standard 40\'x'],
        shipping_line: 'CMA CGM Shipping Line',
        sl_icon: '../assets/CMACGM.png',
        pickup: 'PK KHI',
        pickup_2: 'Karachi Pakistan',
        pickup_icon: '../assets/pak.png',
        dest: 'AE JEA',
        dest_2: 'Jebel Ali United Arab Emirates',
        dest_icon: '../assets/uas.png',
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
    ];
    return {data};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(data: Entry[]): number {
    return data.length > 0 ? Math.max(...data.map(data => data.id)) + 1 : 11;
  }
}