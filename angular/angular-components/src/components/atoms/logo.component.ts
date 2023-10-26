import { Component, Input } from '@angular/core';

@Component({
  selector: 'logo-component',
  template: `
    <img [src]="imgPath" alt="Logo icon" style="width: 43.224px; height: 69.333px" />
  `,
})
export class LogoComponent {
  @Input() selected: boolean = false;

  get imgPath() {
    return this.selected
      ? '../assets/icons/bookshelf-selected-logo.svg'
      : '../assets/icons/bookshelf-unselected-logo.svg';
  }
}
