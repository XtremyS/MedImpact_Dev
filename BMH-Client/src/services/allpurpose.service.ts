import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AllPurposeService {
  DoctorsDetailsSubject = new Subject();
  constructor() {}
}
