import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialsAndPackagesComponent } from './specials-and-packages.component';

describe('SpecialsAndPackagesComponent', () => {
  let component: SpecialsAndPackagesComponent;
  let fixture: ComponentFixture<SpecialsAndPackagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialsAndPackagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialsAndPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
