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
  GetDoctorUrl = '/doc-list';
  GetLabDataUrl = '/lab-list';

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
    return this.http.post(this.UrlDocLogin, Data, {
      observe: 'response',
    });
  }

  PatientLogin(Data: any): Observable<any> {
    return this.http.post(this.UrlPatientsLogin, Data, {
      observe: 'response',
    });
  }

  LabLogin(Data: any): Observable<any> {
    return this.http.post(this.UrlLabLogin, Data, {
      observe: 'response',
    });
  }
  PharmacyLogin(Data: any): Observable<any> {
    return this.http.post(this.UrlPharmacyLogin, Data, {
      observe: 'response',
    });
  }

  //! GET FUNCTIONS
  GetDocData(): Observable<any> {
    return this.http.get(this.GetDoctorUrl);
  }
  GetLabData(): Observable<any> {
    return this.http.get(this.GetLabDataUrl);
  }

  //! LOGOUT FUNCTION
  LogOut(Data: any): Observable<any> {
    return this.http.get(this.LogOutUrl, Data);
  }
}
