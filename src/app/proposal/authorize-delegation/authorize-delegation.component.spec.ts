import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizeDelegationComponent } from './authorize-delegation.component';

describe('AuthorizeDelegationComponent', () => {
  let component: AuthorizeDelegationComponent;
  let fixture: ComponentFixture<AuthorizeDelegationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorizeDelegationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizeDelegationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
