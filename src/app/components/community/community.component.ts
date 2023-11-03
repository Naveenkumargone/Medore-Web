import { Component } from '@angular/core';
import { NgxAnimatedCounterParams } from '@bugsplat/ngx-animated-counter';
import { GlobalService } from "../../services/global.service";

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css'],
})
export class CommunityComponent {
  public hotels: NgxAnimatedCounterParams = {
    start: 0,
    end: 460,
    interval: 10,
    increment: 1,
  };
  public fitness: NgxAnimatedCounterParams = {
    start: 0,
    end: 324,
    interval: 10,
    increment: 1,
  };
  public retails: NgxAnimatedCounterParams = {
    start: 0,
    end: 297,
    interval: 10,
    increment: 1,
  };
  public educations: NgxAnimatedCounterParams = {
    start: 0,
    end: 179,
    interval: 10,
    increment: 1,
  };

  constructor(public globalService: GlobalService) {
  }
}
