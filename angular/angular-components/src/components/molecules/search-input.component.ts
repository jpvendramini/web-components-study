import {
  Component,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'search-input-component',
  template: `
    <div class="searchInputContainer">
      <img
        src="../assets/icons/search.svg"
        alt="Search icon"
        style="margin-left: 0.5rem; width: 18px; height: 17px;"
      />
      <input
        type="text"
        class="searchInput"
        placeholder="Search a book by its name or author"
        #inputRef
        [value]="inputValue"
        (input)="handleInput('')"
      />
    </div>
  `,
})
export class SearchInputComponent implements AfterViewInit {
  @Input() value: string = "";
  @Output() onChange: EventEmitter<string> = new EventEmitter<string>();

  inputValue: string = '';

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    // Set the initial value of inputValue when the component is initialized
    this.inputValue = this.value || '';
  }

  handleInput(value: string) {
    this.inputValue = value;

    // Emit the value when the input changes
    this.onChange.emit(value);
  }
}
