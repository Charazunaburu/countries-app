import { Component } from '@angular/core';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {

  searchByRegion(region:string):void{
    console.log(region);
    console.log('Buscando por region');
  }
}
