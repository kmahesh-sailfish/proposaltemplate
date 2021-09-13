import { Component, OnInit } from "@angular/core";
import { ProposalService } from "src/app/proposal.service";
import { Router } from "@angular/router";
import * as moment from "moment";
import { EditActionComponent } from "./edit-action/edit-action.component";
import { Observable } from "rxjs";
import {
  GridApi,
  ICellRendererParams,
  IDatasource,
  IGetRowsParams
} from "ag-grid-community";

@Component({
  selector: "app-publi-ctm",
  templateUrl: "./publi-ctm.component.html",
  styleUrls: ["./publi-ctm.component.css"]
})
export class PubliCtmComponent implements OnInit {
  public gridOptions: any;
  rowData: any = [];
  startRow: any;
  endRow: any;
  title = "agGridExamples";
  gridApi: GridApi;
  constructor(
    private router: Router,
    private proposalService: ProposalService
  ) {}
  ngOnInit(): void {
    localStorage.setItem("pageNum", "0");
    localStorage.setItem("pageSize", "100");
    this.getLoadpublictm();
  }
  getLoadpublictm() {
    this.gridOptions = {
      cacheBlockSize: 100,
      maxBlocksInCache: 2,
      maxConcurrentDatasourceRequests: 1,

      rowModelType: "infinite",
      pagination: true,
      paginationAutoPageSize: true,
      suppressRowClickSelection: true,
      rowSelection: "multiple"
    };
    // this.proposalService.getpublicCtmList().subscribe(data => {
    //   this.rowData = data;
    // });
  }
  private getRowData(startRow: number, endRow: number): Observable<any[]> {
    this.startRow = startRow;
    this.endRow = endRow;
    let obj = {
      PageSize: this.endRow,
      PageNum: this.startRow
    };

  
    let pageSize = localStorage.getItem('pageSize');
    let pageNum = localStorage.getItem('pageNum');
    var pageNumUpdate = (JSON.parse(pageNum) + 1);
    localStorage.setItem("pageNum", pageNumUpdate);

    return this.proposalService.getpublicCtmList(pageNum, pageSize);
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
  frameworkComponents = {
    editAction: EditActionComponent
  };

  columnDefs = [
    {
      headerName: "Categories",
      field: "categories",
      resizable: true,
      filter: true,
      width: 100
    },
    {
      headerName: "Description",
      width: 100,
      filter: true,
      field: "description",
      resizable: true
    },
    {
      headerName: "Language",
      width: 100,
      filter: true,
      field: "language",
      resizable: true
    },
    {
      headerName: "Update",
      width: 100,
      filter: true,
      field: "updatedDate",
      resizable: true
    },
    {
      headerName: "Updateby",
      width: 100,
      filter: true,
      field: "createdBy",
      resizable: true
    },
    {
      headerName: "Pricing CTM",
      width: 100,
      filter: true,
      field: "isCTMPricing",
      resizable: true
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
}
