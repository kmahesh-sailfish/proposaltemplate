import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";
import { ProposalService } from "src/app/proposal.service";
import { ToastrService } from "ngx-toastr";
import {
  GridApi,
  ICellRendererParams,
  IDatasource,
  IGetRowsParams
} from "ag-grid-community";
import { Observable } from "rxjs/Observable";

import * as moment from "moment";
import { Router } from "@angular/router";

import "rxjs/add/observable/of";
import { map } from "rxjs/operators";
import { ArchiveActionsComponent } from "../../sharedAction/archive-actions/archive-actions.component";
@Component({
  selector: "app-archive-proposal",
  templateUrl: "./archive-proposal.component.html",
  styleUrls: ["./archive-proposal.component.css"]
})
export class ArchiveProposalComponent implements OnInit {
  public ActiveProposal: any[] = [];
  public gridOptions: any;
  rowData: any = [];
  title = "agGridExamples";
  gridApi: GridApi;
  constructor(
    private proposalService: ProposalService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.loadActiveProposal();
    this.loadGrid();
  }

  setHRDEditDiv(obj) {
    console.log(obj, "obj");
  }

  private getRowData(startRow: number, endRow: number): Observable<any[]> {
    return this.proposalService.getArchivePage(startRow, endRow);
  }
  datasource: IDatasource = {
    getRows: (params: IGetRowsParams) => {
      this.getRowData(params.startRow, params.endRow).subscribe(data =>
        params.successCallback(data)
      );
    }
  };

  onGridReady(params: any) {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
    this.gridApi.setDatasource(this.datasource);
  }
  loadGrid() {
    this.gridOptions = {
      cacheBlockSize: 100,
      maxBlocksInCache: 2,
      maxConcurrentDatasourceRequests: 1,

      rowModelType: "infinite",
      pagination: true,
      paginationAutoPageSize: true
    };
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
      headerName: "Deal NickName",
      width: 100,
      filter: true,
      field: "dealNickname",
      resizable: true
    },
    {
      headerName: "Status",
      field: "status",
      width: 100,
      filter: true,
      resizable: true,
      cellRenderer: data => {
        return data.status == 0 ? "false" : "true";
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
        return data.delegationStatus == 0 ? "false" : "true";
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
