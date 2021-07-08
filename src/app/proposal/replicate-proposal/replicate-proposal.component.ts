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
  public proposalForm: FormGroup;
  public config: any[];
  public isExist: boolean = true;
  public isnewExist: boolean = false;
  public checkExist:boolean=true;
  constructor(
    private router: Router,
    private proposalService: ProposalService,
    private shareService: SharedService
  ) {}

  ngOnInit(): void {
    this.loadForm();
  }
  pageRedirect() {
    console.log(this.isExist, "exits");
    console.log(this.isnewExist, "isnewexit");
    if(this.proposalForm.get("newproposalId").value !=""){
      this.newisExistPropsalId('newproposalId');     
     
    }else{
      alert('Please provided New proposal Id');
      return;
    }
   
  }
  loadForm() {
    this.proposalForm = new FormGroup({
      oldproposalId: new FormControl("", [Validators.required]),
      newproposalId: new FormControl("", [Validators.required])
    });
  }
  isExistPropsalId(formId) {
    let Id = this.proposalForm.get(formId).value;
    if (Id != null && Id != "") {
      this.proposalService
        .proposalExist(Id)
        .subscribe((data: any) => {
          this.isExist = data;
          if(this.isExist){
            this.checkExist =false;
          }else{
            this.checkExist =true;
          }
        });
    }
  }
  newisExistPropsalId(formId):any {
    let Id = this.proposalForm.get(formId).value;
    if (Id != null && Id != "") {
      this.proposalService
        .proposalExist(Id)
        .subscribe((data: any) => {
         
          if(data){
            alert('Proposal Id Already exist')
            return;
          }else{
           var obj = {
           proposalId: this.proposalForm.get("oldproposalId").value,
           newProposalId: this.proposalForm.get("newproposalId").value,
           createdByAlias: "V2Alias"
           };
       this.proposalService.replicateProposal(obj).subscribe((data: any) => {
         var sourceId = data["_sourceObject"].id;
     console.log(sourceId, "sourceId");
        this.router.navigate(["proposaloverview/", sourceId]);
       });
          }
        });
    }
  }
}
