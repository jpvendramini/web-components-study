import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LabelComponent } from '../components/atoms/label.component';
import { TitleComponent } from '../components/atoms/title.component';
import { LogoComponent } from '../components/atoms/logo.component';
import { BookItemComponent } from '../components/molecules/book-item.component';
import { SearchInputComponent } from '../components/molecules/search-input.component';
import { SidebarComponent } from '../components/molecules/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    LabelComponent,
    TitleComponent,
    LogoComponent,
    BookItemComponent,
    SearchInputComponent,
    SidebarComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
