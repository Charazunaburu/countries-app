import { Component } from '@angular/core';
import { countriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {
  constructor(private countriesService:countriesService ){
  }
  public countries:Country[] = [];

  searchByRegion(region:string):void{
    Swal.fire({
      title: 'Cargando...',
      allowEscapeKey: false,
      allowOutsideClick: false,
      showConfirmButton: false,
      didOpen: () => {
          Swal.showLoading();
        }
    });
    this.countriesService.serchCountries(region,'region').subscribe((countries)=>{
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
        return
      }
    });
  }
}
