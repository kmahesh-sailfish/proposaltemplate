import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";
import { ProposalService } from "src/app/proposal.service";
import { ToastrService } from "ngx-toastr";
import { GridApi, ICellRendererParams, IDatasource, IGetRowsParams } from "ag-grid-community";
import { Observable } from 'rxjs/Observable';
import { EditActionComponent } from "../../sharedAction/edit-action/edit-action.component";
import * as moment from "moment";
import { Router } from "@angular/router";
// import { Observable,of } from 'rxjs';
 import 'rxjs/add/observable/of';
@Component({
  selector: "app-active-proposal",
  templateUrl: "./active-proposal.component.html",
  styleUrls: ["./active-proposal.component.css"]
})
export class ActiveProposalComponent implements OnInit {
  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject<any>();
  public ActiveProposal: any[] = [];
  public gridOptions: any;
 rowData: any = [];
 title = 'agGridExamples';
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

  // info:any;
  // private getRowData(startRow: number, endRow: number): Observable<any[]> {
  //   // This is acting as a service call that will return just the
  //   // data range that you're asking for.
  //   var rowdata = [];
  //   for (var i = startRow; i <= endRow; i++) {

  //     rowdata.push({ one: "hello", two: "world", three: "Item " + i });
  //   }
  //   return Observable.of(rowdata);
  // }
  dataSource: IDatasource = {
    getRows: (params: IGetRowsParams) => {
     this.proposalService.getActiveProposal().subscribe((res: any) => {
      params.successCallback(
        res,
        101
      );
        
      });
      // this.apiService().subscribe(data => {
      //   params.successCallback(
      //     data,
      //     101
      //   );
      // })
    }
  }

  // onGridReady1(params: any) {
  //   console.log("onGridReady");
  //   var datasource = {
  //     getRows: (params: IGetRowsParams) => {
  //       this.info = "Getting datasource rows, start: " + params.startRow + ", end: " + params.endRow;
      
  //       this.getRowData(params.startRow, params.endRow)
  //                 .subscribe(data => params.successCallback(data));
        
  //     }
  //   };
  //   params.api.setDatasource(datasource);

  // }
  onGridReady(params: any) {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
    this.gridApi.setDatasource(this.dataSource)
  }
  loadGrid() {
    this.gridOptions = {
     
      cacheBlockSize: 100,
      maxBlocksInCache: 2,
      enableServerSideFilter: false,
      enableServerSideSorting: false,
      rowModelType: 'infinite',
      pagination: true, 
      paginationAutoPageSize: true
    };
    // var da = this.proposalService.getActiveProposal().subscribe((res: any) => {
    //   this.rowData = res;
    //   console.log(this.rowData,'rowDAta')
      
    // });
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
    editAction: EditActionComponent
  };
  onRowClicked(event) {
    console.log(event["data"]);
    this.router.navigate(["proposaloverview/", event["data"]["id"]]);
  }
}
