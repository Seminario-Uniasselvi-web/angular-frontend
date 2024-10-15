import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Vehicle } from '../../../interfaces/Vehicle';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardModule, ButtonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() vehicles!: Vehicle[]
}
