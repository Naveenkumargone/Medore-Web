import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutusComponent } from './components/aboutus/aboutus.component';
import { AminityComponent } from './components/aminity/aminity.component';
import { ApartmentComponent } from './components/apartment/apartment.component';
import { CommunityComponent } from './components/community/community.component';
import { FinishesComponent } from './components/finishes/finishes.component';
import { HomeComponent } from './components/home/home.component';
import { SmartlivingComponent } from './components/smartliving/smartliving.component';
import { TowerComponent } from './components/tower/tower.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { Page404Component } from './components/page404/page404.component';
import { BlogComponent } from './components/blog/blog.component';
import { LandingPageComponent } from './components/blocks/landing-page/landing-page.component';
import { LandingHeaderComponent } from './components/blocks/landing-header/landing-header.component';

const routes: Routes = [
  { 
    path: ':language', component: HomeComponent, data: { 
      title: 'ME DO RE Residential Tower - Luxury Properties in Dubai, UAE' 
  } 
},
  {
    path: ':language/aboutus', component: AboutusComponent, data: {
      title: 'Luxury Properties and Apartments for Sale in Dubai - ME DO RE'
    }
  },
  { 
    path: ':language/amenities', component: AminityComponent, data: { 
      title: 'Top Amenities in Dubai Properties & Apartments - ME DO RE' 
    } 
  },
  { 
    path: ':language/apartments', component: ApartmentComponent, data: { 
      title: 'Luxury Apartments for Sale in Dubai, UAE - ME DO RE' 
    } 
  },
  { 
    path: ':language/finishes', component: FinishesComponent, data: { 
      title: 'Luxury Finishes and Materials | Properties in Dubai - ME DO RE' 
    } 
  },
  { 
    path: ':language/jlt-community', component: CommunityComponent, data: { 
      title: 'Jumeirah Lake Towers, Dubai | Apartments in JLT - ME DO RE' 
    } 
  },
  {
    path: ':language/smart-living', component: SmartlivingComponent, data: {
      title: 'Smart Living Properties | Luxury Properties in Dubai - ME DO RE'
    }
  },
  { 
    path: ':language/tower', component: TowerComponent, data: { 
      title: 'Luxury Apartments for sale in ME DO RE Tower - Dubai, UAE' 
    } 
  },
  { 
    path: ':language/privacy-policy', component: PrivacyPolicyComponent, data: { 
      title: 'Privacy Policy' 
    } 
  },
  { 
    path: ':language/blog', component: BlogComponent, data: {
      title: 'Blogs Page'
    }
  },
  {
    path: ':language/landing-pg',
    component: LandingPageComponent
  },
  {
    path: ':language/landing-pg-header',
    component: LandingHeaderComponent
  },
  { 
    path: 'page/404', component: Page404Component, data: { 
      title: 'Not Found 404' 
    } 
  },
  { path: '**', redirectTo: '/en' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
