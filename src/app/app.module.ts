import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 // material section


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamComponent } from './components/team/team.component';
import { MeetingsComponent } from './components/meetings/meetings.component';
// import { WeddingsComponent } from './components/weddings/weddings.component';
import { GroupBookingsComponent } from './components/group-bookings/group-bookings.component';
import { SpecialsAndPackagesComponent } from './components/specials-and-packages/specials-and-packages.component';
import { ServicesComponent } from './components/services/services.component';
import { PackagesComponent } from './components/packages/packages.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AdminComponent } from './components/admin/admin.component';
// import { HeaderNavbarComponent } from './components/header-navbar/header-navbar.component';
import { componentFactoryName } from '@angular/compiler';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatTableModule, MatDividerModule, MatSnackBarModule, MatMenuModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';


import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatDatepickerModule  } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReservationComponent } from './components/reservation/reservation.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MatRadioModule } from '@angular/material/radio';
import { ResortService } from './services/resort.service';
// import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GalleryComponent } from './components/gallery/gallery.component';



const appRoutes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'team', component: TeamComponent},
  {path: 'meetings&events', component: MeetingsComponent},//was meeting
  // {path: 'weddings', component: WeddingsComponent},
  {path: 'rooms&suites', component: GroupBookingsComponent},//was group-boooking
  {path: 'specials-and-packages', component: SpecialsAndPackagesComponent},
  // {path: 'services', component: ServicesComponent}, //is cancled
  {path: 'spa', component: PackagesComponent},//was packages
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'login', component: LoginComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'reservation', component: ReservationComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    MeetingsComponent,
    // WeddingsComponent,
    GroupBookingsComponent,
    SpecialsAndPackagesComponent,
    // ServicesComponent,
    PackagesComponent,
    ContactUsComponent,
    AdminComponent,
    // HeaderNavbarComponent,
    LoginComponent,
    RegisterComponent,
    MainNavComponent,
    FooterComponent,
    ReservationComponent,
    PageNotFoundComponent,
    HomepageComponent,
    GalleryComponent
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
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatMomentDateModule,
    MatDatepickerModule,
    HttpClientModule,
    MatRadioModule,
    MatFormFieldModule, 
    MatOptionModule, 
    MatSelectModule, 
    MatTableModule, 
    MatDividerModule, 
    MatSnackBarModule, 
    MatMenuModule,
    // Ng2CarouselamosModule
    NgbModule
  ],
  providers: [ResortService],
  bootstrap: [AppComponent]
})
export class AppModule { }
