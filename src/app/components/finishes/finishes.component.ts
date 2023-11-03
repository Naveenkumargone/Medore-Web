import { Component } from '@angular/core';
import { GlobalService } from "../../services/global.service";

@Component({
  selector: 'app-finishes',
  templateUrl: './finishes.component.html',
  styleUrls: ['./finishes.component.css']
})
export class FinishesComponent {
  constructor(public globalService: GlobalService) {
  }
}
