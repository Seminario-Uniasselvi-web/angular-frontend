import { Component, inject, OnInit } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { HeaderComponent } from "../../components/header/header.component";
import { CarouselComponent } from "../../components/carousel/carousel.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { Vehicle } from '../../../interfaces/Vehicle';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, HeaderComponent, CarouselComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  vehicles!: Vehicle[]

  _vehicleService = inject(VehicleService)

  ngOnInit(){
    this._vehicleService.getVehicles().subscribe(
      (resp: Vehicle[]) => {
        this.vehicles = resp
      }
    )
  }
}
