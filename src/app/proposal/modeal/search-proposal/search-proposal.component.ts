import { AfterViewInit, Component, OnInit } from "@angular/core";
import { NgbModalConfig, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { PriceProposalComponent } from "../price-proposal/price-proposal.component";
import { ProposalService } from "src/app/proposal.service";
@Component({
  selector: "app-search-proposal",
  templateUrl: "./search-proposal.component.html",
  styleUrls: ["./search-proposal.component.css"]
})
export class SearchProposalComponent implements OnInit {
  public searchAmendList: any;
  dtOptions: DataTables.Settings = {};
  public columnDefs: any;
  public rowData: any;
  constructor(private modalService: NgbModal, private proposalService: ProposalService) {}

  ngOnInit(): void {
    this.dtOptions = {
      paging: false,
      searching: false
    };
   // this.loadDatatable();
  }

  loadDatatable(obj) {
    this.proposalService.searchAmendement(obj).subscribe((data: any) => {
      this.searchAmendList=data.result;
    })

    }
///searchAmendement
  
  loadData() {
    this.modalService.open(PriceProposalComponent, {
      // backdrop: "static",
      // keyboard: false,
      size: "lg"
    });
  }
  
  
}
