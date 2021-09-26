import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBusByNameComponent } from './get-bus-by-name.component';

describe('GetBusByNameComponent', () => {
  let component: GetBusByNameComponent;
  let fixture: ComponentFixture<GetBusByNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetBusByNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetBusByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
