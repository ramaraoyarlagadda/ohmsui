import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hotel } from './data/hoteldetails';

@Injectable({
  providedIn: 'root'
})
export class AddingService {

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }
  addHotel(hotel: Hotel): Observable< any > {
    return this.http.post('http://localhost:8086/add', hotel, { headers: this.headers });

  }
}
