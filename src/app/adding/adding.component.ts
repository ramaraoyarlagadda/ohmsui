import { Component, OnInit } from '@angular/core';
import { Hotel } from '../data/hoteldetails';
import { AddingService } from '../adding.service';

@Component({
  selector: 'app-adding',
  templateUrl: './adding.component.html',
  styleUrls: ['./adding.component.scss']
})
export class AddingComponent implements OnInit {
  hotel: Hotel = { hotelName: null, hotelAddress: null, numOfRooms: 0 };
  constructor(private addingService: AddingService) { }
  onSubmit() {
    this.addingService.addHotel(this.hotel).subscribe(
      value => {
        console.log('Hotel details added successfully', value);
        alert('hoteldetails added successfully');
      },
      error => {
        console.log('FAIL to add hoteldetails!');
      },
      () => {
        console.log('adding of hoteldetails now completed.');
      });

  }

  ngOnInit() {
  }

}
