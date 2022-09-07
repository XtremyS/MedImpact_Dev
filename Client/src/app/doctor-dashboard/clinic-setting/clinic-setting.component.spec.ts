import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicSettingComponent } from './clinic-setting.component';

describe('ClinicSettingComponent', () => {
  let component: ClinicSettingComponent;
  let fixture: ComponentFixture<ClinicSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
