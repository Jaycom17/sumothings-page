import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {

  apiUrl = `${environment.apiUrl}/send-email`;

  constructor(private httpClient: HttpClient) { }
  /**
    * Envía un correo electrónico.
    * @param email - El objeto que contiene la información del correo electrónico a enviar.
    * @returns Una observable que emite la respuesta HTTP del servidor.
    */
  sendEmail(email: any): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post<any>(this.apiUrl, email, { headers, observe: 'response', withCredentials: true });
  }
}
