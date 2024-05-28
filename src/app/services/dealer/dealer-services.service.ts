import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DealerServicesService {

  apiUrl = `${environment.apiUrl}/dealer`;

  constructor(private httpClient: HttpClient) { }

  getDealers(): Observable<any>{
    return this.httpClient.get(this.apiUrl).pipe(res => res);
  }
}
