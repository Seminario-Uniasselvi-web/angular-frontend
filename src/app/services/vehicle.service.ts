import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import { Vehicle } from '../../interfaces/Vehicle';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  ulr: string = environment.url

  http = inject(HttpClient)

  getVehicles(): Observable<Vehicle[]>{
    return this.http.get<Vehicle[]>(this.ulr)
  }
}
