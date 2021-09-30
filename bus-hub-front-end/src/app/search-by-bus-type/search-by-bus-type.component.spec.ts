import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByBusTypeComponent } from './search-by-bus-type.component';

describe('SearchByBusTypeComponent', () => {
  let component: SearchByBusTypeComponent;
  let fixture: ComponentFixture<SearchByBusTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchByBusTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByBusTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
