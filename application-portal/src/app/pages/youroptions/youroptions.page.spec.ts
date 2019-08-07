import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YouroptionsPage } from './youroptions.page';

describe('YouroptionsPage', () => {
  let component: YouroptionsPage;
  let fixture: ComponentFixture<YouroptionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YouroptionsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YouroptionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
