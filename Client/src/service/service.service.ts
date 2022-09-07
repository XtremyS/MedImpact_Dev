import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Service {
  constructor(private http: HttpClient) {}

  UrlDoctor = '/doctors-registration';
  UrlPatients = '/patients-registration';
  UrlLabs = '/labs-registration';

  UrlDocLogin = '/login-doctor';
  UrlPatientsLogin = '/login-patient';
  UrlLabLogin = '/login-lab';

  //REGISTRATION FUNCTIONS
  async RegisterDoctor(Data: any) {
    try {
      return this.http.post(this.UrlDoctor, Data);
    } catch (error) {
      console.log(error.message);
    }
  }

  async RegisterPatient(Data: any) {
    try {
      return this.http.post(this.UrlPatients, Data);
    } catch (error) {
      console.log(error.message);
    }
  }
  async RegisterLabs(Data: any) {
    try {
      return this.http.post(this.UrlLabs, Data);
    } catch (error) {
      console.log(error.message);
    }
  }

  //LOGIN FUNCTIONS
  async DoctorLogin(Data: any) {
    try {
      return this.http.post(this.UrlDocLogin, Data);
    } catch (error) {
      console.log(error.message);
    }
  }
  //LOGIN FUNCTIONS
  async PatientLogin(Data: any) {
    try {
      return this.http.post(this.UrlPatientsLogin, Data);
    } catch (error) {
      console.log(error.message);
    }
  }
  //LOGIN FUNCTIONS
  async LabLogin(Data: any) {
    try {
      return this.http.post(this.UrlLabLogin, Data);
    } catch (error) {
      console.log(error.message);
    }
  }
}
