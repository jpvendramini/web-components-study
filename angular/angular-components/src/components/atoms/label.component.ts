import { Component, Input } from '@angular/core';

@Component({
  selector: 'label-component',
  template: `
    <div>
      <div [ngStyle]="labelStyles" [ngClass]="labelClasses" [attr.id]="labelId">
        {{ text }}
      </div>
    </div>
  `,
  styles: [
    `
      .label {
        font-family: 'Open Sans', sans-serif;
      }
      .ellipsed {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    `,
  ],
})
export class LabelComponent {
  @Input() text: string = 'Default Title';
  @Input() size: string = 'medium';
  @Input() color: string = '';
  @Input() bold: boolean = false;
  @Input() ellipsed: boolean = false;

  labelSizes = {
    small: '0.625rem',
    medium: '0.875rem',
    large: '4rem',
  };

  get labelStyles() {
    return {
      'font-weight': this.bold ? 'bold' : '',
      'font-family': 'Open Sans, sans-serif',
      'font-size':
        this.labelSizes[(this?.size as 'small') || 'medium' || 'large'] ||
        this.labelSizes.medium,
      color: this.color || '#232323',
    };
  }

  get labelClasses() {
    return {
      label: true,
      ellipsed: this.ellipsed,
    };
  }

  get labelId() {
    return 'label';
  }
}
