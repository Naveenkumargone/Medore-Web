import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  loading: boolean = false;
  S3BucketUrl: string = environment.S3BucketUrl;
  currentUrl: string = '';
  previousUrl: string = '';
  settingsInfo: any = {};
  languageLabels: any = {};
  languages: any = [];
  banners: any = [];
  menus: any = [];
  pageMenus: any = [];
  carousels: any = [];
  hotels: any;
  fitness: any;
  retails: any;
  educations: any;
  activeLanguage: any;
  activeLanguageInfo: any = {};
  isMobileorTablet: boolean = false;
  meta_tagsData: any;

  slickSlideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 2000,
    infinite: true,
    adaptiveHeight: false,
    focusOnSelect: true,
    loop: true,
    accessibility: true,
    rtl: false
  };

  pageMenuslickConfig: any = {
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    infinite: false,
    loop: false,
    rtl: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1008,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  constructor(
    private scroller: ViewportScroller,
    public spinner: NgxSpinnerService,
    public toastr: ToastrService
  ) {}

  gotoRegister() {
    this.scroller.scrollToAnchor('contact');
  }

  showSpinner() {
    this.loading = true;
    this.spinner.show();
  }

  hideSpinner() {
    this.loading = false;
    this.spinner.hide();
  }

  showSuccess(message: string) {
    this.toastr.success(message, 'Success');
  }

}
