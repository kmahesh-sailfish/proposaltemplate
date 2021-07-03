import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";
import { ProposalService } from "src/app/proposal.service";
import { ToastrService } from "ngx-toastr";
import { ICellRendererParams } from "ag-grid-community";
import { EditActionComponent } from "../../sharedAction/edit-action/edit-action.component";
import * as moment from "moment";
import { Router } from "@angular/router";
@Component({
  selector: "app-active-proposal",
  templateUrl: "./active-proposal.component.html",
  styleUrls: ["./active-proposal.component.css"]
})
export class ActiveProposalComponent implements OnInit {
  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject<any>();
  public ActiveProposal: any[] = [];

  constructor(
    private proposalService: ProposalService,
    private router: Router
  ) {}
  rowData: any = [];

  ngOnInit(): void {
    // this.loadActiveProposal();
    this.loadGrid();
  }
  setHRDEditDiv(obj) {
    console.log(obj, "obj");
  }

  loadGrid() {
    var da = this.proposalService.getActiveProposal().subscribe((res: any) => {
      this.rowData = res["result"];
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
    editAction: EditActionComponent
  };
  onRowClicked(event) {
    console.log(event["data"]);
    this.router.navigate(["proposaloverview/", event["data"]["id"]]);
  }
}
