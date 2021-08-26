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
  // public components;
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
      searchTextDate: new FormControl(null),
      searchField: new FormControl(null),
      searchText: new FormControl(null, [
        Validators.required,
        this.customValidators.nameValidator
      ])
    });
  }
  onSubmit(dateType: any) {
    var _Obj = {};
    if (this.searchForm.get("searchField").value == "CreatedByAlias") {
      let temp = this.searchForm.get("searchText").value;
      _Obj["searchText"] = "v-" + temp;
      _Obj["searchField"] = this.searchForm.get("searchField").value;
    } else if (this.searchForm.get("searchField").value == "LastModifiedBy") {
      let temp = this.searchForm.get("searchText").value;
      _Obj["searchText"] = "m-" + temp;
      _Obj["searchField"] = this.searchForm.get("searchField").value;
    } else if (
      this.searchForm.get("searchTextDate").value != "" &&
      this.searchForm.get("searchTextDate").value != null
    ) {
      let temp = this.searchForm.get("searchTextDate").value;
      temp = moment(temp).format("YYYY-MM-DD");
      // temp = moment(temp).format("MM/DD/YYYY");
      _Obj["searchText"] = temp;
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
  private getRowData1(startRow: number, endRow: number): Observable<any[]> {
    console.log(this.searchObj);
    this.startRow = startRow;
    this.endRow = endRow;
    let obj = {
      ...this.searchObj,
      PageSize: this.endRow,
      PageNum: this.startRow,
      isArchive: false
    };

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
    // {
    //   headerName: "ID",
    //   field: "id",
    //   resizable: true,
    //   filter: true,
    //   width: 100,
    //   cellRenderer: "loadingRenderer"
    // },
    {
      headerName: "Select",
      width: 150,
      //field: "id",
      resizable: true,
      headerTooltip:"Select",
      editable:true,
      checkboxSelection: true,
      tooltipField:"id"
    },
    {
      headerName: "Proposal ID",
      width: 300,
      field: "proposalId",
      resizable: true,
      filter: "partialMatchFilter",
      menuTabs: ["filterMenuTab"],
      headerTooltip:"Proposal Id",
      tooltipField:"proposalId"
    },
    {
      headerName: "Status",
      field: "status",
      //width: 120,
      filter: true,
      resizable: true,
      headerTooltip:"Status"
    },
    {
      headerName: "Created By",
      //width: 140,
      filter: true,
      field: "createdByAlias",
      resizable: true,
      headerTooltip:"Created By",
      tooltipField:"createdByAlias"
    },
    {
      headerName: "Created Date",
      field: "createdDate",
      resizable: true,
      filter: true,
      //width: 100,
      headerTooltip:"Created Date",
      tooltipField:"createdDate",
      cellRenderer: (data: { value: moment.MomentInput; }) => {
        return moment(data.value).format("MM/DD/YYYY");
      }
    },
    {
      headerName: "Modified By",
      //width: 100,
      filter: true,
      field: "lastModifiedBy",
      resizable: true,
      headerTooltip:"Modified By",
      tooltipField:"lastModifiedBy"
    },
    {
      headerName: "Customer Name",
      //width: 100,
      filter: true,
      field: "customerName",
      resizable: true,
      headerTooltip:"Customer Name",
      tooltipField:"customerName"
    },
    {
      headerName: "Deal NickName",
      //width: 100,
      filter: true,
      field: "dealNickname",
      resizable: true,
      headerTooltip:"Deal NickName",
      tooltipField:"dealNickname"
    },
    
    {
      headerName: "Mopet Submitted",
      field: "mopetSubmittedDate",
      resizable: true,
      filter: true,
      //width: 100,
      headerTooltip:"Mopet Submitted",
      tooltipField:"createdDate",
      cellRenderer: (data: { value: moment.MomentInput; }) => {
        return data.value != null ? moment(data.value).format("MM/DD/YYYY") : "";
      }
    },
    {
      headerName: "Shared",
      filter: true,
      //width: 100,
      field: "isShared",
      resizable: true,
      headerTooltip:"Shared"
    },
    {
      headerName: "Delegated",
      field: "delegationStatus",
      resizable: true,
      filter: true,
      // width: 100,
      headerTooltip:"Delegated",
      cellRenderer: (data: { value: moment.MomentInput; }) =>{
        return data.value == 0 ? "false" : "true";
      }
    },
    {
      headerName: "Action",
      field: "id",
      cellRenderer: "editAction",
      resizable: true,
      //filter: true,
      width: 300
    },
  ];

  frameworkComponents = {
    editAction: EditActionComponent,
    partialMatchFilter: FilterCellComponent
  };

  components = {
    loadingRenderer: function(params: { value: any; }) {
      if (params.value !== undefined) {
        return params.value;
      } else {
        return "<img src=\"https://www.ag-grid.com/example-assets/loading.gif\">";
      }
    }
  };

  onRowClicked(event: { [x: string]: { [x: string]: any; }; }) {
    console.log(event["data"]);
    this.router.navigate(["proposaloverview/", event["data"]["id"]]);
  }
}
