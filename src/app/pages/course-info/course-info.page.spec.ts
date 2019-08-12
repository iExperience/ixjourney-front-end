import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseInfoPage } from './course-info.page';

describe('CourseInfoPage', () => {
  let component: CourseInfoPage;
  let fixture: ComponentFixture<CourseInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
