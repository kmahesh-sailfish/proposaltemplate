import { Component, OnInit } from "@angular/core";
import { ProposalService } from "src/app/proposal.service";
import { Router } from "@angular/router";
import * as moment from "moment";
import { PrivateEditActionComponent } from './private-edit-action/private-edit-action.component';
import {
  GridApi,
  ICellRendererParams,
  IDatasource,
  IGetRowsParams
} from "ag-grid-community";
@Component({
  selector: "app-private-ctm",
  templateUrl: "./private-ctm.component.html",
  styleUrls: ["./private-ctm.component.css"]
})
export class PrivateCtmComponent implements OnInit {
  public userId: any;
  public gridOptions: any;
  rowData: any = [];
  title = "agGridExamples";
  gridApi: GridApi;
  constructor(
    private router: Router,
    private proposalService: ProposalService
  ) {}
  ngOnInit(): void {
    this.userId = localStorage.getItem('userAlias');
    this.getLoadprivatectm();
   
  }
  onGridReady(params: any) {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
    // this.gridApi.setDatasource(this.datasource);
  }
  
  getLoadprivatectm() {
    var obj={};
  obj['alias'] = this.userId
    this.proposalService.getprivateCtmList(obj).subscribe(data => {
      this.rowData = data;
    });
  }
  frameworkComponents = {
    editAction: PrivateEditActionComponent
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
