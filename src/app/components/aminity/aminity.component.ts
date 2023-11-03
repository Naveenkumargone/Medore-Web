import { Component, ViewChild } from '@angular/core';
import { GlobalService } from "../../services/global.service";

@Component({
  selector: 'app-aminity',
  templateUrl: './aminity.component.html',
  styleUrls: ['./aminity.component.css']
})
export class AminityComponent {
  @ViewChild('golfSlick') golfSlick: any;
  @ViewChild('swimmingPoolSlick') swimmingPoolSlick: any;
  @ViewChild('billiardsSlick') billiardsSlick: any;
  @ViewChild('tableTennisSlick') tableTennisSlick: any;
  @ViewChild('gymSlick') gymSlick: any;
  @ViewChild('yogaSlick') yogaSlick: any;
  @ViewChild('steamSlick') steamSlick: any;
  @ViewChild('saunaSlick') saunaSlick: any;
  @ViewChild('multiPurposeHallSlick') multiPurposeHallSlick: any;

  golfSlickCurrentSlide: number = 0;
  swimmingPoolSlickCurrentSlide: number = 0;
  billiardsSlickCurrentSlide: number = 0;
  tableTennisSlickCurrentSlide: number = 0;
  gymSlickCurrentSlide: number = 0;
  yogaSlickCurrentSlide: number = 0;
  steamSlickCurrentSlide: number = 0;
  saunaSlickCurrentSlide: number = 0;
  multiPurposeHallSlickCurrentSlide: number = 0;
  focusedSlider: string = '';
  intervalId: any;

  constructor(public globalService: GlobalService) {
  }
  
  slickInit(e:any) {
    //console.log('slick initialized');
  }

  mouseEnterSlick(e: any) {
    console.log(e.srcElement.id)
    this.focusedSlider = e.srcElement.id;
    // if(e.srcElement.id = 'golfSlick'){
    //   if(this.golfslides.length > 1){
    //       this.autoPlaySLides(this.focusedSlider)
    //   }
    // } else if(e.srcElement.id = 'swimmingPoolSlick'){
    //   if(this.swimmingpoolslides.length > 1){
    //       this.autoPlaySLides(this.focusedSlider)
    //   }  
    // } else if(e.srcElement.id = 'billiardsSlick'){
    //   if(this.billiardsslides.length > 1){
    //       this.autoPlaySLides(this.focusedSlider)
    //   }
    // } else if(e.srcElement.id = 'tableTennisSlick'){
    //   if(this.tableTennisslides.length > 1){
    //       this.autoPlaySLides(this.focusedSlider)
    //   }
    // } else if(e.srcElement.id = 'gymSlick'){
    //   if(this.gymslides.length > 1){
    //       this.autoPlaySLides(this.focusedSlider)
    //   }
    // } else if(e.srcElement.id = 'yogaSlick'){
    //   if(this.yogaslides.length > 1){
    //       this.autoPlaySLides(this.focusedSlider)
    //   }
    // } else if(e.srcElement.id = 'steamSlick'){
    //   if(this.steamslides.length > 1){
    //       this.autoPlaySLides(this.focusedSlider)
    //   }
    // } else if(e.srcElement.id = 'saunaSlick'){
    //   if(this.saunaslides.length > 1){
    //       this.autoPlaySLides(this.focusedSlider)
    //   }
    // } else if(e.srcElement.id = 'multiPurposeHallSlick'){
    //   if(this.multiPurposeHallslides.length > 1){
    //       this.autoPlaySLides(this.focusedSlider)
    //   }
    // }
  }

  autoPlaySLides(element: string){
    console.log(element)
    if (typeof window !== 'undefined') {
      this.intervalId = window.setInterval(() => {
        this.gotoNext(element);
      }, 200);
    }
  }

  mouseLeaveSlick(e: any) {
    this.focusedSlider = '';
    clearInterval(this.intervalId) 
  }
  
