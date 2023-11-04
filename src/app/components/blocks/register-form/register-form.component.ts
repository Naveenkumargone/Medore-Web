import { Inject } from '@angular/core';
import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { WebService } from '../../../services/web.service';
import { GlobalService } from '../../../services/global.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {

  formSubmitted: boolean = false;
  interestForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]], //, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
    phone: ['', Validators.required], //[Validators.required, Validators.pattern("- +()0-9]{10,12}")]
    interest: ['', Validators.required],
    iama: ['', Validators.required],
  });

  formData: any = {
    email: "",
    name: "",
    phone: "",
    interest: "",
    iama: ""
  };
  isRegistered: boolean = false;
  currentUrl: any;
  constructor(public formBuilder: FormBuilder, public webService: WebService, public globalService: GlobalService,  
    @Inject(DOCUMENT) private document: Document, private router: Router) {

  }

  ngOnInit() {
    this.currentUrl = this.router.url.split('/')[2];
    console.log('...............', this.currentUrl);
    
    if (typeof window !== 'undefined') {
      localStorage.removeItem('medore_registration_status');
      if ((localStorage.getItem('medore_registration_status') != '') && (localStorage.getItem('medore_registration_status') != null)) {
        this.isRegistered = true;
      }
    }
  }

  onSubmit() {
    this.formSubmitted = true;
    if (this.interestForm.invalid) {
      return;
    } else {
      this.globalService.showSpinner();
      this.webService.registerInterest(this.formData).subscribe(
        (repsonseData: any) => {
          this.resetForm();
          if (typeof window !== 'undefined') {
            localStorage.setItem(
              'medore_registration_status', '1'
            );
          }
          this.isRegistered = true;
          this.globalService.hideSpinner();
          this.globalService.showSuccess(repsonseData.message);
        },
        (err: HttpErrorResponse) => {
          console.log(err)
          this.globalService.hideSpinner();
          // this.loading = false;
          // this.commonService.hideLoader();
          // if (err.status == 401) {
          //   this.commonService.showNotification('error', err.error.message.message[0]);
          // } else if (err.status == 403) {
          //   this.commonService.showNotification('success', err.error.errors.error);
          // } else {
          //   this.commonService.showNotification('error', 'Oops Some internal Server Error');
          // }
        }
      );
    }
  }

  resetForm() {
    this.formSubmitted = false;
    this.formData = {
      email: "",
      name: "",
      phone: "",
      interest: ""
    };
  }

  downloadFile(fileUrl: string) {
    let link = this.document.createElement('a');
    link.setAttribute('type', 'hidden');
    link.href = fileUrl;
    link.download = 'Me Do Re Brochure';
    this.document.body.appendChild(link);
    link.click();
    link.remove();
  }
}
