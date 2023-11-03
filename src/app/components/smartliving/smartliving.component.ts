import { Component } from '@angular/core';
import { GlobalService } from "../../services/global.service";
declare var $: any;

@Component({
  selector: 'app-smartliving',
  templateUrl: './smartliving.component.html',
  styleUrls: ['./smartliving.component.css']
})
export class SmartlivingComponent {
  soundStatus: boolean = false;
  playStatus: boolean = true;

  constructor(public globalService: GlobalService) {
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
