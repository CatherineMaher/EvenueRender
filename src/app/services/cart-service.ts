import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private localStorageKey = 'userId'; 
  private url="https://evenu-website-6.onrender.com/reservations/";
    
  constructor(private http:HttpClient){}

  getCartInfo(): Observable<any>  {
    const userData = localStorage.getItem(this.localStorageKey);
    return this.http.get(this.url+userData)

  }
  updateCart(id:any ,data:any) {

    return this.http.patch(this.url+id,data)

  }
}
