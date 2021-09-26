import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCustomerbynameComponent } from './get-customerbyname.component';

describe('GetCustomerbynameComponent', () => {
  let component: GetCustomerbynameComponent;
  let fixture: ComponentFixture<GetCustomerbynameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetCustomerbynameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCustomerbynameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