  afterChange(e:any) {
    if(e.event.target.id == 'golfSlick'){
      this.golfSlickCurrentSlide = e.currentSlide;
    }else if(e.event.target.id == 'swimmingPoolSlick'){
      this.swimmingPoolSlickCurrentSlide = e.currentSlide;
    }else if(e.event.target.id == 'billiardsSlick'){
      this.billiardsSlickCurrentSlide = e.currentSlide;
    }else if(e.event.target.id == 'tableTennisSlick'){
      this.tableTennisSlickCurrentSlide = e.currentSlide;
    }else if(e.event.target.id == 'gymSlick'){
      this.gymSlickCurrentSlide = e.currentSlide;
    }else if(e.event.target.id == 'yogaSlick'){
      this.yogaSlickCurrentSlide = e.currentSlide;
    }else if(e.event.target.id == 'steamSlick'){
      this.steamSlickCurrentSlide = e.currentSlide;
    }else if(e.event.target.id == 'saunaSlick'){
      this.saunaSlickCurrentSlide = e.currentSlide;
    }else if(e.event.target.id == 'multiPurposeHallSlick'){
      this.multiPurposeHallSlickCurrentSlide = e.currentSlide;
    }
  }
  
  beforeChange(e:any) {
    //console.log('beforeChange');
  }

  gotoNext(carouselId: string){
    if(carouselId == 'golfSlick'){
      this.golfSlick.slickGoTo(this.golfSlickCurrentSlide + 1);
    }else if(carouselId == 'swimmingPoolSlick'){
      this.swimmingPoolSlick.slickGoTo(this.swimmingPoolSlickCurrentSlide + 1);
    }else if(carouselId == 'billiardsSlick'){
      this.billiardsSlick.slickGoTo(this.billiardsSlickCurrentSlide + 1);
    }else if(carouselId == 'tableTennisSlick'){
      this.tableTennisSlick.slickGoTo(this.tableTennisSlickCurrentSlide + 1);
    }else if(carouselId == 'gymSlick'){
      this.gymSlick.slickGoTo(this.gymSlickCurrentSlide + 1);
    }else if(carouselId == 'yogaSlick'){
      this.yogaSlick.slickGoTo(this.yogaSlickCurrentSlide + 1);
    }else if(carouselId == 'steamSlick'){
      this.steamSlick.slickGoTo(this.steamSlickCurrentSlide + 1);
    }else if(carouselId == 'saunaSlick'){
      this.saunaSlick.slickGoTo(this.saunaSlickCurrentSlide + 1);
    }else if(carouselId == 'multiPurposeHallSlick'){
      this.multiPurposeHallSlick.slickGoTo(this.multiPurposeHallSlickCurrentSlide + 1);
    }
  }

  gotoPrevious(carouselId: string){
    if(carouselId == 'golfSlick'){
      this.golfSlick.slickGoTo(this.golfSlickCurrentSlide - 1);
    }else if(carouselId == 'swimmingPoolSlick'){
      this.swimmingPoolSlick.slickGoTo(this.swimmingPoolSlickCurrentSlide - 1);
    }else if(carouselId == 'billiardsSlick'){
      this.billiardsSlick.slickGoTo(this.billiardsSlickCurrentSlide - 1);
    }else if(carouselId == 'tableTennisSlick'){
      this.tableTennisSlick.slickGoTo(this.tableTennisSlickCurrentSlide - 1);
    }else if(carouselId == 'gymSlick'){
      this.gymSlick.slickGoTo(this.gymSlickCurrentSlide - 1);
    }else if(carouselId == 'yogaSlick'){
      this.yogaSlick.slickGoTo(this.yogaSlickCurrentSlide - 1);
    }else if(carouselId == 'steamSlick'){
      this.steamSlick.slickGoTo(this.steamSlickCurrentSlide - 1);
    }else if(carouselId == 'saunaSlick'){
      this.saunaSlick.slickGoTo(this.saunaSlickCurrentSlide - 1);
    }else if(carouselId == 'multiPurposeHallSlick'){
      this.multiPurposeHallSlick.slickGoTo(this.multiPurposeHallSlickCurrentSlide - 1);
    }
  }

}
