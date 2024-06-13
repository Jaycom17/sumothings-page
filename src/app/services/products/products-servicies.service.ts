import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiciesService {

  apiUrl = `${environment.apiUrl}/products`;

  constructor(private httpClient: HttpClient) { }

  getAllProducts(): Observable<any>{
    return this.httpClient.get(this.apiUrl, { withCredentials: true }).pipe((res:any) => res);
  }

  createProduct(Product: FormData): Observable<HttpResponse<any>> {
    return this.httpClient.post<any>(this.apiUrl, Product, { observe: 'response', withCredentials: true});
  }

  getProductById(ProductId: string): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/${ProductId}`, { withCredentials: true }).pipe((res:any) => res);
  }

  updateProduct(Product: FormData, proID: string): Observable<HttpResponse<any>> {
    return this.httpClient.put<any>(`${this.apiUrl}/${proID}`, Product, { observe: 'response', withCredentials: true });
  }

  deleteProduct(ProductId: string): Observable<HttpResponse<any>> {
    return this.httpClient.delete<any>(`${this.apiUrl}/${ProductId}`, { observe: 'response',  withCredentials: true });
  }

  getProductBrief(): Observable<any>{
    return this.httpClient.get(`${this.apiUrl}/brief`, { withCredentials: true }).pipe((res:any) => res);
  }

  getProductsStatus(): Observable<any>{
    return this.httpClient.get(`${this.apiUrl}/status`, { withCredentials: true }).pipe((res:any) => res);
  }
}
