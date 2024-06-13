import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SaleServiceService {

  apiUrl = `${environment.apiUrl}/sales`;

  constructor(private httpClient: HttpClient) { }

  /**
   * Obtiene todas las ventas.
   * @returns Un Observable que emite un objeto con todas las ventas.
   */
  getAllSales(): Observable<any>{
    return this.httpClient.get(this.apiUrl, {withCredentials: true}).pipe((res:any) => res);
  }

  /**
   * Crea una nueva venta.
   * @param sale - El objeto de venta a crear.
   * @returns Un Observable que emite una respuesta HTTP con el resultado de la creación de la venta.
   */
  createSale(sale: any): Observable<HttpResponse<any>> {
    return this.httpClient.post<any>(this.apiUrl, sale, { observe: 'response', withCredentials: true });
  }

  /**
   * Obtiene una venta por su ID.
   * @param saleId - El ID de la venta a obtener.
   * @returns Un Observable que emite un objeto con la venta correspondiente al ID proporcionado.
   */
  getSaleById(saleId: string): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/${saleId}`, {withCredentials: true}).pipe((res:any) => res);
  }

  /**
   * Actualiza una venta existente.
   * @param sale - El objeto de venta actualizado.
   * @param saleID - El ID de la venta a actualizar.
   * @returns Un Observable que emite una respuesta HTTP con el resultado de la actualización de la venta.
   */
  updateSale(sale: any, saleID: string): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.put<any>(`${this.apiUrl}/${saleID}`, sale, { headers, observe: 'response', withCredentials: true });
  }

  /**
   * Elimina una venta por su ID.
   * @param saleId - El ID de la venta a eliminar.
   * @returns Un Observable que emite una respuesta HTTP con el resultado de la eliminación de la venta.
   */
  deleteSale(saleId: string): Observable<HttpResponse<any>> {
    return this.httpClient.delete<any>(`${this.apiUrl}/${saleId}`, { observe: 'response', withCredentials: true });
  }
}
