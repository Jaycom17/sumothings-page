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

  /**
   * Obtiene todos los artículos.
   * @returns Un Observable que emite una respuesta HTTP con los artículos.
   */
  getArticles(): Observable<any>{
    return this.httpClient.get(this.apiUrl, { withCredentials: true }).pipe(res => res);
  }

  /**
   * Crea un nuevo artículo.
   * @param article El artículo a crear.
   * @returns Un Observable que emite una respuesta HTTP con el artículo creado.
   */
  createArticle(article: any): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post<any>(this.apiUrl, article, { headers, observe: 'response', withCredentials: true});
  }

  /**
   * Obtiene un artículo por su ID.
   * @param articleId El ID del artículo a obtener.
   * @returns Un Observable que emite una respuesta HTTP con el artículo encontrado.
   */
  getArticleById(articleId: string): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/${articleId}`, { withCredentials: true }).pipe(res => res);
  }

  /**
   * Actualiza un artículo existente.
   * @param articleId El ID del artículo a actualizar.
   * @param article El artículo actualizado.
   * @returns Un Observable que emite una respuesta HTTP con el artículo actualizado.
   */
  updateArticle(articleId: string ,article: any): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.put<any>(`${this.apiUrl}/${articleId}`, article, { headers, observe: 'response', withCredentials: true});
  }

  /**
   * Elimina un artículo existente.
   * @param articleId El ID del artículo a eliminar.
   * @returns Un Observable que emite una respuesta HTTP.
   */
  deleteArticle(articleId: string): Observable<HttpResponse<any>> {
    return this.httpClient.delete<any>(`${this.apiUrl}/${articleId}`, { observe: 'response', withCredentials: true});
  }
}
