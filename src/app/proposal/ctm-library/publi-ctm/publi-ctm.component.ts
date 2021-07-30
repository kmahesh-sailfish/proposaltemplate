import { Component, OnInit } from "@angular/core";
import { ProposalService } from "src/app/proposal.service";
import { Router } from "@angular/router";
import * as moment from "moment";
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
  title = "agGridExamples";
  gridApi: GridApi;
  constructor(
    private router: Router,
    private proposalService: ProposalService
  ) {}
  ngOnInit(): void {
    this.getLoadpublictm();
  }
  getLoadpublictm() {
    this.proposalService.getpublicCtmList().subscribe(data => {
      this.rowData = data;
    });
  }
  onGridReady(params: any) {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
    // this.gridApi.setDatasource(this.datasource);
  }
  frameworkComponents = {
    editAction: ""
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
  onRowClicked(event) {
    console.log(event["data"]);
    this.router.navigate(["proposaloverview/", event["data"]["id"]]);
  }
}
