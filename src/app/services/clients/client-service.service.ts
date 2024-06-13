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

  getClients(): Observable<any>{
    return this.httpClient.get(this.apiUrl, { withCredentials: true }).pipe(res => res);
  }

  createClient(client: any): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post<any>(this.apiUrl, client, { headers, observe: 'response', withCredentials: true});
  }

  getClientById(clientId: string): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/${clientId}`, { withCredentials: true }).pipe(res => res);
  }

  updateClient(clientId: string ,client: any): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.put<any>(`${this.apiUrl}/${clientId}`, client, { headers, observe: 'response', withCredentials: true});
  }

  deleteClient(clientId: string): Observable<HttpResponse<any>> {
    return this.httpClient.delete<any>(`${this.apiUrl}/${clientId}`, { observe: 'response', withCredentials: true});
  }
}
