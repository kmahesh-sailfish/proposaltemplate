import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { ProposalService } from "src/app/proposal.service";

@Component({
  selector: "app-mopet-details",
  templateUrl: "./mopet-details.component.html",
  styleUrls: ["./mopet-details.component.css"]
})
export class MopetDetailsComponent implements OnInit {
  public newProposal:any={};
  public opCenterVales: any = [];
  public getLanguages: any = [];
  public userProgram: any = [];
  public userId: any;
  public config: any = [];
  public mopetDetails: any = {};

  public ProposalId: any;
  constructor(
    public proposalService: ProposalService,
    public route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.userId = localStorage.getItem("userAlias");
    // this.getPricingCountry();
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.ProposalId = +params.get("proposalId");
    });
    this.domainLoad();
    this.getProposalById();
  }
  getProposalById() {
    var obj = {
      id: this.ProposalId,
      createdByAlias: this.userId,
      isSuperUser: true
    };
    this.proposalService.getProposal(obj).subscribe((data: any) => {
      this.newProposal=data;
      // this.mopetDetails.proposalId = data["proposalEntity"].proposalId;
      // this.mopetDetails.customerName = data["proposalEntity"].customerName;
      // this.mopetDetails.lastModifiedBy = data["proposalEntity"].lastModifiedBy;
      // this.mopetDetails["proposalEntity"] = data["proposalEntity"];
    });
  }
  domainLoad() {
    this.proposalService.domainConetent().subscribe(data => {
      if (Object.keys(data).length > 0) {
        this.getLanguages = data.languages;
        this.config = data.countries;
        this.userProgram = data["domainData"].programs;
        this.opCenterVales = data["domainData"].operationsCenters;
        this.getUserPreference();
      }
    });
  }
  getUserPreference() {
    this.proposalService.getUserPreferences(this.userId).subscribe(data => {     
      this.mopetDetails = data;
    });
  }
  submitMopet() {
    var obj = {
      Id: this.newProposal.metaData.id,
      CustomerName: this.newProposal.proposalEntity.customerName,
      PricingCountry: this.mopetDetails.pricingCountry,
      LCAlias: "v-skarukonda",
      OperationCenterId: this.mopetDetails.opCenter,
      ProgramId: this.mopetDetails.program,
      Notes: this.newProposal.proposalEntity.comments,
      ProposalId:  this.ProposalId,
      NonPricingFileName: null,
      PricingFileName: null,
      CreatedBy:this.userId,
      IsSuperAdmin: false
    };
    console.log(obj);
    this.proposalService.addMopetDetails(obj).subscribe(data => {
      console.log(data);
    });
  }
  updatemopetDetails(){
    var obj={
      "Id": this.newProposal.metaData.id,
      "CustomerName": this.newProposal.proposalEntity.customerName,
      "PricingCountry": this.newProposal.pricingCountry,
      "LCAlias": this.userId,
      "OperationCenterId": this.mopetDetails.opCenter,
      "ProgramId": this.mopetDetails.program,
      "Notes": this.newProposal.proposalEntity.comments,
      "ProposalId": this.ProposalId,
      "NonPricingFileName": null,
      "PricingFileName": null
    }
    
    this.proposalService.updatemopetDetails(obj).subscribe(data => {
      console.log(data);
    });
  }
}
