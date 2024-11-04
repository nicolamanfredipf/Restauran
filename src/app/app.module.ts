import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
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
import { ContactComponent } from './components/pages/contact/contact.component';
import { SubsectionsHeadersComponent } from './components/subsections-headers/subsections-headers.component';
import { ContactEmailsComponent } from './components/sections/contact-emails/contact-emails.component';
import { ContactFormComponent } from './components/sections/contact-form/contact-form.component';
import { BookingComponent } from './components/pages/booking/booking.component';
import { BookingVideoComponent } from './components/sections/booking-video/booking-video.component';
import { BookingReservationComponent } from './components/sections/booking-reservation/booking-reservation.component';

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
    MenuCardsComponent,
    ContactComponent,
    SubsectionsHeadersComponent,
    ContactEmailsComponent,
    ContactFormComponent,
    BookingComponent,
    BookingVideoComponent,
    BookingReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
