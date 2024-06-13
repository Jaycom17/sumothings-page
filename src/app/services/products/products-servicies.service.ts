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

  /**
   * Obtiene todos los productos.
   * @returns Un Observable que emite una respuesta con los productos.
   */
  getAllProducts(): Observable<any>{
    return this.httpClient.get(this.apiUrl, { withCredentials: true }).pipe((res:any) => res);
  }

  /**
   * Crea un nuevo producto.
   * @param Product Los datos del producto a crear.
   * @returns Un Observable que emite una respuesta con el resultado de la creación del producto.
   */
  createProduct(Product: FormData): Observable<HttpResponse<any>> {
    return this.httpClient.post<any>(this.apiUrl, Product, { observe: 'response', withCredentials: true});
  }

  /**
   * Obtiene un producto por su ID.
   * @param ProductId El ID del producto a obtener.
   * @returns Un Observable que emite una respuesta con el producto encontrado.
   */
  getProductById(ProductId: string): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/${ProductId}`, { withCredentials: true }).pipe((res:any) => res);
  }

  /**
   * Actualiza un producto existente.
   * @param Product Los nuevos datos del producto.
   * @param proID El ID del producto a actualizar.
   * @returns Un Observable que emite una respuesta con el resultado de la actualización del producto.
   */
  updateProduct(Product: FormData, proID: string): Observable<HttpResponse<any>> {
    return this.httpClient.put<any>(`${this.apiUrl}/${proID}`, Product, { observe: 'response', withCredentials: true });
  }

  /**
   * Elimina un producto por su ID.
   * @param ProductId El ID del producto a eliminar.
   * @returns Un Observable que emite una respuesta con el resultado de la eliminación del producto.
   */
  deleteProduct(ProductId: string): Observable<HttpResponse<any>> {
    return this.httpClient.delete<any>(`${this.apiUrl}/${ProductId}`, { observe: 'response',  withCredentials: true });
  }

  /**
   * Obtiene un resumen de los productos.
   * @returns Un Observable que emite una respuesta con el resumen de los productos.
   */
  getProductBrief(): Observable<any>{
    return this.httpClient.get(`${this.apiUrl}/brief`, { withCredentials: true }).pipe((res:any) => res);
  }

  /**
   * Obtiene el estado de los productos.
   * @returns Un Observable que emite una respuesta con el estado de los productos.
   */
  getProductsStatus(): Observable<any>{
    return this.httpClient.get(`${this.apiUrl}/status`, { withCredentials: true }).pipe((res:any) => res);
  }
}
