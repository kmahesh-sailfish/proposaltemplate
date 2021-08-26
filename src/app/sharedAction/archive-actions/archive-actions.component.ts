import { Component, OnInit } from "@angular/core";
import { ICellRendererParams } from "ag-grid-community";
import { ConformationComponent } from "../conformation/conformation.component";
import { NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { ProposalService } from "../../proposal.service";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";

@Component({
  selector: "app-archive-actions",
  templateUrl: "./archive-actions.component.html",
  styleUrls: ["./archive-actions.component.css"],
  providers: [NgbActiveModal]
})
export class ArchiveActionsComponent implements OnInit {
  ngOnInit(): void {}
  cellValue: any;
  params: any;
  // private objactiveComponent: ActiveProposalComponent;
  constructor(
    //  private objactiveComponents: ActiveProposalComponent,
    private modalService: NgbModal,
    private adminService: ProposalService,
    private toastr: ToastrService,
    private router: Router,
    private activeModal: NgbActiveModal
  ) {
    // this.objactiveComponent = objactiveComponents;
  }

  editClicked(event) {
    event.stopPropagation();
    console.log(this.params.data, "edited");
    this.router.navigate(["proposaloverview/", this.params.data["id"]]);
  }
  deleteClicked(event) {
    event.stopPropagation();
    var rowData = this.params.data;
    rowData["labelMessage"] = "Delete";
    console.log(this.params.data, "deleted");
    const modalRef = this.modalService.open(ConformationComponent, {
      size: "sm"
    });
    modalRef.componentInstance.labelMessage = "Delete";
    modalRef.componentInstance.rowObj = rowData;
  }
  archieveClicked(event) {
    event.stopPropagation();
    var rowData = this.params.data;
    rowData["labelMessage"] = "Un-Archive";
    console.log(this.params.data, "Un-archive");
    const modalRef = this.modalService.open(ConformationComponent, {
      size: "sm"
    });
    modalRef.componentInstance.rowObj = rowData;
  }
  shareClicked(event) {
    event.stopPropagation();
    console.log(this.params.data, "share");
  }
  agInit(params: ICellRendererParams): void {
    this.cellValue = params.value;
    this.params = params;
    //this.objactiveComponent.setHRDEditDiv(this.params.data);
  }
}
