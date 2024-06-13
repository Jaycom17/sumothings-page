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

  /**
   * Obtiene todos los productos de tipo.
   * @returns Un Observable que emite la respuesta del servidor.
   */
  getAllTypeProducts(): Observable<any>{
    return this.httpClient.get(this.apiUrl, { withCredentials: true }).pipe((res:any) => res);
  }

  /**
   * Obtiene un producto de tipo por su ID.
   * @param typeProductId El ID del producto de tipo.
   * @returns Un Observable que emite la respuesta del servidor.
   */
  getTypeProductById(typeProductId: string): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/${typeProductId}`, { withCredentials: true }).pipe((res:any) => res);
  }

  /**
   * Crea un nuevo producto de tipo.
   * @param typeProduct El objeto del producto de tipo a crear.
   * @returns Un Observable que emite la respuesta del servidor.
   */
  createTypeProduct(typeProduct: any): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post<any>(this.apiUrl, typeProduct, { headers, observe: 'response', withCredentials: true});
  }

  /**
   * Actualiza un producto de tipo existente.
   * @param ptID El ID del producto de tipo a actualizar.
   * @param typeProduct El objeto del producto de tipo actualizado.
   * @returns Un Observable que emite la respuesta del servidor.
   */
  updateTypeProduct(ptID: string, typeProduct: any): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.put<any>(`${this.apiUrl}/${ptID}`, typeProduct, { headers, observe: 'response', withCredentials: true});
  }

  /**
   * Elimina un producto de tipo por su ID.
   * @param typeProductId El ID del producto de tipo a eliminar.
   * @returns Un Observable que emite la respuesta del servidor.
   */
  deleteTypeProduct(typeProductId: string): Observable<HttpResponse<any>> {
    return this.httpClient.delete<any>(`${this.apiUrl}/${typeProductId}`, { observe: 'response', withCredentials: true});
  }

}
