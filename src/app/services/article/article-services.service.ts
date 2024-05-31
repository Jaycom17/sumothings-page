import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleServicesService {

  apiUrl = `${environment.apiUrl}/articles`;

  constructor(private httpClient: HttpClient) { }

  getArticles(): Observable<any>{
    return this.httpClient.get(this.apiUrl).pipe(res => res);
  }

  createArticle(article: any): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post<any>(this.apiUrl, article, { headers, observe: 'response' });
  }

  getArticleById(articleId: string): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/${articleId}`).pipe(res => res);
  }

  updateArticle(article: any): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.put<any>(this.apiUrl, article, { headers, observe: 'response' });
  }

  deleteArticle(articleId: string): Observable<HttpResponse<any>> {
    return this.httpClient.delete<any>(`${this.apiUrl}/${articleId}`, { observe: 'response' });
  }
}
