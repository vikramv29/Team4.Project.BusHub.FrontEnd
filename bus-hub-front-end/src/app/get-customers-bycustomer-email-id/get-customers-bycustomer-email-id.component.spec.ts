import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCustomersBycustomerEmailIdComponent } from './get-customers-bycustomer-email-id.component';

describe('GetCustomersBycustomerEmailIdComponent', () => {
  let component: GetCustomersBycustomerEmailIdComponent;
  let fixture: ComponentFixture<GetCustomersBycustomerEmailIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetCustomersBycustomerEmailIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCustomersBycustomerEmailIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
