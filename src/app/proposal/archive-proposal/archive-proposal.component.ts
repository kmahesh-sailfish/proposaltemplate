import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ProposalService } from "src/app/proposal.service";
import * as moment from "moment";
import { ArchiveActionsComponent } from "../../sharedAction/archive-actions/archive-actions.component";
@Component({
  selector: "app-archive-proposal",
  templateUrl: "./archive-proposal.component.html",
  styleUrls: ["./archive-proposal.component.css"]
})
export class ArchiveProposalComponent implements OnInit {
  rowData: any = [];
  constructor(
    private proposalService: ProposalService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.loadActiveProposal();
    this.loadGrid();
  }
  loadGrid() {
    var da = this.proposalService.getActiveProposal().subscribe((res: any) => {
      this.rowData = res;
      //  this.ActiveProposal = res["result"];
    });
  }
  columnDefs = [
    {
      headerName: "Create",
      field: "createdDate",
      resizable: true,
      filter: true,
      width: 100,
      cellRenderer: data => {
        return moment(data.createdDate).format("MM/DD/YYYY");
      }
    },
    {
      headerName: "proposalId",
      width: 100,
      filter: true,
      field: "proposalId",
      resizable: true
    },
    {
      headerName: "CreateBy",
      width: 100,
      filter: true,
      field: "createdByAlias",
      resizable: true
    },
    {
      headerName: "ModifyBy",
      width: 100,
      filter: true,
      field: "lastModifiedBy",
      resizable: true
    },
    {
      headerName: "Customer Name",
      width: 100,
      filter: true,
      field: "customerName",
      resizable: true
    },
    {
      headerName: "Status",
      field: "status",
      width: 100,
      filter: true,
      resizable: true,
      cellRenderer: data => {
        return data["data"].status == 0 ? "false" : "true";
      }
    },
    {
      headerName: "Shared",
      filter: true,
      width: 100,
      field: "isShared",
      resizable: true
    },
    {
      headerName: "Delegation",
      field: "delegationStatus",
      resizable: true,
      filter: true,
      width: 100,
      cellRenderer: data => {
        return data["data"].delegationStatus == 0 ? "false" : "true";
      }
    },
    {
      headerName: "Action",
      field: "id",
      cellRenderer: "editAction",
      resizable: true,
      filter: true,
      width: 150
    }
  ];
  frameworkComponents = {
    editAction: ArchiveActionsComponent
  };
  onRowClicked(event) {
    console.log(event["data"]);
    this.router.navigate(["proposaloverview/", event["data"]["id"]]);
  }
}
