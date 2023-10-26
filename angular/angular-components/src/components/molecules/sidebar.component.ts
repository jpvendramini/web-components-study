import { Component, Input } from '@angular/core';

@Component({
  selector: 'sidebar-component',
  template: `
    <div class="sidebar">
      <logo-component [selected]="!!bookInfo"></logo-component>
      <title-component text="Book Shelf" size="large" color="white"></title-component>
      <div *ngIf="bookInfo" style="width: 15rem; height: 13rem; text-align: left; display: flex; flex-direction: column; gap: 1rem; overflow-y: scroll;">
        <div class="bookDescription">
          <label-component text="Title:" size="medium" color="white" [bold]="true"></label-component>
          <label-component [text]="bookInfo.title" size="medium" color="white"></label-component>
        </div>
        <div class="bookDescription">
          <label-component text="Subtitle:" size="medium" color="white" [bold]="true"></label-component>
          <label-component [text]="bookInfo.subtitle" size="medium" color="white"></label-component>
        </div>
        <div class="bookDescription">
          <label-component text="Authors:" size="medium" color="white" [bold]="true"></label-component>
          <label-component [text]="bookInfo.authors" size="medium" color="white"></label-component>
        </div>
        <div class="bookDescription">
          <label-component text="Description:" size="medium" color="white" [bold]="true"></label-component>
          <label-component [text]="bookInfo.description" size="medium" color="white"></label-component>
        </div>
        <div class="bookDescription">
          <label-component text="Year:" size="medium" color="white" [bold]="true"></label-component>
          <label-component [text]="bookInfo.year" size="medium" color="white"></label-component>
        </div>
        <div>
          <label-component text="Pages:" size="medium" color="white" [bold]="true"></label-component>
          <label-component [text]="bookInfo.pages" size="medium" color="white"></label-component>
        </div>
      </div>
      <a *ngIf="bookInfo" class="button" [href]="bookInfo.download" target="_blank">Download</a>
      <div *ngIf="!bookInfo">
        <label-component text="(Select a book to see its specifications here!)" size="small" color="white"></label-component>
      </div>
    </div>
  `,
})
export class SidebarComponent {
  @Input() bookInfo: any;
}
