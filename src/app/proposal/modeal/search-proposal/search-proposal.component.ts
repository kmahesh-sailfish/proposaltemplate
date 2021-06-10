import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { PriceProposalComponent } from '../price-proposal/price-proposal.component';
@Component({
  selector: 'app-search-proposal',
  templateUrl: './search-proposal.component.html',
  styleUrls: ['./search-proposal.component.css']
})
export class SearchProposalComponent implements OnInit {
  public searchAmendList: any;
  dtOptions: DataTables.Settings = {};
  public columnDefs: any;
  public rowData: any;
  constructor( private modalService: NgbModal) { }
  
  ngOnInit(): void {
  
  this.dtOptions = {
    "paging": false,
    "searching": false
  };
  }
 
  loadDatatable(){
   
   this.columnDefs = [
        { field: 'make' },
        { field: 'model' },
        { field: 'price'}
    ];

    this.rowData = [
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 }
    ];
  }
  loadData(){
    this.modalService.open(PriceProposalComponent, {
      // backdrop: "static",
      // keyboard: false,
      size: "lg"
    });
  }

}
