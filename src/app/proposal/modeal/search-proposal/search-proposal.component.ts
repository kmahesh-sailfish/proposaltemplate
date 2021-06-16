import { AfterViewInit, Component, EventEmitter, OnInit, Output } from "@angular/core";
import { NgbModalConfig, NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { PriceProposalComponent } from "../price-proposal/price-proposal.component";
import { ProposalService } from "src/app/proposal.service";
import { HttpClient } from '@angular/common/http';

//import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
@Component({
  selector: "app-search-proposal",
  templateUrl: "./search-proposal.component.html",
  styleUrls: ["./search-proposal.component.css"],
  
})
export class SearchProposalComponent implements OnInit {



  
  @Output() selectAmendement: EventEmitter<any> = new EventEmitter();
 
  public searchAmendList: any;
  dtOptions: DataTables.Settings = {};
  public columnDefs: any;
  public rowData: any;
  private gridApi;
  private gridColumnApi;
  public defaultColDef : any;

  constructor(private modalService: NgbModal,
     private proposalService: ProposalService,
     private activeModal:NgbActiveModal,
     private http: HttpClient) 
     { this.columnDefs = [
      {
        field: 'athlete',
        filter: true,
      },
      {
        field: 'country',
        filter: 'agSetColumnFilter',
      },
      {
        field: 'gold',
        filter: 'agNumberColumnFilter',
      },
      {
        field: 'silver',
        filter: 'agNumberColumnFilter',
      },
      {
        field: 'bronze',
        filter: 'agNumberColumnFilter',
      },
    ];

      this.defaultColDef = {
        flex: 1,
        minWidth: 200,
        resizable: true,
        floatingFilter: true,
      };
  
     }

  ngOnInit(): void {
    this.dtOptions = {
      paging: false,
      searching: false
    };
    //this.gridApi = "";
   // this.gridColumnApi =" params.columnApi";
   // this.loadDatatable();
  }

  loadDatatable(obj) {
    this.proposalService.searchAmendement(obj).subscribe((data: any) => {
      this.searchAmendList=data.result;
    })

    }
    viewAmendent(obj){

    }
    addAmendent(obj){
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

    this.http
      .get('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .subscribe((data) => {
        this.rowData = data;
      });
  }
  
}
