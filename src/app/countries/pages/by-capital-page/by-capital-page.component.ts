import { Component, ViewChild } from '@angular/core';
import { countriesService } from '../../services/countries.service';
import { Observable } from 'rxjs';
import { Country } from '../../interfaces/country';
import Swal from 'sweetalert2';

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
      Swal.fire({
        title: 'Cargando...',
        allowEscapeKey: false,
        allowOutsideClick: false,
        showConfirmButton: false,
        didOpen: () => {
            Swal.showLoading();
        }
    });
    this.countriesService.serchCountries(term, 'capital').subscribe( (countries) => {
      Swal.close();
      this.countries = countries;
      if(this.countries.length === 0){
        Swal.fire({
          icon: 'warning',
          title: 'No se encontro ningun pais.',
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        });
        return;
      }
    }, (error)=>{
      console.log(error);
    });
  }

}
