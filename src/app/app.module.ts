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
import { SectionsHeadersComponent } from './components/sections-headers/sections-headers.component';
import { TeamCardsComponent } from './components/sections/team-cards/team-cards.component';
import { MenuComponent } from './components/pages/menu/menu.component';
import { MenuPopularComponent } from './components/sections/menu-popular/menu-popular.component';
import { HttpClientModule } from  '@angular/common/http';
import { MenuNavbarComponent } from './components/sections/menu-navbar/menu-navbar.component';
import { MenuCardsComponent } from './components/sections/menu-cards/menu-cards.component';

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
    TeamMembersComponent,
    SectionsHeadersComponent,
    TeamCardsComponent,
    MenuComponent,
    MenuPopularComponent,
    MenuNavbarComponent,
    MenuCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
