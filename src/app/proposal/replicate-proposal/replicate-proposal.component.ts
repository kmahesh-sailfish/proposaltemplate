import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ProposalService } from "../../proposal.service";
import { SharedService } from "../../sharedservices/shared.service";
import { FormGroup, Validators, FormControl } from "@angular/forms";

@Component({
  selector: "app-replicate-proposal",
  templateUrl: "./replicate-proposal.component.html",
  styleUrls: ["./replicate-proposal.component.css"]
})
export class ReplicateProposalComponent implements OnInit {
  public userId: any;
  public proposalForm: FormGroup;
  public config: any[];
  public isExist: boolean = true;
  public isnewExist: boolean = false;
  public checkExist: boolean = true;
  constructor(
    private router: Router,
    private proposalService: ProposalService,
    private shareService: SharedService
  ) {}

  ngOnInit(): void {
    this.userId = localStorage.getItem('userAlias');
    this.loadForm();
  }
  pageRedirect() {
    console.log(this.isExist, "exits");
    console.log(this.isnewExist, "isnewexit");
    if (this.proposalForm.get("newproposalId").value != "") {
      var obj = {
        proposalId: this.proposalForm.get("oldproposalId").value,
        newProposalId: this.proposalForm.get("newproposalId").value,
        createdByAlias: this.userId
      };
      this.proposalService.replicateProposal(obj).subscribe((data: any) => {
        var sourceId = data.id;
        console.log(sourceId, "sourceId");
        this.router.navigate(["proposaloverview/", sourceId,false]);
      });
    } else {
      alert("Please provided New proposal Id");
      return;
    }
  }
  loadForm() {
    this.proposalForm = new FormGroup({
      oldproposalId: new FormControl("", [Validators.required]),
      newproposalId: new FormControl("", [Validators.required])
    });
  }
  newisExistPropsalId(formId) {
    let Id = this.proposalForm.get(formId).value;
    if (Id != null && Id != "") {
      this.proposalService.proposalExist(Id).subscribe((data: any) => {
        this.isnewExist = data;
        if (this.isnewExist) {
          this.checkExist = true;
        } else {
          this.checkExist = false;
        }
      });
    }
  }
  isExistPropsalId(formId) {
    let Id = this.proposalForm.get(formId).value;
    if (Id != null && Id != "") {
      this.proposalService.proposalExist(Id).subscribe((data: any) => {
        this.isExist = data;
        if (this.isExist) {
          this.checkExist = false;
        } else {
          this.checkExist = true;
        }
      });
    }
  }
  
}
