import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { countriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import Swal from 'sweetalert2';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit {
  constructor(
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private countriesService:countriesService
    ){}
    public country?:Country;

  ngOnInit(): void {
      Swal.fire({
        title: 'Cargando...',
        allowEscapeKey: false,
        allowOutsideClick: false,
        showConfirmButton: false,
        didOpen: () => {
            Swal.showLoading();
          }
      });
      this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.countriesService.searchContryByAlphaCode(id))
      )
      .subscribe(country => {
        Swal.close();
        if(!country){
          return this.router.navigateByUrl('');
        }
        Swal.fire({
          icon: 'success',
          title: 'Tenemos un pais.',
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        });
        return this.country = country;
      })
  }

}
