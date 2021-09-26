import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllBusComponent } from './view-all-bus.component';

describe('ViewAllBusComponent', () => {
  let component: ViewAllBusComponent;
  let fixture: ComponentFixture<ViewAllBusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllBusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
