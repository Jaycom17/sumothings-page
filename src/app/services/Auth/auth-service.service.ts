import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs'
import axios from 'axios';

import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  apiUrl = environment.apiUrl;

  axiosplus = axios.create({
    withCredentials: true,
  })

  constructor(private httpClient: HttpClient) { }

  loginClient(user: any): Observable<any>{
    return this.httpClient.post(`${this.apiUrl}/loginClient`, user).pipe(
      tap(res => console.log("Respuesta:", res))
    );
  }
  

  loginAdmin(user: any): Observable<any>{
    return this.httpClient.post(`${this.apiUrl}/adminUser`, user, {withCredentials: true,
      observe: 'response'});
  }

  isLoggedInCLient(): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/validate`,{}, {withCredentials: true}).pipe(res => res);
  }

  isLoggedInAdmin(): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/validate-admin`,{}, {withCredentials: true, headers:{
      "content-type": "application/json"
    }}).pipe(res => res);
  }

  logout(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/logout`, {withCredentials: true, observe: 'response'});
  }
}
