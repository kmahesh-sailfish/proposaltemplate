import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleDocsComponent } from './multiple-docs.component';

describe('MultipleDocsComponent', () => {
  let component: MultipleDocsComponent;
  let fixture: ComponentFixture<MultipleDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleDocsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
