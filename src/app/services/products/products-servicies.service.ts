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
    return this.httpClient.get(this.apiUrl).pipe((res:any) => res);
  }

  createProduct(Product: FormData): Observable<HttpResponse<any>> {
    return this.httpClient.post<any>(this.apiUrl, Product, { observe: 'response' });
  }

  getProductById(ProductId: string): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/${ProductId}`).pipe((res:any) => res);
  }

  updateProduct(Product: any): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.put<any>(this.apiUrl, Product, { headers, observe: 'response' });
  }

  deleteProduct(ProductId: string): Observable<HttpResponse<any>> {
    return this.httpClient.delete<any>(`${this.apiUrl}/${ProductId}`, { observe: 'response' });
  }
}
