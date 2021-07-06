import { Component, OnInit } from "@angular/core";
import { ActiveProposalComponent } from "../../proposal/active-proposal/active-proposal.component";
import { ProposalService } from "../../proposal.service";
import { ToastrService } from "ngx-toastr";
import { ICellRendererParams } from "ag-grid-community";

@Component({
  selector: "app-edit-action",
  templateUrl: "./edit-action.component.html",
  styleUrls: ["./edit-action.component.css"]
})
export class EditActionComponent implements OnInit {
  ngOnInit(): void {}
  cellValue: any;
  params: any;
  // private objactiveComponent: ActiveProposalComponent;
  constructor(
    //  private objactiveComponents: ActiveProposalComponent,
    private adminService: ProposalService,
    private toastr: ToastrService
  ) {
    // this.objactiveComponent = objactiveComponents;
  }

  editClicked(event) {
    event.stopPropagation();
    console.log(this.params.data,'edited');
  }
  deleteClicked(event) {
    event.stopPropagation();
    console.log(this.params.data,'deleted');
  }
  archieveClicked(event) {
    event.stopPropagation();
    console.log(this.params.data,'archive');
  }
  shareClicked(event) {
    event.stopPropagation();
    console.log(this.params.data,'share');
  }
  agInit(params: ICellRendererParams): void {
    this.cellValue = params.value;
    this.params = params;
    //this.objactiveComponent.setHRDEditDiv(this.params.data);
  }
}
