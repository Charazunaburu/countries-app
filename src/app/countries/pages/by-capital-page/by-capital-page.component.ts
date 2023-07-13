import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {

  // @ViewChild('TxtSearchInput')
  // txtSearch!:ElementRef<HTMLInputElement>;

  searchByCapital(term:string):void{
    console.log('Buscando por Capital')
    console.log(term);
  }

}
