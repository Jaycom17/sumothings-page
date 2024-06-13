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

  /**
   * Obtiene todos los elementos de la lista de compras.
   * @returns Un Observable que emite la respuesta del servidor.
   */
  getAllShopping(): Observable<any>{
    return this.httpClient.get(this.apiUrl, {withCredentials: true}).pipe((res:any) => res);
  }

  /**
   * Crea un nuevo elemento en la lista de compras.
   * @param shopping El objeto que representa el elemento de la lista de compras a crear.
   * @returns Un Observable que emite la respuesta del servidor.
   */
  createShopping(shopping: any): Observable<HttpResponse<any>> {
    return this.httpClient.post<any>(this.apiUrl, shopping, { observe: 'response', withCredentials: true });
  }

  /**
   * Obtiene un elemento de la lista de compras por su ID.
   * @param shoppingId El ID del elemento de la lista de compras a obtener.
   * @returns Un Observable que emite la respuesta del servidor.
   */
  getShoppingById(shoppingId: string): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/${shoppingId}`, {withCredentials: true}).pipe((res:any) => res);
  }

  /**
   * Actualiza un elemento de la lista de compras.
   * @param shopping El objeto que representa el elemento de la lista de compras a actualizar.
   * @param shoID El ID del elemento de la lista de compras a actualizar.
   * @returns Un Observable que emite la respuesta del servidor.
   */
  updateShopping(shopping: any, shoID: string): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.put<any>(`${this.apiUrl}/${shoID}`, shopping, { headers, observe: 'response', withCredentials: true });
  }

  /**
   * Elimina un elemento de la lista de compras por su ID.
   * @param shoppingId El ID del elemento de la lista de compras a eliminar.
   * @returns Un Observable que emite la respuesta del servidor.
   */
  deleteShopping(shoppingId: string): Observable<HttpResponse<any>> {
    return this.httpClient.delete<any>(`${this.apiUrl}/${shoppingId}`, { observe: 'response', withCredentials: true });
  }

}
