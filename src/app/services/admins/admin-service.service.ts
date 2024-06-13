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

    getAdmins(): Observable<any> {
      return this.httpClient.get(this.apiUrl, {withCredentials: true}).pipe(res => res);
    }

    getAdminById(adminID: any): Observable<any> {
      return this.httpClient.get(`${this.apiUrl}/${adminID}`, {withCredentials: true, observe: 'response'});
    }

    saveAdmin(admin: any): Observable<HttpResponse<any>> {
      const headers = new HttpHeaders().set('Content-Type', 'application/json');
      return this.httpClient.post<any>(this.apiUrl, admin, { headers, observe: 'response', withCredentials: true });
    }

    updateAdmin(admin: any): Observable<HttpResponse<any>> {
      const headers = new HttpHeaders().set('Content-Type', 'application/json');
      return this.httpClient.put<any>(this.apiUrl, admin, { headers, observe: 'response', withCredentials: true });
    }

    deleteAdmin(adminID: any): Observable<HttpResponse<any>> {
      return this.httpClient.delete<any>(`${this.apiUrl}/${adminID}`, { observe: 'response', withCredentials: true });
    }
}
