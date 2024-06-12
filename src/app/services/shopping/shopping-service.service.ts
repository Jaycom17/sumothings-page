import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShoppingServiceService {

  apiUrl = `${environment.apiUrl}/shopping`;

  constructor(private httpClient: HttpClient) { }

  getAllShopping(): Observable<any>{
    return this.httpClient.get(this.apiUrl, {withCredentials: true}).pipe((res:any) => res);
  }

  createShopping(shopping: any): Observable<HttpResponse<any>> {
    return this.httpClient.post<any>(this.apiUrl, shopping, { observe: 'response', withCredentials: true });
  }

  getShoppingById(shoppingId: string): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/${shoppingId}`, {withCredentials: true}).pipe((res:any) => res);
  }

  updateShopping(shopping: any, shoID: string): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.put<any>(`${this.apiUrl}/${shoID}`, shopping, { headers, observe: 'response', withCredentials: true });
  }


  deleteShopping(shoppingId: string): Observable<HttpResponse<any>> {
    return this.httpClient.delete<any>(`${this.apiUrl}/${shoppingId}`, { observe: 'response', withCredentials: true });
  }

}
