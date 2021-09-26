import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCustomersBycustomerNameComponent } from './get-customers-bycustomer-name.component';

describe('GetCustomersBycustomerNameComponent', () => {
  let component: GetCustomersBycustomerNameComponent;
  let fixture: ComponentFixture<GetCustomersBycustomerNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetCustomersBycustomerNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCustomersBycustomerNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
