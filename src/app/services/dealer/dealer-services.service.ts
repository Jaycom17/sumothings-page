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

  /**
   * Obtiene la lista de todos los distribuidores.
   * @returns Un Observable que emite la respuesta del servidor.
   */
  getDealers(): Observable<any>{
    return this.httpClient.get(this.apiUrl, {withCredentials: true}).pipe(res => res);
  }

  /**
   * Guarda un nuevo distribuidor.
   * @param dealer - Los datos del distribuidor a guardar.
   * @returns Un Observable que emite la respuesta del servidor.
   */
  saveDealer(dealer: any): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post<any>(this.apiUrl, dealer, { headers, observe: 'response', withCredentials: true });
  }

  /**
   * Obtiene un distribuidor por su ID.
   * @param dealerId - El ID del distribuidor a obtener.
   * @returns Un Observable que emite la respuesta del servidor.
   */
  getDealerById(dealerId: string): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/${dealerId}`, { withCredentials: true }).pipe(res => res);
  }

  /**
   * Actualiza un distribuidor existente.
   * @param dealerId - El ID del distribuidor a actualizar.
   * @param dealer - Los nuevos datos del distribuidor.
   * @returns Un Observable que emite la respuesta del servidor.
   */
  updateDealer(dealerId: string, dealer: any): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.put<any>(`${this.apiUrl}/${dealerId}`, dealer, { headers, observe: 'response', withCredentials: true});
  }

  /**
   * Elimina un distribuidor existente.
   * @param dealerId - El ID del distribuidor a eliminar.
   * @returns Un Observable que emite la respuesta del servidor.
   */
  deleteDealer(dealerId: string): Observable<HttpResponse<any>> {
    return this.httpClient.delete<any>(`${this.apiUrl}/${dealerId}`, { observe: 'response', withCredentials: true});
  }
}
