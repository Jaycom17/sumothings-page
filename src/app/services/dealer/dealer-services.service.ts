import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DealerServicesService {

  apiUrl = `${environment.apiUrl}/dealer`;

  constructor(private httpClient: HttpClient) { }

  getDealers(): Observable<any>{
    return this.httpClient.get(this.apiUrl).pipe(res => res);
  }

  saveDealer(dealer: any): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post<any>(this.apiUrl, dealer, { headers, observe: 'response' });
  }

  getDealerById(dealerId: string): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/${dealerId}`).pipe(res => res);
  }

  updateDealer(dealer: any): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.put<any>(this.apiUrl, dealer, { headers, observe: 'response' });
  }

  deleteDealer(dealerId: string): Observable<HttpResponse<any>> {
    return this.httpClient.delete<any>(`${this.apiUrl}/${dealerId}`, { observe: 'response' });
  }
}
