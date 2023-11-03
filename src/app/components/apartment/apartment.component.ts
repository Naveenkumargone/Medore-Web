import { Component, ViewChild } from '@angular/core';
import { GlobalService } from "../../services/global.service";
declare var $: any;

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.css'],
})
export class ApartmentComponent {
  @ViewChild('livingRoomSlick') livingRoomSlick: any;
  @ViewChild('bedRoomSlick') bedRoomSlick: any;
  @ViewChild('kitchenRoomSlick') kitchenRoomSlick: any;
  @ViewChild('bathRoomSlick') bathRoomSlick: any;
  @ViewChild('typicalStudioSlick') typicalStudioSlick: any;
  @ViewChild('bathRoomSlick2') bathRoomSlick2: any;

  livingRoomSlickCurrentSlide: number = 0;
  bedRoomSlickCurrentSlide: number = 0;
  kitchenRoomSlickCurrentSlide: number = 0;
  bathRoomSlickCurrentSlide: number = 0;
  typicalStudioSlickCurrentSlide: number = 0;
  bathRoomSlick2CurrentSlide: number = 0;
  activePlan: string = 'Studio';
  intervalId: any;
  focusedSlider: string = '';

  slideConfig = {
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
  };
  blinkingText: string = "Looking for<br>hard-to-find<br>livable spacious<br>apartments?/Look No<br>Further/Ready apartments with<br>upto 3 years post<br> handover payment plan<br>options";
  blinkingTextsArray: any = [];
  constructor(public globalService: GlobalService) {
  }
  ngOnInit(){
    this.blinkingTextsArray = this.blinkingText.split("/");
  }
  slickInit(e: any) {
    //console.log('slick initialized');
  }

  afterChange(e: any) {
    if (e.event.target.id == 'livingRoomSlick') {
      this.livingRoomSlickCurrentSlide = e.currentSlide;
    } else if (e.event.target.id == 'bedRoomSlick') {
      this.bedRoomSlickCurrentSlide = e.currentSlide;
    } else if (e.event.target.id == 'kitchenRoomSlick') {
      this.kitchenRoomSlickCurrentSlide = e.currentSlide;
    } else if (e.event.target.id == 'bathRoomSlick') {
      this.bathRoomSlickCurrentSlide = e.currentSlide;
    } else if (e.event.target.id == 'typicalStudioSlick') {
      this.typicalStudioSlickCurrentSlide = e.currentSlide;
    } else if (e.event.target.id == 'bathRoomSlick2') {
      this.bathRoomSlick2CurrentSlide = e.currentSlide;
    }
  }

  mouseEnterSlick(e: any) {
    this.focusedSlider = e.srcElement.id;
  }

  autoPlaySLides(element: string){
    console.log(element)
    this.intervalId = window.setInterval(() => {
      this.gotoNext(element);
    }, 2000);
  }

  mouseLeaveSlick(e: any) {
    this.focusedSlider = '';
    clearInterval(this.intervalId) 
  }

  beforeChange(e: any) {
    //console.log('beforeChange');
  }

  gotoNext(carouselId: string) {
    if (carouselId == 'livingRoomSlick') {
      this.livingRoomSlick.slickGoTo(this.livingRoomSlickCurrentSlide + 1);
    } else if (carouselId == 'bedRoomSlick') {
      this.bedRoomSlick.slickGoTo(this.bedRoomSlickCurrentSlide + 1);
    } else if (carouselId == 'kitchenRoomSlick') {
      this.kitchenRoomSlick.slickGoTo(this.kitchenRoomSlickCurrentSlide + 1);
    } else if (carouselId == 'bathRoomSlick') {
      this.bathRoomSlick.slickGoTo(this.bathRoomSlickCurrentSlide + 1);
    } else if (carouselId == 'typicalStudioSlick') {
      this.typicalStudioSlick.slickGoTo(
        this.typicalStudioSlickCurrentSlide + 1
      );
    } else if (carouselId == 'bathRoomSlick2') {
      this.bathRoomSlick2.slickGoTo(this.bathRoomSlick2CurrentSlide + 1);
    }
  }

  gotoPrevious(carouselId: string) {
    if (carouselId == 'livingRoomSlick') {
      this.livingRoomSlick.slickGoTo(this.livingRoomSlickCurrentSlide - 1);
    } else if (carouselId == 'bedRoomSlick') {
      this.bedRoomSlick.slickGoTo(this.bedRoomSlickCurrentSlide - 1);
    } else if (carouselId == 'kitchenRoomSlick') {
      this.kitchenRoomSlick.slickGoTo(this.kitchenRoomSlickCurrentSlide - 1);
    } else if (carouselId == 'bathRoomSlick') {
      this.bathRoomSlick.slickGoTo(this.bathRoomSlickCurrentSlide - 1);
    } else if (carouselId == 'typicalStudioSlick') {
      this.typicalStudioSlick.slickGoTo(
        this.typicalStudioSlickCurrentSlide - 1
      );
    } else if (carouselId == 'bathRoomSlick2') {
      this.bathRoomSlick2.slickGoTo(this.bathRoomSlick2CurrentSlide - 1);
    }
  }

  showPlan(plan: string) {
    if (this.activePlan != plan) {
      this.activePlan = plan;
    }
  }
}
