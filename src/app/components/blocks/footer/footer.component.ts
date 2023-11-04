import { Component, HostListener, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { GlobalService } from "../../../services/global.service";
import { Location } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  currenturl: any;
  toggle_landing: boolean = false;
  constructor(public globalService: GlobalService, private location:Location, private router: Router) {
  }

  ngOnInit(): void {
    this.router.events
    .pipe(filter((event: any) => event instanceof NavigationEnd))
    .subscribe((event: any) => {
      this.currenturl = this.location.path();
      this.currenturl = this.currenturl.split('/')[2];
      // console.log('footer ========= ', this.currenturl);
    });
  }
 

  scrollHeight: number = 0;
  @HostListener('window:scroll', ['$event'])
  track(event: any) {
    this.scrollHeight = window.pageYOffset;
  }

  gotoTop() {
    setTimeout(() => {
      if (typeof window !== 'undefined') {
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    }, 200);
  }

  openLink(link: string) {
    if (typeof window !== 'undefined') {
      window.open(link, "_blank");
    }
  }


}
