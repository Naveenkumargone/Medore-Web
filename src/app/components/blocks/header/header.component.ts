import { Component, OnInit, Renderer2 } from '@angular/core';
import { GlobalService } from "../../../services/global.service";
import { WebService } from '../../../services/web.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { Location } from '@angular/common';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currenturl: any;
  constructor(private router: Router, public globalService: GlobalService, public webService: WebService, private renderer: Renderer2,
    private location: Location, private route: ActivatedRoute,) {
  }
  ngOnInit(): void {
    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.currenturl = this.location.path();
        this.currenturl = this.currenturl.split('/')[2];
        // console.log('========= header', this.currenturl);
      });
  }

  changeLanguage(language: any) {
    if (this.globalService.activeLanguage != language.short_lable) {
      this.globalService.showSpinner();
      this.globalService.activeLanguage = language.short_lable;
      this.gotoPage();
    }
  }

  gotoPage() {
    this.globalService.languages.forEach((language: any, index: number) => {
      if (language.short_lable == this.globalService.activeLanguage) {
        var replaceString = this.globalService.currentUrl.split("/")[1];
        var replaceWith = language.short_lable;
        var link = this.globalService.currentUrl.replace(replaceString, replaceWith);
        this.router.navigate([link]);
        console.log(replaceString, replaceWith, link)
      }
    });
  }
}
