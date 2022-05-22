import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './sections/header/header.component';
import { LinkComponent } from './components/link/link.component';
import { HomeComponent } from './sections/home/home.component';
import { TitleComponent } from './components/title/title.component';
import { ParagraphComponent } from './components/paragraph/paragraph.component';
import { ButtonComponent } from './components/button/button.component';
import { AboutComponent } from './sections/about/about.component';
import { SectionComponent } from './components/section/section.component';
import { FacilityComponent } from './sections/facility/facility.component';
import { ExamplePipe } from './pipes/example.pipe';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LinkComponent,
    HomeComponent,
    TitleComponent,
    ParagraphComponent,
    ButtonComponent,
    AboutComponent,
    SectionComponent,
    FacilityComponent,
    ExamplePipe,
    CardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
