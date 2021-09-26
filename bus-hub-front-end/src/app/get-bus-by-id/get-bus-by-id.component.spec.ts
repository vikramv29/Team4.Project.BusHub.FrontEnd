import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBusByIdComponent } from './get-bus-by-id.component';

describe('GetBusByIdComponent', () => {
  let component: GetBusByIdComponent;
  let fixture: ComponentFixture<GetBusByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetBusByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetBusByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
