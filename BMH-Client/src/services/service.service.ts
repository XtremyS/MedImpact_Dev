import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Service {
  constructor(private http: HttpClient) {}
  //! REGISTRATION APIS
  UrlDoctor = '/doctors-registration';
  UrlPatients = '/patients-registration';
  UrlLabs = '/labs-registration';
  UrlPharmacy = '/pharmacy-registration';

  //! LOGIN APIS
  UrlDocLogin = '/login-doctor';
  UrlPatientsLogin = '/login-patient';
  UrlLabLogin = '/login-lab';
  UrlPharmacyLogin = '/login-pharmacy';

  //! GET APIS
  UrlLabData = '/lab-list';

  //! FILE UPLOAD APIS
  UrlFileUpload = '/upload-img';

  //! LOGOUT APIS
  LogOutUrl = '/logout';

  //! REGISTRATION FUNCTIONS
  RegisterDoctor(Data: any): Observable<any> {
    return this.http.post(this.UrlDoctor, Data);
  }

  RegisterPatient(Data: any): Observable<any> {
    return this.http.post(this.UrlPatients, Data);
  }
  RegisterLabs(Data: any): Observable<any> {
    return this.http.post(this.UrlLabs, Data);
  }
  RegisterPharmacy(Data: any): Observable<any> {
    return this.http.post(this.UrlPharmacy, Data);
  }

  //! LOGIN FUNCTIONS
  DoctorLogin(Data: any): Observable<any> {
    return this.http.post(this.UrlDocLogin, Data);
  }

  PatientLogin(Data: any): Observable<any> {
    return this.http.post(this.UrlPatientsLogin, Data);
  }

  LabLogin(Data: any): Observable<any> {
    return this.http.post(this.UrlLabLogin, Data);
  }
  PharmacyLogin(Data: any): Observable<any> {
    return this.http.post(this.UrlPharmacyLogin, Data);
  }

  GetLabData(): Observable<any> {
    return this.http.get(this.UrlLabData);
  }

  //! IMAGE UPLOAD API
  FileUpload(Data: any): Observable<any> {
    return this.http.post(this.UrlFileUpload, Data, { responseType: 'text' });
  }

  //! LOGOUT FUNCTION
  LogOut(Data: any): Observable<any> {
    return this.http.get(this.LogOutUrl, Data);
  }
}
