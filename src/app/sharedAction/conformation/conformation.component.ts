import { Component, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { ProposalService } from "../../proposal.service";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";

@Component({
  selector: "app-conformation",
  templateUrl: "./conformation.component.html",
  styleUrls: ["./conformation.component.css"]
})
export class ConformationComponent implements OnInit {
  constructor(
    public activeModal: NgbActiveModal,
    public proposalService: ProposalService,
    private router: Router,
    private toastr: ToastrService,
  ) {}
  public rowObj: any;
  ngOnInit(): void {}
  submitConfirm() {
    var obj = {};
    if (this.rowObj["labelMessage"] == "Delete") {
      console.log(this.rowObj, "delete");
      obj["Id"] = this.rowObj["id"];
      obj["alias"] = this.rowObj["createdByAlias"];
    } else if (this.rowObj["labelMessage"] == "Archive") {
      obj["Id"] = this.rowObj["id"];
      obj["alias"] = this.rowObj["createdByAlias"];
      obj["archive"] = "true";
    }else if (this.rowObj["labelMessage"] == "Un-Archive"){
      obj["Id"] = this.rowObj["id"];
      obj["alias"] = this.rowObj["createdByAlias"];
      obj["archive"] = "false";
    }
    //else{
    //  alert('entered else part')
    //  console.log(this.rowObj, "deleteMultiple");
    //}
      

    this.proposalService
      .actionProposal(obj, this.rowObj["labelMessage"])
      .subscribe(res => {
        this.toastr.success("Proposal "+this.rowObj["labelMessage"]+"d successfully. " + obj["Id"], "Success");
        //this.router.navigate(["/activeproposal"]);
        const currentUrl = this.router.url;
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
            this.router.navigate([currentUrl]);
        });
        this.activeModal.close();
      });
    
  }

  //submitMultipleConfirm() {
  //  alert("Multiple Delete");
  //}
  
}
