import { Injectable, QueryList } from '@angular/core';
import { HttpClient, HttpParams } from  '@angular/common/http';
import { catchError, finalize, map, Observable, pipe, tap } from 'rxjs';
import { MenuResponse } from 'src/app/classes/responses/menu-response';
import { Review } from 'src/app/classes/responses/review';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  private baseUrl:string = "http://18.194.21.216/api";
  
  //Menu:
  private getMenu:string = "/menu"
  private getReviews:string = "/reviews"
  
  constructor(private httpClient:HttpClient) { }
  
  getCategoryMenu(category: string): Observable<MenuResponse[]> {
    // console.log('Effettuo la richiesta:', this.baseUrl + this.getMenu);

    const params = new HttpParams().set('category', category);
    
    return this.httpClient.get<MenuResponse[]>(this.baseUrl + this.getMenu, { params }).pipe(
      tap(responseBody => {
        // console.log('Risposta ricevuta:', responseBody);
      }),
      catchError(error => {
        console.error('Errore nella richiesta:', error);
        throw error; 
      })
    );
  }
  
  getTestimonails(): Observable<Review[]> {
    // console.log('Effettuo la richiesta:', this.baseUrl + this.getReviews);
  
    return this.httpClient.get<{ data: any[] }>(this.baseUrl + this.getReviews).pipe(
      map(response => response.data.map(item => 
        new Review(item.id, item.customer_name, item.customer_job, item.text)
      )),
      tap(responseBody => {
        // console.log('Risposta ricevuta:', responseBody);
      }),
      catchError(error => {
        console.error('Errore nella richiesta:', error.message);
        throw error; 
      })
    );
  }
  
  
}
