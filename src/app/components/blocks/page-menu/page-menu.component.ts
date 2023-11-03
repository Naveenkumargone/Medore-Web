import { Component, ViewChild } from '@angular/core';
import { GlobalService } from '../../../services/global.service';

@Component({
  selector: 'app-page-menu',
  templateUrl: './page-menu.component.html',
  styleUrls: ['./page-menu.component.css'],
})
export class PageMenuComponent {
  @ViewChild('menuSlick') menuSlick: any;
  currentMenuSlide: number = 0;

  constructor(public globalService: GlobalService) {}

  ngOnInit() {
  }
  slickInit(e: any) {
    console.log(e);
  }

  afterChange(e: any) {
    this.currentMenuSlide = e.currentSlide;
  }

  beforeChange(e: any) {
    console.log(e);
  }

  gotoNextmenu() {
    this.menuSlick.slickGoTo(this.currentMenuSlide + 1);
  }

  gotoPreviousmenu() {
    this.menuSlick.slickGoTo(this.currentMenuSlide - 1);
  }

  clickMenu(slide: any) {
    console.log(slide);
  }
}
