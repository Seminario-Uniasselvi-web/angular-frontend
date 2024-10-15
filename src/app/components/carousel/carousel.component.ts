import { Component, inject, Input } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { Vehicle } from '../../../interfaces/Vehicle';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CarouselModule, ButtonModule, TagModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {

  @Input() vehicles!: Vehicle[]


  responsiveOptions: any[] | undefined;


}
