import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamComponent } from './components/team/team.component';
import { MeetingsComponent } from './components/meetings/meetings.component';
import { WeddingsComponent } from './components/weddings/weddings.component';
import { GroupBookingsComponent } from './components/group-bookings/group-bookings.component';
import { SpecialsAndPackagesComponent } from './components/specials-and-packages/specials-and-packages.component';
import { ServicesComponent } from './components/services/services.component';
import { PackagesComponent } from './components/packages/packages.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AdminComponent } from './components/admin/admin.component';
import { HeaderNavbarComponent } from './components/header-navbar/header-navbar.component';
import { componentFactoryName } from '@angular/compiler';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { FooterComponent } from './components/footer/footer.component';

const appRoutes: Routes = [
  {path:' ', component:AppComponent},
  {path:'team', component:TeamComponent},
  {path:'meetings', component:MeetingsComponent},
  {path:'weddings', component:WeddingsComponent},
  {path:'group-booking', component:GroupBookingsComponent},
  {path:'specials-and-packages', component:SpecialsAndPackagesComponent},
  {path:'services', component:ServicesComponent},
  {path:'packages', component:PackagesComponent},
  {path:'contact-us', component:ContactUsComponent},
  {path:'admin', component:AdminComponent},
  {path:'login', component:LoginComponent},
  {path:'footer', component:FooterComponent},
  {path:'register', component:RegisterComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    MeetingsComponent,
    WeddingsComponent,
    GroupBookingsComponent,
    SpecialsAndPackagesComponent,
    ServicesComponent,
    PackagesComponent,
    ContactUsComponent,
    AdminComponent,
    HeaderNavbarComponent,
    LoginComponent,
    RegisterComponent,
    MainNavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
