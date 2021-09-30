import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllticketsComponent } from './view-alltickets.component';

describe('ViewAllticketsComponent', () => {
  let component: ViewAllticketsComponent;
  let fixture: ComponentFixture<ViewAllticketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllticketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllticketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
