import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Service {
  constructor(private http: HttpClient) {}
  //! REGISTRATION APIS
  UrlDoctor = '/api/v1/doctors-registration';
  UrlPatients = '/api/v1/patients-registration';
  UrlLabs = '/api/v1/labs-registration';
  UrlPharmacy = '/api/v1/pharmacy-registration';

  //! LOGIN APIS
  UrlDocLogin = '/api/v1/login-doctor';
  UrlPatientsLogin = '/api/v1/login-patient';
  UrlLabLogin = '/api/v1/login-lab';
  UrlPharmacyLogin = '/api/v1/login-pharmacy';

  //! GET APIS
  GetDoctorUrl = '/api/v1/doc-list';
  GetLabDataUrl = '/api/v1/lab-list';

  //! BOOKING DOCTOR APPOINTMENT API
  UrlBookAppointment = '/api/v1/book_appointment';

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
