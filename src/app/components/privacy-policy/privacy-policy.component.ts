import { Component } from '@angular/core';
import { WebService } from '../../services/web.service';
import { GlobalService } from '../../services/global.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css']
})
export class PrivacyPolicyComponent {
  pageContent: any;
  constructor(
    public globalService: GlobalService,
    public webService: WebService, private router: Router, private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => this.getPrivacyPolicy(params['language']));
  }

  getPrivacyPolicy(language: any){
    this.webService.getPrivacyPolicy(language).subscribe(
      (repsonseData: any) => {
        this.pageContent = repsonseData['data']
        console.log(this.pageContent)
      },
      (err: HttpErrorResponse) => {
        this.globalService.hideSpinner();
      }
    );
  }
}
