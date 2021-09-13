import {  AfterViewInit,  Component,  EventEmitter,  OnInit,  Output, TemplateRef, ViewChild} from "@angular/core";
import {  NgbModalConfig,  NgbModal,  NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import { PriceProposalComponent } from "../price-proposal/price-proposal.component";
import { ProposalService } from "src/app/proposal.service";
import { HttpClient } from "@angular/common/http";
import BtnCellRenderer from "./btn-cell-renderer";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

import { AgRendererComponent } from "ag-grid-angular";
import { ICellRendererParams } from "ag-grid-community";
import { Router } from "@angular/router";


@Component({
  selector: 'addPreviewAmend-component',
  template: `<span>
                  <button type="button" class="btn btn-sm" (click)="previewAmendment()" style="border:2px;margin-right:10px;color:#433163"><i class="fa fa-eye"></i></button>
                  <button type="button" class="btn btn-sm" (click)="addAmendment()" style="border:2px;margin-right:10px;color:#433163"><i class="fa fa-plus"></i></button>
            </span>`
})

export class AddPreviewAmendmentRenderer implements AgRendererComponent {

  public params: ICellRendererParams;
  agInit(params: ICellRendererParams) {
    this.params = params;
  }
  addAmendment(){
    console.log("Add Amendment clicked");
      this.params.context.componentParent.addAmendent(this.params.data);
  }
  previewAmendment(){
    console.log("previewAmendment clicked");
    this.params.context.componentParent.previewAmendment(this.params.data);

  }
  refresh(): boolean {
    return false;
  }
}


@Component({
  selector: "app-search-proposal",
  templateUrl: "./search-proposal.component.html",
  styleUrls: ["./search-proposal.component.css"]
})
export class SearchProposalComponent implements OnInit {
  @Output() selectAmendement: EventEmitter<any> = new EventEmitter();
  public searchAmendList: any;
  context: any;
  dtOptions: DataTables.Settings = {};
  public columnDefs: any;
  public rowData: any;
  private gridApi;
  private gridColumnApi;
  public defaultColDef: any;
  public gridOptions: any;
  private objTemp
  constructor(
    private modalService: NgbModal,
    private proposalService: ProposalService,
    private activeModal: NgbActiveModal,
    private http: HttpClient,
    private router: Router

  ) {
    this.context = { componentParent: this };

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
      },
      {
        headerName: "Action",
        cellRenderer: "addPreviewAmendmentRenderer",
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

      // EVENTS
      // Add event handlers
      onRowClicked: event => console.log("A row was clicked"),
      onColumnResized: event => console.log("A column was resized"),
      onGridReady: event => console.log("The grid is now ready"),

      // CALLBACKS
      isScrollLag: () => false
    };
  }

  frameworkComponents = {
    addPreviewAmendmentRenderer: AddPreviewAmendmentRenderer
  }

  addAmendent(obj) {
    console.log("In search",obj);
    this.selectAmendement.emit(obj);
    this.activeModal.close();
  }
  previewAmendment(obj){
    console.log("Search page document id",obj.id);
    const url = this.router.serializeUrl(
      this.router.createUrlTree(['/amendmentpreview/'+obj.id])
    );
    window.open(url, '_blank');
  }

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
