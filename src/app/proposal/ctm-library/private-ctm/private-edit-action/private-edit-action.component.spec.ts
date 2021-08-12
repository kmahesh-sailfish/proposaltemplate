import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateEditActionComponent } from './private-edit-action.component';

describe('PrivateEditActionComponent', () => {
  let component: PrivateEditActionComponent;
  let fixture: ComponentFixture<PrivateEditActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateEditActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateEditActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
