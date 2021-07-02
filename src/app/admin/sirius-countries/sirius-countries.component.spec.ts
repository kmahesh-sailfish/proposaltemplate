import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiriusCountriesComponent } from './sirius-countries.component';

describe('SiriusCountriesComponent', () => {
  let component: SiriusCountriesComponent;
  let fixture: ComponentFixture<SiriusCountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiriusCountriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiriusCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
