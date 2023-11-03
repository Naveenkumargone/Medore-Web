import { Component } from '@angular/core';
import { GlobalService } from "../../services/global.service";
@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.css']
})
export class Page404Component {
  constructor(public globalService: GlobalService) {
    this.globalService.hideSpinner();
  }
}
