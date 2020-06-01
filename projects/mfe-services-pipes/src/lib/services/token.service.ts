
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private displaySub = new Subject();
  public display = this.displaySub.asObservable();

  constructor(private http: HttpClient) { }

  getToken() {
    this.http.get('http://local.spectrum-poc.net:4299/token', { withCredentials: true })
      .subscribe(
        data => this.displaySub.next(data),
        error => this.displaySub.next(`${error.message}`),
      );
  }

  getApi() {
    this.http.get('http://local.spectrum-poc.net:4299/api', { withCredentials: true })
      .subscribe(
        data => this.displaySub.next(data),
        error => this.displaySub.next(`${error.message}`),
      );
  }

  clearResult() {
    this.displaySub.next('');
  }
}
