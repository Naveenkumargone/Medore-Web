import { Component, HostListener, Inject, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import {
  Router,
  ActivatedRoute,
  NavigationStart,
  NavigationEnd,
} from '@angular/router';
import { Title, DomSanitizer, Meta } from '@angular/platform-browser';
import { GlobalService } from './services/global.service';
import { WebService } from './services/web.service';
import { filter } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { DeviceDetectorService } from 'ngx-device-detector';
import { DOCUMENT, Location } from '@angular/common';
declare let AOS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Me Do Re';
  currentURL: any;
  constructor(
    public router: Router,
    public route: ActivatedRoute,
    private titleService: Title,
    public globalService: GlobalService,
    public webService: WebService,
    private renderer: Renderer2,
    private deviceService: DeviceDetectorService,
    private metaService: Meta,
    private location: Location,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.router.events.pipe(filter((event) => event instanceof NavigationStart)).subscribe((value) => {
      this.globalService.showSpinner();
      this.globalService.isMobileorTablet = this.deviceService.isMobile();
      console.log(this.globalService.isMobileorTablet)
    });

    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        let currentTitle = this.getTitle(
          this.router.routerState,
          this.router.routerState.root
        );
        // console.log('...........................', currentTitle + ' - ' + this.title);

        this.titleService.setTitle(currentTitle);
        this.globalService.previousUrl = this.globalService.currentUrl;
        this.globalService.currentUrl = event.url;
        var array = this.globalService.currentUrl.split("/");
        var language = array[1];
        if (language == '') {
          language = 'en';
        }
        this.checkSettings(language);
      }
    });
  }

  checkSettings(language: any) {
    if (language == 'ar') {
      this.renderer.addClass(this.document.body, "arabic");
      this.globalService.pageMenuslickConfig.rtl = true;
      this.globalService.slickSlideConfig.rtl = true;
    } else {
      this.globalService.pageMenuslickConfig.rtl = false;
      this.globalService.slickSlideConfig.rtl = false;
    }
    this.globalService.activeLanguage = language;
    this.getSettings();


  }

  setLanguageInfo() {
    this.globalService.languages.forEach((language: any, index: number) => {
      if (language.short_lable == this.globalService.activeLanguage) {
        this.globalService.activeLanguageInfo = language;
        if (language.short_lable == 'ar') {
          this.renderer.addClass(this.document.body, "arabic");
          this.globalService.pageMenuslickConfig.rtl = true;
          this.globalService.slickSlideConfig.rtl = true;
        } else {
          this.renderer.removeClass(this.document.body, "arabic");
          this.globalService.pageMenuslickConfig.rtl = false;
          this.globalService.slickSlideConfig.rtl = false;
        }
      }
    });
  }

  sortMenus() {
    if (this.globalService.currentUrl != '/' && this.globalService.currentUrl != '') {
      this.globalService.menus.forEach((menu: any, index: number) => {
        if (this.globalService.currentUrl != '/' && this.globalService.currentUrl != '') {
          if (this.globalService.currentUrl.includes(menu.link)) {
            this.shuffleMenu(this.globalService.menus, index)
          }
        }
      });
    }
  }

  getSettings() {
    this.webService.getSettings().subscribe(
      (repsonseData: any) => {
        console.log(this.globalService.activeLanguage)
        this.globalService.settingsInfo = repsonseData['data']['data'];
        this.globalService.languages = repsonseData['data']['languages'];
        this.globalService.banners = repsonseData['data']['banners'];
        this.globalService.carousels = repsonseData['data']['carousels'];
        var actualMenus = repsonseData['data']['menus'];
        this.globalService.menus = JSON.parse(JSON.stringify(actualMenus));
        this.globalService.pageMenus = actualMenus;
        this.setLanguageInfo();
        this.sortMenus();
        var found = false;
        let languageData = this.globalService.languages.find((i: any) => i.short_lable === this.globalService.activeLanguage)
        if (languageData) {
          this.renderer.removeClass(this.document.body, "page404");
          this.getLanguageLabels();
        } else {
          this.renderer.addClass(this.document.body, "page404");
          if (this.globalService.currentUrl !== '/page/404') {
            this.router.navigate(['/page/404']);
          }
          this.globalService.hideSpinner();
        }
      },
      (err: HttpErrorResponse) => {
        this.globalService.hideSpinner();
      }
    );
  }

  shuffleMenu(arr: any, x: number) {
    let n = arr.length;
    x = x % n;
    let first_x_elements = arr.slice(0, x);
    let remaining_elements = arr.slice(x, n);
    arr = [...remaining_elements, ...first_x_elements];
    this.globalService.pageMenus = arr;
  }

  getLanguageLabels() {
    this.webService.getLanguageData(this.globalService.activeLanguage).subscribe(
      (repsonseData: any) => {
        console.log(repsonseData)
        this.globalService.languageLabels = repsonseData['data'];
        this.globalService.hideSpinner();
        this.currentURL = this.location.path().split('/');
        if (this.currentURL?.length > 2) {
          this.currentURL = this.currentURL[2];
        }
        else {
          this.currentURL = this.currentURL[1];
        }
        console.log('=================', this.currentURL);

        this.getMetaTagsData(this.currentURL);
      },
      (err: HttpErrorResponse) => {
        this.globalService.hideSpinner();
      }
    );
  }

  ngOnInit() {
    AOS.init();
    this.getMetaTagsData(this.currentURL);

  }

  onActivate(event: any) {
    setTimeout(() => {
      if (typeof window !== 'undefined') {
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      }
    }, 1000);
  }

  getTitle(state: any, parent: any) {
    let data: any = [];
    if (parent && parent.snapshot.data && parent.snapshot.data.title) {
      data.push(parent.snapshot.data.title);
    }
    if (state && parent) {
      data.push(...this.getTitle(state, state.firstChild(parent)));
    }
    return data;
  }

  getMetaTagsData(data: any) {
    this.webService.getDomainsData().subscribe(resp => {
      if (data === 'en' || data === 'ch' || data === 'ar' || data === 'ru') {
        data = 'en';
      }
      this.globalService.meta_tagsData = resp.find(item => item.title === data);
      this.updateTags();
    })
  }

  updateTags() {
    this.metaService.updateTag({ name: 'description', content: this.globalService?.meta_tagsData?.desc });
    // this.metaService.updateTag({ property: 'keywords', content: this.globalService.meta_tagsData.keywords });
    this.metaService.updateTag({ name: 'author', content: this.globalService.meta_tagsData?.author });
  }
}
