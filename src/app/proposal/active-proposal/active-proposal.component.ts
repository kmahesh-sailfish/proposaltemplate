import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";

@Component({
  selector: "app-active-proposal",
  templateUrl: "./active-proposal.component.html",
  styleUrls: ["./active-proposal.component.css"]
})
export class ActiveProposalComponent implements OnInit, OnDestroy {
  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject<any>();
  public ActiveProposal: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.loadActiveProposal();
  }
  loadActiveProposal() {
    this.ActiveProposal = [
      {
        create: "22/06/21",
        proposalId: "225551",
        createdby: "Sanjay",
        modifiedby: "Sanjay v2",
        customerName: "Sintel",
        status: "created",
        shared: "yes",
        delegation: "no"
      }
    ];
    this.dtTrigger.next();
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}
