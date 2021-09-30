import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewticketByIdComponent } from './viewticket-by-id.component';

describe('ViewticketByIdComponent', () => {
  let component: ViewticketByIdComponent;
  let fixture: ComponentFixture<ViewticketByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewticketByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewticketByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
