import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs'

import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  /**
   * Realiza el inicio de sesión para un cliente.
   * @param user Los datos del usuario para iniciar sesión.
   * @returns Un Observable que emite la respuesta del servidor.
   */
  loginClient(user: any): Observable<any>{
    return this.httpClient.post(`${this.apiUrl}/login`, user).pipe(
      tap(res => console.log("Respuesta:", res))
    );
  }

  /**
   * Realiza el inicio de sesión para un administrador.
   * @param user Los datos del usuario para iniciar sesión.
   * @returns Un Observable que emite la respuesta del servidor.
   */
  loginAdmin(user: any): Observable<any>{
    return this.httpClient.post(`${this.apiUrl}/login-admin`, user, {withCredentials: true,
      observe: 'response'});
  }

  /**
   * Verifica si un cliente ha iniciado sesión.
   * @returns Un Observable que emite la respuesta del servidor.
   */
  isLoggedInCLient(): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/validate`,{}, {withCredentials: true}).pipe(res => res);
  }

  /**
   * Verifica si un administrador ha iniciado sesión.
   * @returns Un Observable que emite la respuesta del servidor.
   */
  isLoggedInAdmin(): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/validate-admin`,{}, {withCredentials: true}).pipe(res => res);
  }

  /**
   * Cierra la sesión del usuario actual.
   * @returns Un Observable que emite la respuesta del servidor.
   */
  logout(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/logout`, {withCredentials: true, observe: 'response'});
  }
}
