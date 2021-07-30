import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtmFooterComponent } from './ctm-footer.component';

describe('CtmFooterComponent', () => {
  let component: CtmFooterComponent;
  let fixture: ComponentFixture<CtmFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtmFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CtmFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
