import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule, Meta } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgxAnimatedCounterModule } from '@bugsplat/ngx-animated-counter';
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/blocks/header/header.component';
import { FooterComponent } from './components/blocks/footer/footer.component';
import { TowerComponent } from './components/tower/tower.component';
import { AminityComponent } from './components/aminity/aminity.component';
import { ApartmentComponent } from './components/apartment/apartment.component';
import { CommunityComponent } from './components/community/community.component';
import { FinishesComponent } from './components/finishes/finishes.component';
import { SmartlivingComponent } from './components/smartliving/smartliving.component';
import { PageMenuComponent } from './components/blocks/page-menu/page-menu.component';
import { RegisterFormComponent } from './components/blocks/register-form/register-form.component';
import { MobileRegBtnComponent } from './components/blocks/mobile-reg-btn/mobile-reg-btn.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Page404Component } from './components/page404/page404.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BlogComponent } from './components/blog/blog.component';
import { LandingPageComponent } from './components/blocks/landing-page/landing-page.component';
import { LandingHeaderComponent } from './components/blocks/landing-header/landing-header.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    TowerComponent,
    AminityComponent,
    ApartmentComponent,
    CommunityComponent,
    FinishesComponent,
    SmartlivingComponent,
    PageMenuComponent,
    RegisterFormComponent,
    MobileRegBtnComponent,
    PrivacyPolicyComponent,
    Page404Component,
    AboutusComponent,
    BlogComponent,
    LandingPageComponent,
    LandingHeaderComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SlickCarouselModule,
    NgxAnimatedCounterModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(),
    NgbModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }, Meta],
  bootstrap: [AppComponent]
})
export class AppModule { }
