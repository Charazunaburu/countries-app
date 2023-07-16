import { Component, ViewChild } from '@angular/core';
import { countriesService } from '../../services/countries.service';
import { Observable } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {
  public countries:Country[] = [];

  constructor( private countriesService:countriesService ){
  }

  searchByCapital(term:string):void{
    this.countriesService.serchCapital(term).subscribe( (countries) => {
      this.countries = countries
      console.log(countries[0].name.common);
    })
  }

}
