import { Component, HostListener, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { GlobalService } from "../../../services/global.service";
import { Location } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnChanges {
  currenturl: any;
  toggle_landing: boolean = false;
  constructor(public globalService: GlobalService, private location:Location, private router: Router) {
  }

  ngOnInit(): void {
    this.currenturl = this.location.path().split('/')[2];
    if (this.currenturl == 'landing-pg'){
      this.toggle_landing = true;
    }
    let url = this.router.url.split('/')[2];
    console.log('=========footer', this.router.url);
  }
  ngOnChanges(changes: SimpleChanges): void {
    // this.currenturl = this.location.path().split('/')[2];
    // if (this.currenturl == 'landing-pg'){
    //   this.toggle_landing = true;
    // }
    console.log('=========footer===========', this.toggle_landing);
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
