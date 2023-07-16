import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent {

  // @ViewChild('TxtSearchInput')
  // txtSearchInput!:ElementRef<HTMLInputElement>;

  @Output()
  public onValue = new EventEmitter<string>()

  @Input()
  public placeHolder:string = '';

  getSearchValue(value:string){
    // this.onValue.emit(this.txtSearchInput.nativeElement.value);
    this.onValue.emit(value);
  }


}
