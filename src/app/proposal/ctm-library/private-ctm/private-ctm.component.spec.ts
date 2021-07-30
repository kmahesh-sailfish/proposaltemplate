import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateCtmComponent } from './private-ctm.component';

describe('PrivateCtmComponent', () => {
  let component: PrivateCtmComponent;
  let fixture: ComponentFixture<PrivateCtmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateCtmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateCtmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
