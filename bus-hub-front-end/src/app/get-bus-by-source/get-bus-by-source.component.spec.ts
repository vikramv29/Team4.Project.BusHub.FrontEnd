import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBusBySourceComponent } from './get-bus-by-source.component';

describe('GetBusBySourceComponent', () => {
  let component: GetBusBySourceComponent;
  let fixture: ComponentFixture<GetBusBySourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetBusBySourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetBusBySourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
