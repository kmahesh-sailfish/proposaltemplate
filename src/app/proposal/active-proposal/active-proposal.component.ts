import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";
import { ProposalService } from "src/app/proposal.service";

@Component({
  selector: "app-active-proposal",
  templateUrl: "./active-proposal.component.html",
  styleUrls: ["./active-proposal.component.css"]
})
export class ActiveProposalComponent implements OnInit, OnDestroy {
  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject<any>();
  public ActiveProposal: any[] = [];

  constructor(private proposalService: ProposalService) {}
  columnDefs: any;
  ngOnInit(): void {
    this.loadActiveProposal();
  }
  loadGrid() {
    this.columnDefs = [
      { field: 'createdDate' },
    { field: 'proposalId' },
    { field: 'createdByAlias' },
    { field: 'lastModifiedBy' },
    { field: 'customerName' },
    { field: 'status' },
    { field: 'isShared' },
    { field: 'delegationStatus' },
    { field: 'Action' }
    
    ]
  }
  
  loadActiveProposal() {
    this.proposalService.getActiveProposal().subscribe((res)=>{
      this.ActiveProposal = res["result"];
    })
    
    this.dtTrigger.next();
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}
