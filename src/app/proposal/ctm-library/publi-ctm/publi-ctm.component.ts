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
  constructor(private router: Router) {}
  ngOnInit(): void {}
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
  onRowClicked(event) {
    console.log(event["data"]);
    this.router.navigate(["proposaloverview/", event["data"]["id"]]);
  }
}
