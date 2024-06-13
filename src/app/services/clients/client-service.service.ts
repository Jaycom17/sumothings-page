import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  apiUrl = `${environment.apiUrl}/client`;

  constructor(private httpClient: HttpClient) { }

  /**
   * Obtiene la lista de clientes.
   * @returns Un Observable que emite la respuesta del servidor.
   */
  getClients(): Observable<any>{
    return this.httpClient.get(this.apiUrl, { withCredentials: true }).pipe(res => res);
  }

  /**
   * Crea un nuevo cliente.
   * @param client Los datos del cliente a crear.
   * @returns Un Observable que emite la respuesta del servidor.
   */
  createClient(client: any): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post<any>(this.apiUrl, client, { headers, observe: 'response', withCredentials: true});
  }

  /**
   * Obtiene un cliente por su ID.
   * @param clientId El ID del cliente a obtener.
   * @returns Un Observable que emite la respuesta del servidor.
   */
  getClientById(clientId: string): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/${clientId}`, { withCredentials: true }).pipe(res => res);
  }

  /**
   * Actualiza un cliente existente.
   * @param clientId El ID del cliente a actualizar.
   * @param client Los nuevos datos del cliente.
   * @returns Un Observable que emite la respuesta del servidor.
   */
  updateClient(clientId: string ,client: any): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.put<any>(`${this.apiUrl}/${clientId}`, client, { headers, observe: 'response', withCredentials: true});
  }

  /**
   * Elimina un cliente existente.
   * @param clientId El ID del cliente a eliminar.
   * @returns Un Observable que emite la respuesta del servidor.
   */
  deleteClient(clientId: string): Observable<HttpResponse<any>> {
    return this.httpClient.delete<any>(`${this.apiUrl}/${clientId}`, { observe: 'response', withCredentials: true});
  }
}
