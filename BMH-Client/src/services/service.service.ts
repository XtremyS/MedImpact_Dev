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

  //! BOOKING DOCTOR APPOINTMENT API
  UrlBookAppointment = '/book_appointment';

  //! LOGOUT APIS
  LogOutUrl = '/logout';

  //! REGISTRATION FUNCTIONS
  RegisterDoctor(Data: any): Observable<any> {
    return this.http.post(this.UrlDoctor, Data, {
      observe: 'response',
    });
  }

  RegisterPatient(Data: any): Observable<any> {
    return this.http.post(this.UrlPatients, Data, {
      observe: 'response',
    });
  }
  RegisterLabs(Data: any): Observable<any> {
    return this.http.post(this.UrlLabs, Data, {
      observe: 'response',
    });
  }
  RegisterPharmacy(Data: any): Observable<any> {
    return this.http.post(this.UrlPharmacy, Data, {
      observe: 'response',
    });
  }

  //! LOGIN API FUNCTIONS
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

  BookDocAppointment(Data: any): Observable<any> {
    return this.http.patch(this.UrlBookAppointment, Data, {
      observe: 'response',
    });
  }

  //! GET API FUNCTIONS
  GetDocData(): Observable<any> {
    return this.http.get(this.GetDoctorUrl, {
      observe: 'response',
    });
  }
  GetLabData(): Observable<any> {
    return this.http.get(this.GetLabDataUrl, {
      observe: 'response',
    });
  }

  //! LOGOUT FUNCTION
  LogOut(Data: any): Observable<any> {
    return this.http.get(this.LogOutUrl, Data);
  }
}
