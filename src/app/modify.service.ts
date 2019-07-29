import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Modify } from './data/Modifing';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModifyService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) { }
  modifyHotel(modify: Modify ): Observable< any > {
    console.log('inservice');
    return this.http.put('http://localhost:8086/modify', modify, { headers: this.headers });
  }
}
