import { Component, HostListener } from '@angular/core';
import { GlobalService } from "../../../services/global.service";
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(public globalService: GlobalService) {
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
