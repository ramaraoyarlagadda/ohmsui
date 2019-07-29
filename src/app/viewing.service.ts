import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { View } from './data/Viewing';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewingService {

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) {}
  viewHotel(view: View): Observable< any > {
    console.log('inservice');
    return this.http.post('http://localhost:8086/view', view, { headers: this.headers });

  }

}
