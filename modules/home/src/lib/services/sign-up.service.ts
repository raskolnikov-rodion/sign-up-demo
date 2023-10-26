import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { CustomerData } from './models';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  private readonly baseUrl = '/api/signup';
  private readonly http = inject(HttpClient);

  signUpCustomer(data: CustomerData) {
    return this.http.post(this.baseUrl, { data });
  }
}
