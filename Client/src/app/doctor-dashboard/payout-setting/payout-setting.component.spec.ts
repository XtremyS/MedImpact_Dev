import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayoutSettingComponent } from './payout-setting.component';

describe('PayoutSettingComponent', () => {
  let component: PayoutSettingComponent;
  let fixture: ComponentFixture<PayoutSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayoutSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayoutSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
