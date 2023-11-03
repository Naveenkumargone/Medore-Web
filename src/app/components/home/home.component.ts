import { Component, HostListener, AfterViewInit, ElementRef } from '@angular/core';
import { GlobalService } from '../../services/global.service';
declare var $: any;
declare var anime: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  homeScroll: number = 0;
  ml4: any = {};
  addClass: boolean = false;
  soundStatus: boolean = false;
  playStatus: boolean = true;
  @HostListener('window:scroll', ['$event'])
  track(event: any) {
    this.homeScroll = window.pageYOffset;
    // if(!this.globalService.isMobileorTablet){
    //   if (this.homeScroll > 130 && !this.globalService.loading && !this.addClass ) {
    //     this.addAnimation();
    //    }
    // }else{
    //   if (!this.globalService.loading && !this.addClass ) {
    //     this.addAnimation();
    //    }
    // }
    
  }
  constructor(public globalService: GlobalService, private el: ElementRef) {}

  ngOnInit(){
    setTimeout(() => {
      if (!this.globalService.loading && !this.addClass ) {
        this.addAnimation();
       }
    }, 2000);
  }

  addAnimation() {
      this.addClass = true;
      const dom: HTMLElement = this.el.nativeElement;
    let textWrapper = dom.querySelectorAll('.ml4');
    let ml4: any = {};
    ml4.opacityIn = [0,1];
    ml4.scaleIn = [0.2, 1];
    ml4.scaleOut = 3;
    ml4.durationIn = 1200;
    ml4.durationOut = 400;
    ml4.delay = 3000;
    anime
      .timeline({ loop: true })
      .add({
        targets: '.ml4 .letters-1',
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn
      }).add({
        targets: '.ml4 .letters-1',
        opacity: 0,
        scale: ml4.scaleOut,
        duration: ml4.durationOut,
        easing: "easeInExpo",
        delay: ml4.delay
      }).add({
        targets: '.ml4 .letters-2',
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn
      }).add({
        targets: '.ml4 .letters-2',
        opacity: 0,
        scale: ml4.scaleOut,
        duration: ml4.durationOut,
        easing: "easeInExpo",
        delay: ml4.delay
      }).add({
        targets: '.ml4 .letters-3',
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn
      }).add({
        targets: '.ml4 .letters-3',
        opacity: 0,
        scale: ml4.scaleOut,
        duration: ml4.durationOut,
        easing: "easeInExpo",
        delay: ml4.delay
      }).add({
        targets: '.ml4',
        opacity: 0,
        duration: 500,
        delay: 500
      });
  }

  changeMute() {
    this.soundStatus = !this.soundStatus;
    if ($('#bgvideo').prop('muted')) {
      $('#bgvideo').prop('muted', false);
    } else {
      $('#bgvideo').prop('muted', true);
    }
  }

  playPause() {
    if (this.playStatus) {
      this.playStatus = false;
      $('#bgvideo').trigger('pause');
    } else {
      this.playStatus = true;
      $('#bgvideo').trigger('play');
    }
  }
}
