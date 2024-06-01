import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TypeproductService {

  apiUrl = `${environment.apiUrl}/types`;


  constructor(private httpClient: HttpClient) { }

  getAllTypeProducts(): Observable<any>{
    return this.httpClient.get(this.apiUrl).pipe(res => res);
  }
  getTypeProductById(typeProductId: string): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/${typeProductId}`).pipe(res => res);
  }
  createTypeProduct(typeProduct: any): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post<any>(this.apiUrl, typeProduct, { headers, observe: 'response' });
  }
  updateTypeProduct(typeProduct: any): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.put<any>(this.apiUrl, typeProduct, { headers, observe: 'response' });
  }
  deleteTypeProduct(typeProductId: string): Observable<HttpResponse<any>> {
    return this.httpClient.delete<any>(`${this.apiUrl}/${typeProductId}`, { observe: 'response' });
  }

}
