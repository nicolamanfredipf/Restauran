import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ServiceComponent } from './components/pages/service/service.component';
import { TeamComponent } from './components/pages/team/team.component';
import { MenuComponent } from './components/pages/menu/menu.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { BookingComponent } from './components/pages/booking/booking.component';
import { TestimonialComponent } from './components/pages/testimonial/testimonial.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: "home", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "service", component: ServiceComponent},
  {path: "team", component: TeamComponent},
  {path: "menu", component: MenuComponent},
  {path: "contact", component: ContactComponent},
  {path: "booking", component: BookingComponent},
  {path: "testimonial", component: TestimonialComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
