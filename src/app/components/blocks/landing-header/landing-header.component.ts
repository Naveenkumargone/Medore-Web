import { Component, OnInit, Renderer2 } from '@angular/core';
import { GlobalService } from "../../../services/global.service";
import { WebService } from '../../../services/web.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-landing-header',
  templateUrl: './landing-header.component.html',
  styleUrls: ['./landing-header.component.css']
})
export class LandingHeaderComponent {
  constructor(private router: Router, public globalService: GlobalService, public webService: WebService, private renderer: Renderer2) {
  }

  changeLanguage(language: any){
    if( this.globalService.activeLanguage != language.short_lable){
      this.globalService.showSpinner();
      this.globalService.activeLanguage = language.short_lable;
      this.gotoPage();
    }
  }

  
  gotoPage(){
    this.globalService.languages.forEach((language: any, index: number) => {
      if( language.short_lable == this.globalService.activeLanguage){
        var replaceString = this.globalService.currentUrl.split("/")[1];
        var replaceWith = language.short_lable;
        var link = this.globalService.currentUrl.replace(replaceString, replaceWith);
        console.log(link)
        this.router.navigate([link]);
        //window.location.reload()
      }
    });
  }
}
