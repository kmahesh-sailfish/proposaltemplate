import { Component, OnInit } from "@angular/core";
import { RouterModule, Router } from "@angular/router";
import { FormGroup, FormControl, FormArray, Validators } from "@angular/forms";
import { ProposalService } from "../../proposal.service";
import { SharedService } from "../../sharedservices/shared.service";
import { SpecialCharacter } from "src/app/sharedservices/special-character";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-create-proposal",
  templateUrl: "./create-proposal.component.html",
  styleUrls: ["./create-proposal.component.css"],
  providers: [SpecialCharacter]
})
export class CreateProposalComponent implements OnInit {
  public userId: any;
  public proposalForm: FormGroup;
  public userObj: any = {};
  public config: any[];
  public isExist: boolean = false;
  constructor(
    private router: Router,
    private customValidators: SpecialCharacter,
    private proposalService: ProposalService,
    private shareService: SharedService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.userId = localStorage.getItem("userAlias");
    this.getPricingCountry();
    this.userDetails();
    this.loadForm();
  }
  userDetails() {
    this.proposalService.getUserDetails(this.userId).subscribe(data => {
      this.userObj = data["userPreference"];
      this.loadForm();
    });
  }
  isExistPropsalId() {
    let Id = this.proposalForm.get("proposalId").value;
    if (Id != null && Id != "") {
      this.proposalService.proposalExist(Id).subscribe((data: any) => {
        if (data) {
          this.isExist = data;
        } else {
          this.isExist = data;
        }
        
      });
    }
  }
  getPricingCountry() {
    this.proposalService
      .getPricingCountry()
      .subscribe((data: any) => (this.config = data));
  }
  changeValue() {
    
    console.log(this.proposalForm.get("IsDraft").value);
    if (this.proposalForm.get("IsDraft").value) {
      this.proposalForm.controls["proposalId"].clearValidators();
      this.proposalForm.controls["proposalId"].updateValueAndValidity();
    } else {
      this.proposalForm.controls["proposalId"].clearValidators();
      this.proposalForm.controls["proposalId"].setValidators([
        Validators.required
      ]);
      this.proposalForm.controls["proposalId"].updateValueAndValidity();
    }
  }

  loadForm() {
    this.proposalForm = new FormGroup({
      proposalId: new FormControl("", [
        Validators.required,
        this.customValidators.nameValidator
      ]),
      pricingCountry: new FormControl(this.userObj.pricingCountry, [
        Validators.required
      ]),
      IsDraft: new FormControl(false, [])
    });
  }

  pageRedirect() {
    console.log(this.proposalForm.value);
    var obj = this.proposalForm.value;
    obj["createdByAlias"] = this.userId;
    this.shareService.setproposalObs(obj);
    this.router.navigate(["proposaloverview/", ""]);
  }

  createProposal() {
    var obj = this.proposalForm.value;
    obj["createdByAlias"] = this.userId;
    this.proposalService.createProposal(obj).subscribe((data: any) => {
      var sourceId = data.id;
      var msg = "Proposal Created Successfully. ProposalID: " + data.proposalId;
      this.toastr.success(msg, "Success");
      console.log(sourceId, "sourceId");
      this.router.navigate(["proposaloverview/", sourceId,this.proposalForm.get('IsDraft').value]);
    });
  }
}
