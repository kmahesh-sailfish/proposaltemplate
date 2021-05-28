import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtmLibraryComponent } from './ctm-library.component';

describe('CtmLibraryComponent', () => {
  let component: CtmLibraryComponent;
  let fixture: ComponentFixture<CtmLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtmLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CtmLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
