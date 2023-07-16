import { Component } from '@angular/core';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {

  searchByCountry(country:string):void{
    console.log(country);
    console.log('Buscando por pais');
  }
}
