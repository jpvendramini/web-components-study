import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'book-item-component',
  template: `
    <div class="bookItem" (click)="handleClick.emit()">
      <img [src]="imagePath" style="width: 119px; height: 160px;" />
      <div class="bookItemTextContainer">
        <title-component [text]="title || 'Default Title'" size="small" [bold]="true" [ellipsed]="true"></title-component>
        <label-component [text]="label || 'Default Label'" size="small" [bold]="true" [ellipsed]="true" [color]="'#7E7E7E'"></label-component>
      </div>
    </div>
  `,
})
export class BookItemComponent {
  @Input() title: string = "";
  @Input() label: string = "";
  @Input() path: string = "";
  @Output() handleClick: EventEmitter<void> = new EventEmitter<void>();

  get imagePath() {
    return this.path || 'https://www.dbooks.org/img/books/5635349929s.jpg';
  }
}
