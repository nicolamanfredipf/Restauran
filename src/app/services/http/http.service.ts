import { Injectable, QueryList } from '@angular/core';
import { HttpClient, HttpParams } from  '@angular/common/http';
import { catchError, map, Observable, pipe, tap } from 'rxjs';
import { MenuResponse } from 'src/app/classes/responses/menu-response';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  private baseUrl:string = "http://18.194.21.216/api";
  
  //Menu:
  private getMenu:string = "/menu"
  
  constructor(private httpClient:HttpClient) { }
  
  getCategoryMenu(category: string): Observable<MenuResponse[]> {
    const params = new HttpParams().set('category', category);

    return this.httpClient.get<MenuResponse[]>(this.baseUrl + this.getMenu, { params }).pipe(
      tap(responseBody => {
        console.log('Risposta ricevuta:', responseBody);
      }),
      catchError(error => {
        console.error('Errore nella richiesta:', error);
        throw error; 
      })
    );
  }
}
