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
import { PopularComponent } from './sections/popular/popular.component';
import { PictureCardComponent } from './components/picture-card/picture-card.component';
import { GalleryComponent } from './sections/gallery/gallery.component';
import { TeamComponent } from './sections/team/team.component';
import { ContactComponent } from './sections/contact/contact.component';
import { FormComponent } from './sections/contact/components/form/form.component';
import { InputComponent } from './components/input/input.component';
import { FooterComponent } from './sections/footer/footer.component';
import { IconCardComponent } from './components/icon-card/icon-card.component';
import { ContentComponent } from './components/content/content.component';
import { ContentCardComponent } from './components/content-card/content-card.component';

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
    CardComponent,
    PopularComponent,
    PictureCardComponent,
    GalleryComponent,
    TeamComponent,
    ContactComponent,
    FormComponent,
    InputComponent,
    FooterComponent,
    IconCardComponent,
    ContentComponent,
    ContentCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
