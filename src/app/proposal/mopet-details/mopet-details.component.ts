import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { ProposalService } from "src/app/proposal.service";

@Component({
  selector: "app-mopet-details",
  templateUrl: "./mopet-details.component.html",
  styleUrls: ["./mopet-details.component.css"]
})
export class MopetDetailsComponent implements OnInit {
  public lrdCountries: any;
  public Amendments: any[] = [];
  public showbutton: boolean = false;
  public showLinkedProposalsbutton: boolean;
  public doctype: any;
  public proposalIdentifierReq: boolean = false;
  public model: any;
  public newProposal: any = {};
  public opCenterVales: any = [];
  public getLanguages: any = [];
  public userProgram: any = [];
  public userId: any;
  public config: any = [];
  public mopetDetails: any = {};
  public editProposalObj: any = {};
  public pricingCountries: any[];
  public ProposalId: any;
  constructor(
    public proposalService: ProposalService,
    public route: ActivatedRoute
  ) { }

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
      this.newProposal = data;
      this.model = new Proposal(data);
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
      LCAlias: this.userId,
      OperationCenterId: this.mopetDetails.opCenter,
      ProgramId: this.mopetDetails.program,
      Notes: this.newProposal.proposalEntity.comments,
      ProposalId: this.ProposalId,
      NonPricingFileName: null,
      PricingFileName: null,
      CreatedBy: this.userId,
      IsSuperAdmin: false
    };
    console.log(obj);
    this.proposalService.addMopetDetails(obj).subscribe(data => {
      console.log(data);
    });
  }
  updatemopetDetails() {
    var obj = {
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
  isPricingCountry() {

    if (this.lrdCountries.length > 0) {

      var result = this.lrdCountries.filter((d) => {
        return d == this.editProposalObj['proposalEntity'] ?.pricingCountry
            });
      return result && result.length > 0;
    }

    return false;
  }
  IsPricingAmendmentExists() {
    var IsContainsPricingAmendment = false;
    for (var i = 0; i < this.Amendments.length; i++) {
      var amendmentCode = this.Amendments[i].code.toLowerCase();
      if (amendmentCode.startsWith("p-")) {
        IsContainsPricingAmendment = true;
        break;
      }
    }
    return IsContainsPricingAmendment;
  }
  generate() {
    if (this.model.Identifier != undefined && this.model.Identifier != null && this.model.Identifier != 0) {
      this.proposalIdentifierReq = false;
      if (this.Amendments.length > 0) {
        // console.log("IsPricingAmendmentExists " +IsPricingAmendmentExists())
        if (this.isPricingCountry() || this.IsPricingAmendmentExists()) {
          this.showbutton = true;
        } else if (this.model.IsLinked) {
          this.showLinkedProposalsbutton = true;
          this.doctype = 0;
        } else {
          var obj = {};
          obj['pid'] = this.editProposalObj["proposalEntity"].id;
          obj['type'] = "0";
          obj["userAlias"] = this.editProposalObj['proposalEntity'].createdByAlias;
          obj["isSuperUser"] = false;
          this.proposalService.generateDocFile(obj).subscribe(data => {
            this.saveData(data.content, data.fileName);
          });
          // window.location.href = "/api/proposal/download/" + this.editProposalObj['proposalEntity']?.proposalId, + "/0";
        }

      } else {
        alert('No Amendments in proposal')
        // ngToast.create({ content: "No Amendments in proposal" });
      }
    } else {
      this.proposalIdentifierReq = true;
    }
  }
   base64toBlob(byteString) {
      var ia = new Uint8Array(byteString.length);
      for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }
      return new Blob([ia], { type: "octet/stream" });
    }
  saveData = (function () {
      
      var a = document.createElement("a");
      document.body.appendChild(a);
      // a.style = "display: none";
      return function (data, fileName) {
        console.log(data);
        var json = atob(data),
          blob = this.base64toBlob(json),
          url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = fileName;
        a.click();
        window.URL.revokeObjectURL(url);
      };
    }());
}
function Proposal(data) {
  if( data.proposalEntity != undefined &&  Object.keys(data.proposalEntity).length >0 ){
        this.ID = data.proposalEntity.id;
        this.ProposalId = data.proposalEntity.proposalId;
        this.PricingCountry = data.proposalEntity.pricingCountry;
        // this.Empowerment = data.proposalEntity.Empowerment;
        debugger;
        this.EnrollmentId = data.proposalEntity.enrollmentId;
        this.AgreementId = data.proposalEntity.agreementId;
        this.PageBreak = data.proposalEntity.pageBreak;
        this.CustomerName = data.proposalEntity.customerName;
        this.Identifier = data.proposalEntity.identifier;
        this.DealNickname = data.proposalEntity.dealNickname;
        this.Notes = data.proposalEntity.notes;
        this.HRDDTotalValue = data.proposalEntity.hrddTotalValue;
        this.HRDDMaxDiscount = data.proposalEntity.hrddMaxDiscount;
        this.IsLinked = data.proposalEntity.isLinked;
        this.IsDraft = data.proposalEntity.isDraft;
        // this.vm.isLe ||
        this.IsEditDocumentViewable = data.proposalEntity.delegationStatus == 2 ||
            data.proposalEntity.delegationStatus == 1 || data.isFromDateRangeDelegation;
    }else{
        this.ID = data.id;
        this.ProposalId = data.proposalId;
        this.PricingCountry = data.pricingCountry;
        // this.Empowerment = data.proposalEntity.Empowerment;
        this.EnrollmentId = data.enrollmentId;
        this.AgreementId = data.agreementId;
        this.PageBreak = data.pageBreak;
        this.CustomerName = data.customerName;
        this.Identifier = data.identifier;
        this.DealNickname = data.dealNickname;
        this.Notes = data.notes;
        this.HRDDTotalValue = data.hrddTotalValue;
        this.HRDDMaxDiscount = data.hrddMaxDiscount;
        this.IsLinked = data.isLinked;
        this.IsDraft = data.isDraft;
        // this.vm.isLe ||
        this.IsEditDocumentViewable = data.delegationStatus == 2 ||
            data.delegationStatus == 1 || data.isFromDateRangeDelegation;
    }
   // console.log(data.proposalEntity.identifier,'ident');

    this.Amendments = [];

    if (data.amendments && data.amendments.length > 0) {
        for (var i = 0; i < data.amendments.length; i++) {
            this.Amendments.push(new Amendment(data.amendments[i]));
        }
    }

    // this.ID = data.ID;
}
function Amendment(amendment) {
    // debugger;
    // "amendmentContents": [],
    
    // "ctmFile": null,

    // "ctmFooterId": null,
    // "ctmTitle": null,
    // "documentId": 40269,
    // "isCSDPricing": null,
    // "isConsolidated": null,
    // "link": null,
    // "proposal": [],
    // "proposalID": 257707,
    // "replaceCTMTitle": false,
    // "ver": null,

    this.Code = amendment.code ? amendment.code: amendment.amendmentCode;
    this.Language = amendment.language;
    this.Id = amendment.id;
    this.Empowerment = amendment.empowerment,
        this.Order = amendment.order;
    this.CTMCode = amendment.ctmCode;
    if(amendment.code != undefined){
        this.FileName = amendment.code.indexOf("CTM") >= 0 ? amendment.FileName : '';
    }else{
        if(amendment.amendmentCode != undefined){
            this.FileName = amendment.amendmentCode.indexOf("CTM") >= 0 ? amendment.FileName : '';
        }
       
    }
    
    this.IsCTMPricing = amendment.isCTMPricing;
    this.IsPricingAmendment = amendment.isPricingAmendment;
    this.HasEditableTable = amendment.hasEditableTable;
    this.IsEdited = amendment.isEdited ? "Yes" : "No";
    this.IsEditField = amendment.isEditField ? "Yes" : "No";
    this.Discount = amendment.discount;
    this.DealSize = amendment.dealSize;
    this.BeginDate = amendment.beginDate;
    this.EndDate = amendment.endDate;
    this.CommitToConsume = amendment.commitToConsume;
    this.CurrencyCode = amendment.currencyCode;
    this.Type = amendment.type;

    if (amendment.code != undefined && amendment.code.indexOf("CTM") == -1) {
        this.Title = amendment.fileName;
        this.Version = amendment.fileVersion;
        this.Loc = amendment.loc;
        this.DI = amendment.di;
    }
    if (amendment.amendmentCode != undefined && amendment.amendmentCode.indexOf("CTM") == -1) {
        this.Title = amendment.fileName;
        this.Version = amendment.fileVersion;
        this.Loc = amendment.loc;
        this.DI = amendment.di;
    }
 }

