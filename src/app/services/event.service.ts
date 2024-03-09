import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private _HttpClient: HttpClient) { }
  getEvents(): Observable<any> {
    return this._HttpClient.get('https://evenu-website-6.onrender.com/events')
  }
  getEventByname(name: string): Observable<any> {
    return this._HttpClient.get(`https://evenu-website-6.onrender.com/events/getname/${name}`)
  }
  getOneEvents(id: Number): Observable<any> {
    return this._HttpClient.get(`https://evenu-website-6.onrender.com/events/${id}`)
  }
  deleteEvents(id: Number): Observable<any> {
    return this._HttpClient.delete(`https://evenu-website-6.onrender.com/events/${id}`)
  }
  updateEvents(id: Number, data: any): Observable<any> {
    return this._HttpClient.put(`https://evenu-website-6.onrender.com/events/${id}`, data);
  }
  getImageUrl(filename: any):string {

    return `https://evenu-website-6.onrender.com/uploads/${filename}`;
  }
}
