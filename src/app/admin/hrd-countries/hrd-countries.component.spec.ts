import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrdCountriesComponent } from './hrd-countries.component';

describe('HrdCountriesComponent', () => {
  let component: HrdCountriesComponent;
  let fixture: ComponentFixture<HrdCountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrdCountriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HrdCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
