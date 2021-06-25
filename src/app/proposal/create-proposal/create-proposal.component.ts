import { Component, OnInit } from "@angular/core";
import { RouterModule, Router } from "@angular/router";
import { FormGroup, FormControl, FormArray, Validators } from "@angular/forms";
import { ProposalService } from "../../proposal.service";
import { SharedService } from "../../sharedservices/shared.service";

@Component({
  selector: "app-create-proposal",
  templateUrl: "./create-proposal.component.html",
  styleUrls: ["./create-proposal.component.css"]
})
export class CreateProposalComponent implements OnInit {
  public proposalForm: FormGroup;
  public config: any[];
  public isExist: boolean = false;
  constructor(
    private router: Router,
    private proposalService: ProposalService,
    private shareService: SharedService
  ) {}

  ngOnInit(): void {
    this.getPricingCountry();
    this.loadForm();
  }
  isExistPropsalId() {
    let Id = this.proposalForm.get("proposalId").value;
    if (Id != null && Id != "") {
      this.proposalService
        .proposalExist(Id)
        .subscribe((data: any) => (this.isExist = data));
    }
  }
  getPricingCountry() {
    this.proposalService
      .getPricingCountry()
      .subscribe((data: any) => (this.config = data));
  }

  loadForm() {
    this.proposalForm = new FormGroup({
      proposalId: new FormControl("", [Validators.required]),
      pricingCountry: new FormControl(null, [Validators.required]),
      IsDraft: new FormControl(false, [])
    });
  }

  pageRedirect() {
    console.log(this.proposalForm.value);
    var obj = this.proposalForm.value;
    obj["createdByAlias"] = "V2Alias";
    this.shareService.setproposalObs(obj);
    this.router.navigate(["proposaloverview/", ""]);
  }

  createProposal(obj) {
    obj["createdByAlias"] = "V2Alias";
    this.proposalService.createProposal(obj).subscribe((data: any) => {
      var sourceId = data["_sourceObject"].id;
      console.log(sourceId, "sourceId");
      this.router.navigate(["proposaloverview/", sourceId]);
    });
  }
}
