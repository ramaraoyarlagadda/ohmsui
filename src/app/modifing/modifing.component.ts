import { Component, OnInit } from '@angular/core';
import { Modify } from '../data/Modifing';
import { ModifyService } from '../modify.service';

@Component({
  selector: 'app-modifing',
  templateUrl: './modifing.component.html',
  styleUrls: ['./modifing.component.scss']
})
export class ModifingComponent implements OnInit {
modify: Modify = { hotelId: 0 , hotelName: null, hotelAddress: null, numOfRooms: 0 };

constructor(private modifyService: ModifyService) { }
onModify() {
   this.modifyService.modifyHotel(this.modify).subscribe(
    value => {
      console.log('modification done successfully', value);
      alert('modification  successfully');
    },
    error => {
      console.log('FAIL to modify hoteldetails!');
      alert('modification not done successfully');
    },
    () => {
      console.log('modification now completed.');
    });

}

  ngOnInit() {
  }

}
