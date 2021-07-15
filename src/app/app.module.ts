import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageContentComponent } from './page-content/page-content.component';
import { TopSectionComponent } from './page-content/top-section/top-section.component';
import { MiddleSectionComponent } from './page-content/middle-section/middle-section.component';
import { BottomSectionComponent } from './page-content/bottom-section/bottom-section.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageContentComponent,
    TopSectionComponent,
    MiddleSectionComponent,
    BottomSectionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    MatMenuModule,
    MatExpansionModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
