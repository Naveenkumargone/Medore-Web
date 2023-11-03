import { Component } from '@angular/core';
import { WebService } from '../../services/web.service';
import { GlobalService } from '../../services/global.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent {
  ceo: any;
  executives: any = [];
  constructor(
    public globalService: GlobalService,
    public webService: WebService
  ) {}

  ngOnInit(){
    this.getExecutives();
  }

  getExecutives(){
    this.webService.getExecutives().subscribe(
      (repsonseData: any) => {
        this.ceo = repsonseData['data']['ceo'];
        this.executives = repsonseData['data']['data'];
      },
      (err: HttpErrorResponse) => {
        this.globalService.hideSpinner();
      }
    );
  }
}
