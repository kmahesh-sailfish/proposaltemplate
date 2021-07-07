import { Component, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { ProposalService } from "../../proposal.service";
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
    private router: Router
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
    }
    this.proposalService
      .actionProposal(obj, this.rowObj["labelMessage"])
      .subscribe(res => {
        this.router.navigate(["/activeproposal"]);
        console.log(res, "res");
      });
    //this.activeModal.close();
  }
}
