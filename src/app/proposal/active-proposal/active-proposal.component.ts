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
import { EditActionComponent } from "../../sharedAction/edit-action/edit-action.component";
import * as moment from "moment";
import { Router } from "@angular/router";

import "rxjs/add/observable/of";
import { map } from "rxjs/operators";
import { FilterCellComponent } from "../../sharedAction/filter/filter-cell/filter-cell.component";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-active-proposal",
  templateUrl: "./active-proposal.component.html",
  styleUrls: ["./active-proposal.component.css"]
})
export class ActiveProposalComponent implements OnInit {
  public searchObj: any = {};
  public getsearchItem: any;
  public selectSearchType: any;
  public bsValue = new Date();
  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject<any>();
  public ActiveProposal: any[] = [];
  public gridOptions: any;
  public rowData: any = [];
  public title = "agGridExamples";
  public gridApi: GridApi;
  public searchItem = [
    { name: "Proposal Id", id: "ProposalId" },
    { name: "CreatedByAlias", id: "CreatedByAlias" },
    { name: "LastModifiedBy", id: "LastModifiedBy" },
    { name: "Status", id: "Status" },
    { name: "Shared", id: "IsShared" },
    { name: "Delegation Status", id: "DelegationStatus" },
    { name: "Created Date", id: "CreatedDate" }
  ];
  constructor(
    private proposalService: ProposalService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.loadActiveProposal();
    this.loadGrid();
  }
  onSubmit() {}
  setHRDEditDiv(obj) {
    console.log(obj, "obj");
  }

  private getRowData(startRow: number, endRow: number): Observable<any[]> {
    return this.proposalService.getPagenation(startRow, endRow);
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

      field: "proposalId",
      resizable: true,
      filter: "partialMatchFilter",
      menuTabs: ["filterMenuTab"]
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
    editAction: EditActionComponent,
    partialMatchFilter: FilterCellComponent
  };
  onRowClicked(event) {
    console.log(event["data"]);
    this.router.navigate(["proposaloverview/", event["data"]["id"]]);
  }
}
