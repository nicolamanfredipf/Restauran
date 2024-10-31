import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ServiceComponent } from './components/pages/service/service.component';
import { ServiceCardsComponent } from './components/sections/service-cards/service-cards.component';
import { PagesHeaderComponent } from './components/pages-header/pages-header.component';
import { AboutImagesComponent } from './components/sections/about-images/about-images.component';
import { AboutUsComponent } from './components/sections/about-us/about-us.component';
import { TeamComponent } from './components/pages/team/team.component';
import { TeamMembersComponent } from './components/sections/team-members/team-members.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    ServiceCardsComponent,
    PagesHeaderComponent,
    AboutImagesComponent,
    AboutUsComponent,
    TeamComponent,
    TeamMembersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
