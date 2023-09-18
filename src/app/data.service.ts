import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
  public itemUrl = '';

  constructor(private http: HttpClient) {}

  getData(): Observable<MyData> {
    return this.http.get(this.apiUrl).pipe(
      map((response: any) => {
        return response as MyData;
      })
    );
  }

  getItemDetails(): Observable<ItemDetails> {
    return this.http.get(this.itemUrl).pipe(
      map((response: any) => {
        return response as ItemDetails;
      })
    );
  }

  getSpriteDataFromURL(url:string): Observable<any> {
    return this.http.get(url).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  // getSprite(url:string): Observable<any> {
  //   return this.http.get(url).pipe(
  //     map((response: any) => {
  //       return response;
  //     })
  //   );
  // }

  getSprite(url: string): Observable<Blob> {
    return this.http.get(url, { responseType: 'blob' });
  }
}

export interface MyData {
  count: number;
  next: string;
  previous: string;
  results: MyDataItem[];
}

export interface MyDataItem{
  name: string;
  url: string;
}

export interface ItemDetails{
  spriteBaseUrl: string;
  abilities: Ability[];
}

export interface Ability{
  ability:any;
}