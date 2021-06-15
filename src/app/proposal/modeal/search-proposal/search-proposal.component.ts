import { AfterViewInit, Component, EventEmitter, OnInit, Output } from "@angular/core";
import { NgbModalConfig, NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { PriceProposalComponent } from "../price-proposal/price-proposal.component";
import { ProposalService } from "src/app/proposal.service";
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
  constructor(private modalService: NgbModal,
     private proposalService: ProposalService,
     private activeModal:NgbActiveModal) {}

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
  
  
}
