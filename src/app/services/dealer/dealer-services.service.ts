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
    return this.httpClient.get(this.apiUrl, {withCredentials: true}).pipe(res => res);
  }

  saveDealer(dealer: any): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post<any>(this.apiUrl, dealer, { headers, observe: 'response', withCredentials: true });
  }

  getDealerById(dealerId: string): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/${dealerId}`, { withCredentials: true }).pipe(res => res);
  }

  updateDealer(dealerId: string, dealer: any): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.put<any>(`${this.apiUrl}/${dealerId}`, dealer, { headers, observe: 'response', withCredentials: true});
  }

  deleteDealer(dealerId: string): Observable<HttpResponse<any>> {
    return this.httpClient.delete<any>(`${this.apiUrl}/${dealerId}`, { observe: 'response', withCredentials: true});
  }
}
