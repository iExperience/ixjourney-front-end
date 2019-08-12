import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCityPage } from './course-city.page';

describe('CourseCityPage', () => {
  let component: CourseCityPage;
  let fixture: ComponentFixture<CourseCityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseCityPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseCityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
