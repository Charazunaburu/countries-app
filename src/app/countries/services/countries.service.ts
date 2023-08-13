import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, map } from 'rxjs';
import { Country } from '../interfaces/country';
import Swal from 'sweetalert2';


@Injectable({providedIn: 'root'})
export class countriesService {
  private apiUrl:string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  searchContryByAlphaCode(code:string):Observable<Country | null>{
    const url:string = `${this.apiUrl}/alpha/${ code }`;
    return this.http.get<Country[]>(url)
    .pipe(
      map(countries => countries.length > 0 ? countries[0]: null),
      catchError((error) => {
        return of(null);
      }),
      );
  }


  serchCountries(term:string, apiSeach:string):Observable<Country[]>{
    const url:string = `${this.apiUrl}/${ apiSeach }/${ term }`;
    return this.http.get<Country[]>(url)
    .pipe(
      catchError((error) => {
        console.log(error);
        return of([]);
      }),
      // map((x)=>{
      //   x.forEach(element => {
      //       console.log(element);
      //       element.name.common = element.name.common + ' | ' +element.capital;
      //       return element;
      //   });
      //   return x;
      // })
      );
  }
  // serchCapital(term:string):Observable<Country[]>{
  //   const url:string = `${this.apiUrl}/capital/${ term }`;
  //   return this.http.get<Country[]>(url)
  //   .pipe(
  //     catchError((error) => {
  //       console.log(error);
  //       return of([]);
  //     }),
  //     // map((x)=>{
  //     //   x.forEach(element => {
  //     //       console.log(element);
  //     //       element.name.common = element.name.common + ' | ' +element.capital;
  //     //       return element;
  //     //   });
  //     //   return x;
  //     // })
  //     );
  // }
  // serchRegion(term:string):Observable<Country[]>{
  //   const url:string = `${this.apiUrl}/region/${ term }`;
  //   return this.http.get<Country[]>(url)
  //   .pipe(
  //     catchError((error) => {
  //       console.log(error);
  //       return of([]);
  //     }),
  //     // map((x)=>{
  //     //   x.forEach(element => {
  //     //       console.log(element);
  //     //       element.name.common = element.name.common + ' | ' +element.capital;
  //     //       return element;
  //     //   });
  //     //   return x;
  //     // })
  //     );
  // }
  // serchCountry(term:string):Observable<Country[]>{
  //   const url:string = `${this.apiUrl}/name/${ term }`;
  //   return this.http.get<Country[]>(url)
  //   .pipe(
  //     catchError((error) => {
  //       console.log(error);
  //       return of([]);
  //     }),
  //     // map((x)=>{
  //     //   x.forEach(element => {
  //     //       console.log(element);
  //     //       element.name.common = element.name.common + ' | ' +element.capital;
  //     //       return element;
  //     //   });
  //     //   return x;
  //     // })
  //     );
  // }


}
