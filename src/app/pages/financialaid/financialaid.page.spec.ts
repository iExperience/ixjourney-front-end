import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialaidPage } from './financialaid.page';

describe('FinancialaidPage', () => {
  let component: FinancialaidPage;
  let fixture: ComponentFixture<FinancialaidPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialaidPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialaidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
