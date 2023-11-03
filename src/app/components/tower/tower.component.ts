import { Component, ViewChild } from '@angular/core';
import { GlobalService } from "../../services/global.service";

@Component({
  selector: 'app-tower',
  templateUrl: './tower.component.html',
  styleUrls: ['./tower.component.css']
})
export class TowerComponent {

  @ViewChild('mainEntranceSlick') mainEntranceSlick: any;
  @ViewChild('mainLobbySlick') mainLobbySlick: any;
  @ViewChild('liftLobbySlick') liftLobbySlick: any;

  mainEntranceSlickCurrentSlide: number = 0;
  mainLobbySlickCurrentSlide: number = 0;
  liftLobbySlickCurrentSlide: number = 0;
  skyBgHovered: boolean = false;
  
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 4500,
    infinite: true,
    adaptiveHeight: false,
    focusOnSelect: true,
    pauseOnHover: true,
    loop: true,
    accessibility: true
  };

  constructor(public globalService: GlobalService) {
    
  }

  showSkyBG(){
    this.skyBgHovered = true;
  }

  hideSkyBG(){
    this.skyBgHovered = false;
  }

  slickInit(e:any) {
    console.log('slick initialized');
  }

  afterChange(e:any) {
    if(e.event.target.id == 'mainEntranceSlick'){
      this.mainEntranceSlickCurrentSlide = e.currentSlide;
    }else if(e.event.target.id == 'mainLobbySlick'){
      this.mainLobbySlickCurrentSlide = e.currentSlide;
    }else if(e.event.target.id == 'liftLobbySlick'){
      this.liftLobbySlickCurrentSlide = e.currentSlide;
    }
  }
  
  beforeChange(e:any) {
    console.log('beforeChange');
  }

  gotoNext(carouselId: string){
    if(carouselId == 'mainEntranceSlick'){
      this.mainEntranceSlick.slickGoTo(this.mainEntranceSlickCurrentSlide + 1);
    }else if(carouselId == 'mainLobbySlick'){
      this.mainLobbySlick.slickGoTo(this.mainLobbySlickCurrentSlide + 1);
    }else if(carouselId == 'liftLobbySlick'){
      this.liftLobbySlick.slickGoTo(this.liftLobbySlickCurrentSlide + 1);
    }
  }

  gotoPrevious(carouselId: string){
    if(carouselId == 'mainEntranceSlick'){
      this.mainEntranceSlick.slickGoTo(this.mainEntranceSlickCurrentSlide - 1);
    }else if(carouselId == 'mainLobbySlick'){
      this.mainLobbySlick.slickGoTo(this.mainLobbySlickCurrentSlide - 1);
    }else if(carouselId == 'liftLobbySlick'){
      this.liftLobbySlick.slickGoTo(this.liftLobbySlickCurrentSlide - 1);
    }
  }


}
