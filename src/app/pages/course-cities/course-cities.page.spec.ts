import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCitiesPage } from './course-cities.page';

describe('CourseCitiesPage', () => {
  let component: CourseCitiesPage;
  let fixture: ComponentFixture<CourseCitiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseCitiesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseCitiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
