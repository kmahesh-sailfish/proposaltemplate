import {
  AfterViewInit,
  Component,
  EventEmitter,
  OnInit,
  Output
} from "@angular/core";
import {
  NgbModalConfig,
  NgbModal,
  NgbActiveModal
} from "@ng-bootstrap/ng-bootstrap";
import { PriceProposalComponent } from "../price-proposal/price-proposal.component";
import { ProposalService } from "src/app/proposal.service";
import { HttpClient } from "@angular/common/http";
import BtnCellRenderer from "./btn-cell-renderer";
//import 'ag-grid-enterprise';
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
@Component({
  selector: "app-search-proposal",
  templateUrl: "./search-proposal.component.html",
  styleUrls: ["./search-proposal.component.css"]
})
export class SearchProposalComponent implements OnInit {
  @Output() selectAmendement: EventEmitter<any> = new EventEmitter();
  public searchAmendList: any;
  dtOptions: DataTables.Settings = {};
  public columnDefs: any;
  public rowData: any;
  private gridApi;
  private gridColumnApi;
  public defaultColDef: any;
  public gridOptions: any;
  constructor(
    private modalService: NgbModal,
    private proposalService: ProposalService,
    private activeModal: NgbActiveModal,
    private http: HttpClient
  ) {
    this.columnDefs = [
      {
        headerName: "Code",
        field: "code",
        filter: true
      },
      {
        headerName: "Document Name",
        field: "docName",
        filter: true
      },
      {
        headerName: "Language",
        field: "language",
        filter: true
        // cellRenderer: params => {
        //   let eIconGui = document.createElement("span");
        //   return (eIconGui.innerHTML =
        //     '<i  class="fa fa-eye" style="width: 14px;"></i>' +
        //     " " +
        //     params.data.id);
        // }
      },
      {
        headerName: "Action",
        cellRenderer: "btnCellRenderer",
        cellRendererParams: {
          onClick: this.addAmendent.bind(this)
        },
        minWidth: 150
      }
    ];

    this.defaultColDef = {
      flex: 1,
      minWidth: 200,
      resizable: true
    };
  }

  ngOnInit(): void {
    this.dtOptions = {
      paging: false,
      searching: false
    };
    this.gridOptions = {
      // PROPERTIES
      // Objects like myRowData and myColDefs would be created in your application
      rowData: this.searchAmendList,
      columnDefs: this.columnDefs,
      defaultColDef: this.defaultColDef,
      pagination: true,
      rowSelection: "single",
      components: {
        btnCellRenderer: BtnCellRenderer
      },
      // EVENTS
      // Add event handlers
      onRowClicked: event => console.log("A row was clicked"),
      onColumnResized: event => console.log("A column was resized"),
      onGridReady: event => console.log("The grid is now ready"),

      // CALLBACKS
      isScrollLag: () => false
    };
  }

  viewAmendent(obj) {
    alert("Hi");
  }
  addAmendent(obj) {
    this.selectAmendement.emit(obj);
    this.activeModal.close();
  }
  ///searchAmendement

  loadData() {
    this.modalService.open(PriceProposalComponent, {
      // backdrop: "static",
      // keyboard: false,
      size: "lg"
    });
  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.rowData = this.searchAmendList;
  }
}
