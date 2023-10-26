import { Component, Input } from '@angular/core';

@Component({
  selector: 'title-component',
  template: `
    <div>
      <div [ngStyle]="titleStyles" [ngClass]="titleClasses" [attr.id]="titleId">
        {{ text }}
      </div>
    </div>
  `,
  styles: [
    `
      .title {
        font-family: 'Libre Baskerville, serif';
      }
      .ellipsed {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    `,
  ],
})
export class TitleComponent {
  @Input() text: string = 'Default Title';
  @Input() size: string = 'medium';
  @Input() color: string = '';
  @Input() bold: boolean = false;
  @Input() ellipsed: boolean = false;

  titleSizes = {
    small: '0.75rem',
    medium: '1.25rem',
    large: '4rem',
  };

  get titleStyles() {
    return {
      'font-weight': this.bold ? 'bolder' : 'bold',
      'font-family': 'Libre Baskerville, serif',
      'font-size': this.titleSizes[this.size as 'small' || 'medium' || 'large'] || this.titleSizes.medium,
      color: this.color || '#232323',
    };
  }

  get titleClasses() {
    return {
      title: true,
      ellipsed: this.ellipsed,
    };
  }

  get titleId() {
    return 'title';
  }
}
