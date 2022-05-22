import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './sections/header/header.component';
import { LinkComponent } from './components/link/link.component';
import { HomeComponent } from './sections/home/home.component';
import { TitleComponent } from './components/title/title.component';
import { ParagraphComponent } from './components/paragraph/paragraph.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LinkComponent,
    HomeComponent,
    TitleComponent,
    ParagraphComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
