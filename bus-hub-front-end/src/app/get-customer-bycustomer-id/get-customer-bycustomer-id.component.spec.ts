import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCustomerBycustomerIdComponent } from './get-customer-bycustomer-id.component';

describe('GetCustomerBycustomerIdComponent', () => {
  let component: GetCustomerBycustomerIdComponent;
  let fixture: ComponentFixture<GetCustomerBycustomerIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetCustomerBycustomerIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCustomerBycustomerIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
