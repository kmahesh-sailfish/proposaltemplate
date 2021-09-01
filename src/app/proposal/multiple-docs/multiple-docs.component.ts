import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ProposalService } from "../../proposal.service";
import { SharedService } from "../../sharedservices/shared.service";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-multiple-docs',
  templateUrl: './multiple-docs.component.html',
  styleUrls: ['./multiple-docs.component.css']
})
export class MultipleDocsComponent implements OnInit {

  public userId: any;
  public proposalForm: FormGroup;
  public config: any[];
  public isExist: boolean = true;
  public isnewExist: boolean = false;
  public checkExist: boolean = true;
  constructor(
    private router: Router,
    private proposalService: ProposalService,
    private shareService: SharedService,
    public toaster:ToastrService
  ) {}

  ngOnInit(): void {
    this.userId = localStorage.getItem('userAlias');
    this.loadForm();
  }
  pageRedirect() {
    if (this.proposalForm.get("masterProposald").value == this.proposalForm.get("additionalProposalId").value) {
      alert({ content: "Master Proposal and Additional Proposal must be different." });
      return;
  }
    if (this.proposalForm.get("additionalProposalId").value != "") {
      var obj = {
        "masterProposalId": this.proposalForm.get("masterProposald").value,
        "additionalProposalId":this.proposalForm.get("additionalProposalId").value,
        "createdByAlias": this.userId,
        "isSuperUser": true
    }
      this.proposalService.multipledocProposal(obj).subscribe((data: any) => {
        if (data !=undefined && data.id > 0) {
          var mess={ content: 'Proposal ID: ' + obj.masterProposalId + ' and Proposal ID: ' + obj.additionalProposalId + " are successfully merged for one customer." }
        this.toaster.success(mess.toString());
           obj.masterProposalId = '';
          obj.additionalProposalId = '';
          //$("#multiple-document-proposal").modal('hide');
      }
      else if (data !=undefined && data.id == -1) {
        var mess= { content: 'Proposal ID ' + obj.additionalProposalId + " already exists with other user/customer. Please try a different ID." }
         this.toaster.success(mess.toString());
      }
      else {
          obj.masterProposalId = '';
          //alert({ content: 'Error occurred while merging proposals.' })
          this.toaster.show({ content: 'Error occurred while merging proposals.' }.toString());
      }
  
        // var sourceId = data.id;
        // console.log(sourceId, "sourceId");
        // this.router.navigate(["proposaloverview/", sourceId]);
      });
    } else {
      // alert("Please provided New proposal Id");
      this.toaster.show("Please provided New proposal Id")
      return;
    }
  }
  loadForm() {
    this.proposalForm = new FormGroup({
      masterProposald: new FormControl("", [Validators.required]),
      additionalProposalId: new FormControl("", [Validators.required])
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
