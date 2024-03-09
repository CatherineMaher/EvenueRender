import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  private url = 'https://evenu-website-6.onrender.com/users';
  constructor(private http: HttpClient, private _Router: Router) {}

  pay(data: any): Observable<any> {
    let id = window.localStorage.getItem('userId');
    console.log("Paymeettt", data);
    return this.http.post('https://evenu-website-6.onrender.com/users/' + id + '/res', data);
    
  }
}
