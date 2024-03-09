import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  constructor(private _HttpClient: HttpClient) { }
  getEvents(): Observable<any> {
    return this._HttpClient.get('https://evenu-website-6.onrender.com/events')
  }
  getAllReservations(): Observable<any> {
    return this._HttpClient.get('https://evenu-website-6.onrender.com/reservations');
  }
  getAllUsers():Observable<any>{
    return this._HttpClient.get('https://evenu-website-6.onrender.com/users')
  }

  // getEventByname(name: string): Observable<any> {
  //   return this._HttpClient.get(`https://evenu-website-6.onrender.com/events/getname/${name}`)
  // }
  getOneEvents(id: Number): Observable<any> {
    return this._HttpClient.get(`https://evenu-website-6.onrender.com/events/${id}`)
  }
  deleteUser(id: string): Observable<any> {
    return this._HttpClient.delete(`https://evenu-website-6.onrender.com/users/${id}`)
  }
  deleteEvent(id: string): Observable<any> {
    return this._HttpClient.delete(`https://evenu-website-6.onrender.com/events/${id}`)
  }
  // updateEvents(id: Number, data: any): Observable<any> {
  //   return this._HttpClient.put(`https://evenu-website-6.onrender.com/events/${id}`, data);
  // }
}
