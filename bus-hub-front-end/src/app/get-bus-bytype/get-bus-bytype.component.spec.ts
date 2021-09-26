import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBusBytypeComponent } from './get-bus-bytype.component';

describe('GetBusBytypeComponent', () => {
  let component: GetBusBytypeComponent;
  let fixture: ComponentFixture<GetBusBytypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetBusBytypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetBusBytypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
