import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent {

  @ViewChild('TxtSearchInput')
  txtSearchInput!:ElementRef<HTMLInputElement>;

  @Output()
  onValue:EventEmitter<string> = new EventEmitter()

  @Input()
  public placeHolder:string = '';

  getSearchValue(){
    this.onValue.emit(this.txtSearchInput.nativeElement.value);
  }


}
