import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { PriceProposalComponent } from '../price-proposal/price-proposal.component';
@Component({
  selector: 'app-search-proposal',
  templateUrl: './search-proposal.component.html',
  styleUrls: ['./search-proposal.component.css']
})
export class SearchProposalComponent implements OnInit,AfterViewInit {
  public searchAmendList: any;
  public 
  constructor( private modalService: NgbModal) { }
  
  ngOnInit(): void {
   // this.loadDatatable();
  }
  ngAfterViewInit(){

  }
  loadDatatable(){
    $('#example').DataTable({
      "paging": false
  })
  }
  loadData(){
    this.modalService.open(PriceProposalComponent, {
      // backdrop: "static",
      // keyboard: false,
      size: "lg"
    });
  }

}
