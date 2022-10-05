import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  AuthToken = localStorage.getItem('11510199114101116');
  UserDetails = localStorage.getItem('99105112104101114116101120116');

  //! SETTING USER DATA IN LOCAL STORAGE
  SetUserDataLocal(UserData: any) {
    let Data = JSON.stringify(UserData);
    localStorage.setItem('99105112104101114116101120116', Data);
  }
  GetUserDataLocal() {
    let Data = JSON.parse(this.UserDetails!);
    return Data;
  }

  //! MANAGING AUTHTOKEN IN LOCAL STORAGE
  SetLocalAuthToken(Token: any) {
    localStorage.setItem('11510199114101116', Token);
  }
  GetLocalAuthToken() {
    return this.AuthToken ? true : false;
  }
  RemoveLocalAuthToken() {
    localStorage.removeItem('11510199114101116');
    localStorage.removeItem('99105112104101114116101120116');
  }
}
