import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveProposalComponent } from './archive-proposal.component';

describe('ArchiveProposalComponent', () => {
  let component: ArchiveProposalComponent;
  let fixture: ComponentFixture<ArchiveProposalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchiveProposalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
