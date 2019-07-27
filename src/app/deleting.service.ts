import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Deletion } from './data/Delete';

@Injectable({
  providedIn: 'root'
})
export class DeletingService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) { }
  // deleteHotel(deletion: Deletion): Observable< any > {
  //   return this.http.delete('http://localhost:8086/delete', deletion);
  // }
}
