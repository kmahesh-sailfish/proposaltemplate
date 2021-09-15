import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveConformationComponent } from './active-conformation.component';

describe('ActiveConformationComponent', () => {
  let component: ActiveConformationComponent;
  let fixture: ComponentFixture<ActiveConformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveConformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveConformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
