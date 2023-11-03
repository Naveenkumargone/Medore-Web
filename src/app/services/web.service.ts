import { Injectable, Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, catchError, throwError } from 'rxjs';

const headers = new HttpHeaders({
  'Accept': 'application/json, text/plain, */*'
});
@Injectable({
  providedIn: 'root',
})
export class WebService {
  apiBase: string = environment.apiUrl;
  private metaData = 'assets/json/metadata.json'
  // private urlBase = 'http://localhost:4000/'
  private urlBase = 'https://medore.ae/'
  
  constructor(private httpClient: HttpClient) {}

  public registerInterest(formData: any) {
    return this.httpClient.post<any>(
      this.apiBase + 'register/enquiry',
      formData,
      {}
    );
  }

  public getSettings() {
    return this.httpClient.get<any>(this.apiBase + 'settings', {});
  }

  public getLanguageConstants( language: number) {
    return this.httpClient.get<any>(this.apiBase + 'language/constants/' + language, {});
  }

  public getLanguageData( language: string) {
    return this.httpClient.get<any>(this.apiBase + 'language/constant/values/' + language, {});
  }

  public getPrivacyPolicy( language: number) {
    return this.httpClient.get<any>(this.apiBase + 'privacy/policy/' + language, {});
  }

  public getExecutives() {
    return this.httpClient.get<any>(this.apiBase + 'executives', {});
  }

  // ============== meta data json ================
  getDomainsData(): Observable<any[]> {
    return this.httpClient.get<any[]>( this.urlBase + this.metaData, { headers: headers })
    .pipe(
      catchError(error => {
        console.error('Error occurred while fetching metadata:', error);
        return throwError(error);
      })
    );
  }

}
