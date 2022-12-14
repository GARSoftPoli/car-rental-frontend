import { Component, OnInit } from '@angular/core';
import { CarListingService } from 'src/app/services/car-listing.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingModel } from 'src/app/models/booking-model';
import { Car } from 'src/app/models/car-model';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-details-view',
  templateUrl: './details-view.component.html',
  styleUrls: ['./details-view.component.css']
})
export class DetailsViewComponent implements OnInit {

  bookingModel = new BookingModel();
  carInstance = new Car;

  constructor(private listing: CarListingService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    try {
      this.route.queryParams.subscribe((a: any) => {
        this.bookingModel.address = a.address;
        this.bookingModel.date = a.date;
        this.bookingModel.vehicle_type = a.vehicle_type;
        this.bookingModel.carJson = a.carJson;
      });
      this.carInstance = JSON.parse(this.bookingModel.carJson);
    } catch (error) {
      
    }
  }

  btnGoToList() : void{
    this.router.navigate(['/list'],{
      queryParams: this.bookingModel
    }).then(() => {window.location.reload();});
  }

  btnGoToBookingDetails() : void{
    this.router.navigate(['/booking-details'],{
      queryParams: this.bookingModel
    }).then(() => {window.location.reload();});
  }

}
