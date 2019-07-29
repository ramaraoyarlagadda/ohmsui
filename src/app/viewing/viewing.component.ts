import { Component, OnInit } from '@angular/core';
import { View } from '../data/Viewing';
import { ViewingService } from '../viewing.service';

@Component({
  selector: 'app-viewing',
  templateUrl: './viewing.component.html',
  styleUrls: ['./viewing.component.scss']
})
export class ViewingComponent implements OnInit {
  views: View = { hotelId: 0 , hotelName : null, hotelAddress: null, numOfRooms: 0};
  // hotel = { hoelId: 0 , hotelName: null, hotelAddress: null, numOfRooms: 0 };

  onView() {
    console.log('incomponent');
    return this.viewService.viewHotel(this.views).subscribe(
      data => this.views = data,
      error => {
        console.log('FAIL to view hoteldetails!');
        alert('Hoteldetails not found');
      },
    );


  }

  constructor( private viewService: ViewingService) { }

  ngOnInit() {
  }

}
