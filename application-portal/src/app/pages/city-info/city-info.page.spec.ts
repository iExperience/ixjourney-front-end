import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityInfoPage } from './city-info.page';

describe('CityInfoPage', () => {
  let component: CityInfoPage;
  let fixture: ComponentFixture<CityInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
