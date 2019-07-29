import { Component, OnInit } from '@angular/core';
import { Deletion } from '../data/Delete';
import { DeletingService } from '../deleting.service';

@Component({
  selector: 'app-deleting',
  templateUrl: './deleting.component.html',
  styleUrls: ['./deleting.component.scss']
})
export class DeletingComponent implements OnInit {

deleted: Deletion = { hotelId : 0 };


  constructor(private deletionService: DeletingService) { }
  onDelete() {
    this.deletionService.deleteHotel(this.deleted).subscribe(
      value => {
        console.log('Hotel deleted successfully', value);
        alert('hotel deleted successfully');
      },
      error => {
        console.log('FAIL to delete hotel!');
      },
      () => {
        console.log('deletion of hotel deleted');
      });

  }

  ngOnInit() {
  }

}
