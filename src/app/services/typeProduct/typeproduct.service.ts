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
    return this.httpClient.get(this.apiUrl, { withCredentials: true }).pipe((res:any) => res);
  }
  getTypeProductById(typeProductId: string): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/${typeProductId}`, { withCredentials: true }).pipe((res:any) => res);
  }
  createTypeProduct(typeProduct: any): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post<any>(this.apiUrl, typeProduct, { headers, observe: 'response', withCredentials: true});
  }
  updateTypeProduct(ptID: string, typeProduct: any): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.put<any>(`${this.apiUrl}/${ptID}`, typeProduct, { headers, observe: 'response', withCredentials: true});
  }
  deleteTypeProduct(typeProductId: string): Observable<HttpResponse<any>> {
    return this.httpClient.delete<any>(`${this.apiUrl}/${typeProductId}`, { observe: 'response', withCredentials: true});
  }

}
