import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupBookingsComponent } from './group-bookings.component';

describe('GroupBookingsComponent', () => {
  let component: GroupBookingsComponent;
  let fixture: ComponentFixture<GroupBookingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupBookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
