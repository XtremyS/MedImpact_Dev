import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageProfileDoctorComponent } from './manage-profile-doctor.component';

describe('ManageProfileDoctorComponent', () => {
  let component: ManageProfileDoctorComponent;
  let fixture: ComponentFixture<ManageProfileDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageProfileDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageProfileDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
