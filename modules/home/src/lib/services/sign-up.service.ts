import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface CustomerData {
  firstName: string;
  lastName: string;
  email: string;
}

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
