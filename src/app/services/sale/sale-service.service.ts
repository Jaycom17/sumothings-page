import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SaleServiceService {

  apiUrl = `${environment.apiUrl}/sales`;

  constructor(private httpClient: HttpClient) { }

  getAllSales(): Observable<any>{
    return this.httpClient.get(this.apiUrl, {withCredentials: true}).pipe((res:any) => res);
  }

  createSale(sale: any): Observable<HttpResponse<any>> {
    return this.httpClient.post<any>(this.apiUrl, sale, { observe: 'response', withCredentials: true });
  }

  getSaleById(saleId: string): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/${saleId}`, {withCredentials: true}).pipe((res:any) => res);
  }

  updateSale(sale: any, saleID: string): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.put<any>(`${this.apiUrl}/${saleID}`, sale, { headers, observe: 'response', withCredentials: true });
  }

  deleteSale(saleId: string): Observable<HttpResponse<any>> {
    return this.httpClient.delete<any>(`${this.apiUrl}/${saleId}`, { observe: 'response', withCredentials: true });
  }
}
