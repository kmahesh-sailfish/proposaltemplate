import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { Location } from "@angular/common";
import { ProposalService } from "src/app/proposal.service";
import { FormGroup, FormControl } from "@angular/forms";
import { NgbModalConfig, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { SearchProposalComponent } from "../modeal/search-proposal/search-proposal.component";
import { SharedService } from "../../sharedservices/shared.service";
@Component({
  selector: "app-proposal-overview",
  templateUrl: "./proposal-overview.component.html",
  styleUrls: ["./proposal-overview.component.css"],
  providers: [NgbModalConfig, NgbModal]
})
export class ProposalOverviewComponent implements OnInit {
  public searchAmendment: any;
  public HRDDDetails: any = [];
  public HRDDCountries: any = [];
  public propOverView: FormGroup;
  public sourceId: any;
  public editProposalObj: any = {};
  public config: any[];
  public IdentifierValid: boolean = false;
  public chooseList: any = [
    { ids: 1, name: "Agreement Id" },
    { ids: 2, name: "Enrollment Id" }
  ];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private proposalService: ProposalService,
    private sharedSerivice: SharedService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.loadForm();
    this.getPricingCountry();
    this.getById();
    if (this.sourceId != 0 && this.sourceId != null) {
      this.getProposalById();
    } else {
      this.sharedSerivice.getproposalObs().subscribe(data => {
        this.createProposal(data);
      });
    }
  }
  getById() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.sourceId = +params.get("id");
    });
  }
  createProposal(obj) {
    this.proposalService.createProposal(obj).subscribe((data: any) => {
      this.editProposalObj = data["_sourceObject"];
      console.log(this.editProposalObj, "editProposalObj");
      this.getProposalById();
      this.loadForm();
      this.router.navigate(["proposaloverview/", this.editProposalObj["id"]]);
    });
  }

  getProposalById() {
    var obj = {
      id:
        this.editProposalObj.id != null
          ? this.editProposalObj.id
          : this.sourceId,
      createdByAlias: "V-sanjay",
      isSuperUser: true
    };
    this.proposalService.getProposal(obj).subscribe((data: any) => {
      this.editProposalObj = data["result"]["_sourceObject"];
      console.log(this.editProposalObj, "editProposalObj");
      if (
        this.editProposalObj == null ||
        this.editProposalObj.ID == undefined
      ) {
        // console.log({ content: "Proposal does not exists or you don`t have permissions to view it." });
      }
      this.loadForm();
      this.getHrdCountries();
    });
  }
  getHrdCountries() {
    this.proposalService.getHrdCountries().subscribe((data: any) => {
      this.HRDDDetails = data;
      this.HRDDCountries = data.map(function(country) {
        return country.Name;
      });
      if (this.editProposalObj.PricingCountry != "") {
        data.filter(function(country) {
          if (country.Name == this.editProposalObj.PricingCountry) {
            this.HRDDAmendments = country.HRDDAmendments;
            this.HRDDeal = country.DealAmount;
            this.HRDDiscount = country.Discount;
            this.HRDDCondition = country.HRDDCondition;
          }
        });
      }
    });
  }
  getPricingCountry() {
    this.proposalService
      .getPricingCountry()
      .subscribe((data: any) => (this.config = data));
  }
  addCTM() {
    this.router.navigate(["/ctmlibrary"]);
  }
  // Input blur event .............................

  modifyIdentifier() {
    this.IdentifierValid = false;
  }

  proposalUpdate(event, block) {
    var obj = {
      id: this.editProposalObj.id,
      proposalId: this.editProposalObj.proposalId,
      pricingCountry:
        block == "pricingCountry"
          ? this.propOverView.get("pricingCountry").value
          : this.editProposalObj.pricingCountry,

      enrollmentId:
        block == "enrollmentId"
          ? this.propOverView.get("enrollmentId").value
          : this.editProposalObj.enrollmentId,

      agreementId:
        block == "agreementId"
          ? this.propOverView.get("agreementId").value
          : this.editProposalObj.agreementId,
      identifier:
        block == "identifier"
          ? this.propOverView.get("identifier").value
          : this.editProposalObj.identifier,

      customerName:
        block == "customerName"
          ? this.propOverView.get("customerName").value
          : this.editProposalObj.customerName,

      dealNickname:
        block == "dealNickname"
          ? this.propOverView.get("dealNickname").value
          : this.editProposalObj.dealNickname,

      notes:
        block == "notes"
          ? this.propOverView.get("notes").value
          : this.editProposalObj.notes,

      LastModifiedBy: "v-sanjay"
    };
    this.proposalService.updateProposal(obj).subscribe((data: any) => {
      this.editProposalObj = data["result"]["_sourceObject"];
      console.log(this.editProposalObj, "editProposalObj");
      this.loadForm();
    });
  }

  // form loading -------------------------------------

  loadForm() {
    console.log(this.editProposalObj, "edit");

    this.propOverView = new FormGroup({
      proposalId: new FormControl({
        value: this.editProposalObj.proposalId,
        disabled: true
      }),
      pricingCountry: new FormControl(this.editProposalObj.pricingCountry),
      enrollmentId: new FormControl(this.editProposalObj.enrollmentId),
      agreementId: new FormControl(this.editProposalObj.agreementId),
      customerName: new FormControl(this.editProposalObj.customerName),
      dealNickname: new FormControl(this.editProposalObj.dealNickname),
      identifier: new FormControl(
        this.editProposalObj.identifier ? this.editProposalObj.identifier : ""
      ),
      notes: new FormControl(this.editProposalObj.notes)
    });
  }
  get f() {
    return this.propOverView.controls;
  }
  checkById() {
    debugger;
    if (this.propOverView.get("identifier").value == "") {
      this.IdentifierValid = true;
    }
  }
  open() {
    this.proposalService
      .searchAmendement(this.searchAmendment)
      .subscribe((data: any) => {
        console.log(data);
        this.modalService.open(SearchProposalComponent, {
          // backdrop: "static",
          // keyboard: false,
          size: "lg"
        });
      });
  }
}
