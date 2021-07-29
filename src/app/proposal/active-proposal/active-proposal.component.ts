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
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { SpecialCharacter } from "../../sharedservices/special-character";

@Component({
  selector: "app-active-proposal",
  templateUrl: "./active-proposal.component.html",
  styleUrls: ["./active-proposal.component.css"],
  providers: [SpecialCharacter]
})
export class ActiveProposalComponent implements OnInit {
  public startRow: number;
  public endRow: number;
  public searchObj: any = {};
  public searchForm: FormGroup;
  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject<any>();
  public ActiveProposal: any[] = [];
  public gridOptions: any;
  public rowData: any = [];
  public title = "agGridExamples";
  public gridApi: GridApi;
  public searchItem = [
    { name: "Search by Proposal Id", id: "ProposalId" },
    { name: "Search by Alias", id: "CreatedByAlias" },
    { name: "Search by LastModifiedBy", id: "LastModifiedBy" },
    { name: "Search by Customer Name", id: "CustomerName" },
    { name: "Search by Deal Nick Name", id: "DealNickName" },

    { name: "Search by Created Date", id: "CreatedDate" }
  ];
  constructor(
    private proposalService: ProposalService,
    private router: Router,
    private customValidators: SpecialCharacter
  ) {}

  ngOnInit(): void {
    this.loadGrid();
    this.loadSearchForm();
  }
  clearVAl() {
    this.searchForm.reset();
    this.gridApi.setDatasource(this.datasource);
  }
  reset() {
    this.searchForm.reset();
    this.gridApi.setDatasource(this.datasource);
  }
  loadSearchForm() {
    this.searchForm = new FormGroup({
      searchTextDate:new FormControl(null),
      searchField: new FormControl(null),
      searchText: new FormControl(null, [
        Validators.required,
        this.customValidators.nameValidator
      ])
    });
  }
  onSubmit(dateType) {
    var _Obj = {};
    if(dateType){
      if (this.searchForm.get('searchTextDate').value != "" && 
    this.searchForm.get('searchTextDate').value != null) {
      let temp = this.searchForm.get("searchTextDate").value;
      temp = moment(temp).format("MM/DD/YYYY");
      _Obj["searchText"] = temp;
      _Obj["searchField"] = this.searchForm.get("searchField").value;
    }
  }else{
    if (this.searchForm.get('searchText').value != "" && 
    this.searchForm.get('searchText').value != null) {
      if (this.searchForm.get("searchField").value == "CreatedByAlias") {
        let temp = this.searchForm.get("searchText").value;
        _Obj["searchText"] = "v-" + temp;
        _Obj["searchField"] = this.searchForm.get("searchField").value;
      } else if (this.searchForm.get("searchField").value == "CreatedDate") {
        let temp = this.searchForm.get("searchText").value;
        _Obj["searchText"] = "m-" + temp;
        _Obj["searchField"] = this.searchForm.get("searchField").value;
      } else {
        _Obj = this.searchForm.value;
      }
      this.searchObj = _Obj;
      var datasource: IDatasource = {
        getRows: (params: IGetRowsParams) => {
          this.getRowData1(params.startRow, params.endRow).subscribe(data =>
            params.successCallback(data)
          );
        }
      };
      this.gridApi.setDatasource(datasource);
    }
  }
    
  }
  private getRowData1(startRow: number, endRow: number): Observable<any[]> {
    console.log(this.searchObj);
    this.startRow = startRow;
    this.endRow = endRow;
    let obj = {
      ...this.searchObj,
      PageSize: this.endRow,
      PageNum: this.startRow
    };
    // var obj = {
    //   PageNum: startRow,
    //   PageSize: endRow,
    //   searchField: "CustomerName",
    //   searchText: "Te"
    // };
    return this.proposalService.getcustomeSearch(obj);
  }
  private getRowData(startRow: number, endRow: number): Observable<any[]> {
    this.startRow = startRow;
    this.endRow = endRow;
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
