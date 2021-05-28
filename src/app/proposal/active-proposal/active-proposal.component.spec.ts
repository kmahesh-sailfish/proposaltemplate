import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveProposalComponent } from './active-proposal.component';

describe('ActiveProposalComponent', () => {
  let component: ActiveProposalComponent;
  let fixture: ComponentFixture<ActiveProposalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveProposalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
