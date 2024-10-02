import { Component } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CarouselModule, ButtonModule, TagModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  products: any[] = []

  responsiveOptions: any[] | undefined;

  constructor(private _vehicleService: VehicleService) {}

  ngOnInit() {
    this.products = this._vehicleService.getVehicles()  
      

  }
}
