import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  AuthToken = localStorage.getItem('11510199114101116');
  constructor() {}
  SetLocalAuthToken(Token: any) {
    localStorage.setItem('11510199114101116', Token);
  }
  GetLocalAuthToken() {
    return this.AuthToken ? true : false;
  }
  RemoveLocalAuthToken() {
    localStorage.removeItem('11510199114101116');
  }
}
