import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private httpClient: HttpClient) { }

  apiUrl = `${environment.apiUrl}/adminUser`;

  /**
   * Obtiene todos los administradores.
   * @returns Un Observable que emite la respuesta del servidor.
   */
  getAdmins(): Observable<any> {
    return this.httpClient.get(this.apiUrl, {withCredentials: true}).pipe(res => res);
  }

  /**
   * Obtiene un administrador por su ID.
   * @param adminID El ID del administrador.
   * @returns Un Observable que emite la respuesta del servidor.
   */
  getAdminById(adminID: any): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/${adminID}`, {withCredentials: true, observe: 'response'});
  }

  /**
   * Guarda un nuevo administrador.
   * @param admin Los datos del administrador a guardar.
   * @returns Un Observable que emite la respuesta del servidor.
   */
  saveAdmin(admin: any): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post<any>(this.apiUrl, admin, { headers, observe: 'response', withCredentials: true });
  }

  /**
   * Actualiza un administrador existente.
   * @param admin Los nuevos datos del administrador.
   * @returns Un Observable que emite la respuesta del servidor.
   */
  updateAdmin(admin: any): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.put<any>(this.apiUrl, admin, { headers, observe: 'response', withCredentials: true });
  }

  /**
   * Elimina un administrador por su ID.
   * @param adminID El ID del administrador a eliminar.
   * @returns Un Observable que emite la respuesta del servidor.
   */
  deleteAdmin(adminID: any): Observable<HttpResponse<any>> {
    return this.httpClient.delete<any>(`${this.apiUrl}/${adminID}`, { observe: 'response', withCredentials: true });
  }
}
