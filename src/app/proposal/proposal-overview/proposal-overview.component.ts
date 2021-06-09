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
  public modelRef: any;
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
  public Amendments: any = [
  {
    "retrivalCount": 15,
    "PId": 0,
    "Id": 3322,
    "Code": "M426",
    "CTMAmendmentCode": null,
    "Language": "JPN",
    "Empowerment": "Blue",
    "DocumentId": 65269,
    "IsCTM": false,
    "Stream": "",
    "FileName": "(M426)EnrAmend(5YearEnrollment)(WW)(JPN)(Apr2020)(IU).docx",
    "CTMFooterCode": null,
    "BlobStoragePath": null,
    "Order": 1,
    "FileVersion": "Apr2020",
    "Loc": "WW",
    "DI": "",
    "IsEdited": false,
    "IsConsolidated": false,
    "Type": 0,
    "CTMCode": null,
    "Link": null,
    "IsPricingAmendment": false,
    "IsCTMPricing": false,
    "FooterCode": null,
    "IsEditField": false,
    "IsCTMAmendment": false,
    "HasEditableTable": false,
    "Discount": null,
    "DealSize": null,
    "BeginDate": null,
    "EndDate": null,
    "CommitToConsume": null,
    "CurrencyCode": null,
    "CTMFooterId": null
  },
  {
    "retrivalCount": 15,
    "PId": 0,
    "Id": 3321,
    "Code": "M455",
    "CTMAmendmentCode": null,
    "Language": "ENG",
    "Empowerment": "Blue",
    "DocumentId": 67099,
    "IsCTM": false,
    "Stream": "",
    "FileName": "(M455)EnrAmend(AzureMonetaryCommitmentAdjustment)(WW)(ENG)(Nov2020)(IU).docx",
    "CTMFooterCode": null,
    "BlobStoragePath": null,
    "Order": 2,
    "FileVersion": "Nov2020",
    "Loc": "WW",
    "DI": "",
    "IsEdited": false,
    "IsConsolidated": false,
    "Type": 0,
    "CTMCode": null,
    "Link": null,
    "IsPricingAmendment": false,
    "IsCTMPricing": false,
    "FooterCode": null,
    "IsEditField": false,
    "IsCTMAmendment": false,
    "HasEditableTable": false,
    "Discount": null,
    "DealSize": null,
    "BeginDate": null,
    "EndDate": null,
    "CommitToConsume": null,
    "CurrencyCode": null,
    "CTMFooterId": null
  },
  {
    "retrivalCount": 15,
    "PId": 0,
    "Id": 3330,
    "Code": "M59",
    "CTMAmendmentCode": null,
    "Language": "ENG",
    "Empowerment": "Green",
    "DocumentId": 45588,
    "IsCTM": false,
    "Stream": "",
    "FileName": "(M59)EnrAmend(CustomPaymentOptionsOnEnterpriseEnrollment)(WW)(ENG)(Aug2017)(IU).docx",
    "CTMFooterCode": null,
    "BlobStoragePath": null,
    "Order": 3,
    "FileVersion": "Aug2017",
    "Loc": "WW",
    "DI": "",
    "IsEdited": false,
    "IsConsolidated": false,
    "Type": 0,
    "CTMCode": null,
    "Link": null,
    "IsPricingAmendment": false,
    "IsCTMPricing": false,
    "FooterCode": null,
    "IsEditField": false,
    "IsCTMAmendment": false,
    "HasEditableTable": false,
    "Discount": null,
    "DealSize": null,
    "BeginDate": null,
    "EndDate": null,
    "CommitToConsume": null,
    "CurrencyCode": null,
    "CTMFooterId": null
  },
  {
    "retrivalCount": 15,
    "PId": 0,
    "Id": 3331,
    "Code": "M414",
    "CTMAmendmentCode": null,
    "Language": "PTB",
    "Empowerment": "Blue",
    "DocumentId": 67709,
    "IsCTM": false,
    "Stream": "",
    "FileName": "(M414)EnrAmend(NonOLSDownloadCorrection)(WW)(PTB)(Jan2021)(IU).docx",
    "CTMFooterCode": null,
    "BlobStoragePath": null,
    "Order": 4,
    "FileVersion": "Jan2021",
    "Loc": "WW",
    "DI": "",
    "IsEdited": false,
    "IsConsolidated": false,
    "Type": 0,
    "CTMCode": null,
    "Link": null,
    "IsPricingAmendment": false,
    "IsCTMPricing": false,
    "FooterCode": null,
    "IsEditField": false,
    "IsCTMAmendment": false,
    "HasEditableTable": true,
    "Discount": null,
    "DealSize": null,
    "BeginDate": null,
    "EndDate": null,
    "CommitToConsume": null,
    "CurrencyCode": null,
    "CTMFooterId": null
  },
  {
    "retrivalCount": 15,
    "PId": 0,
    "Id": 3335,
    "Code": "M405",
    "CTMAmendmentCode": null,
    "Language": "PTE",
    "Empowerment": "Blue",
    "DocumentId": 52898,
    "IsCTM": false,
    "Stream": "",
    "FileName": "(M405)EnrAmend(SQLServerCompetitiveMigrationOffer)(WW)(PTE)(Jan2018)(IU).docx",
    "CTMFooterCode": null,
    "BlobStoragePath": null,
    "Order": 5,
    "FileVersion": "Jan2018",
    "Loc": "WW",
    "DI": "",
    "IsEdited": false,
    "IsConsolidated": false,
    "Type": 0,
    "CTMCode": null,
    "Link": null,
    "IsPricingAmendment": false,
    "IsCTMPricing": false,
    "FooterCode": null,
    "IsEditField": false,
    "IsCTMAmendment": false,
    "HasEditableTable": true,
    "Discount": null,
    "DealSize": null,
    "BeginDate": null,
    "EndDate": null,
    "CommitToConsume": null,
    "CurrencyCode": null,
    "CTMFooterId": null
  }
]
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
      if (this.editProposalObj.pricingCountry != "") {
        data.filter(function(country) {
          if (country.Name == this.editProposalObj.pricingCountry) {
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
    // this.proposalService
    //   .searchAmendement(this.searchAmendment)
    //   .subscribe((data: any) => {
    //     console.log(data);
    const modelRef = this.modalService.open(SearchProposalComponent, {
      // backdrop: "static",
      // keyboard: false,
      size: "lg"
    });
    modelRef.componentInstance.searchAmendList = [
      {
        Id: 52898,
        DocName: "M405 : SQL Server Competitive Migration Offer",
        FileName:
          "(M405)EnrAmend(SQLServerCompetitiveMigrationOffer)(WW)(PTE)(Jan2018)(IU).docx",
        Language: "PTE",
        Code: "M405",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 53903,
        DocName: "M455 : Azure Monetary Commitment Adjustment",
        FileName:
          "(M455)EnrAmend(AzureMonetaryCommitmentAdjustment)(WW)(PTE)(Jan2018)(IU).docx",
        Language: "PTE",
        Code: "M455",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 64980,
        DocName: "M488 : M365 F3 Shared Account for Firstline Workers",
        FileName:
          "(M488)EnrAmend(M365F3SharedAccountforFirstlineWorkers)(WW)(PTE)(Apr2020)(IU).docx",
        Language: "PTE",
        Code: "M488",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 65009,
        DocName:
          "M496 : Grant Microsoft 365 F1 Office 365 Enterprise Suites and Componentized Microsoft 365 Access to Office Productivity Servers",
        FileName:
          "(M496)EnrollAmend(AccesstoOfficeProductivityServers)(WW)(PTE)(Apr2020)(IU).docx",
        Language: "PTE",
        Code: "M496",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 49934,
        DocName: "M406 : SQL Server Competitive Migration Offer (Government)",
        FileName:
          "(M406)EnrAmend(SQLServerCompetitiveMigrationOffer)(WW)(Gov)(PTE)(Aug2017)(IU).docx",
        Language: "PTE",
        Code: "M406",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 67837,
        DocName: "M452 : Reconciliation for Reservation on Wrong Enrollment",
        FileName:
          "(M452)EnrAmend(ReconciliationforReservationError)(WW)(JPN)(Jan2021)(IU).docx",
        Language: "JPN",
        Code: "M452",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 67908,
        DocName: "M488 : M365 F3 Shared Account for Firstline Workers",
        FileName:
          "(M488)EnrAmend(M365F3SharedAccountforFirstlineWorkers)(WW)(JPN)(Jan2021)(IU).docx",
        Language: "JPN",
        Code: "M488",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 68820,
        DocName: "M413 : Windows 10 Enterprise Per User for Shared Devices",
        FileName:
          "(M413)EnrAmend(Windows10EnterprisePerUserforSharedDevices)(WW)(JPN)(Apr2021)(IU).docx",
        Language: "JPN",
        Code: "M413",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 65268,
        DocName: "M425 : OLS-only Enrollment Under 36 Months",
        FileName:
          "(M425)EnrAmend(OLS-onlyEnrollmentUnder36Months)(WW)(JPN)(Apr2020)(IU).docx",
        Language: "JPN",
        Code: "M425",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 65269,
        DocName: "M426 : 5 Year Enrollment",
        FileName: "(M426)EnrAmend(5YearEnrollment)(WW)(JPN)(Apr2020)(IU).docx",
        Language: "JPN",
        Code: "M426",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 67341,
        DocName: "M464 : Azure Monetary Commitment Adjustment",
        FileName:
          "(M464)EnrAmend(AzureMonetaryCommitmentAdjustment)(WW)(JPN)(Nov2020)(IU).docx",
        Language: "JPN",
        Code: "M464",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 61064,
        DocName: "M486 : Contract Tie Addition",
        FileName:
          "(M486)AgrAmend(ContractTieAddition)(WW)(JPN)(Jun2019)(IU).docx",
        Language: "JPN",
        Code: "M486",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 62383,
        DocName: "M456 : Invoice for Quoted Price",
        FileName:
          "(M456)EnrAmend(InvoiceforQuotedPrice)(WW)(JPN)(Aug2019)(IU).docx",
        Language: "JPN",
        Code: "M456",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 53999,
        DocName: "M490 : Microsoft Dynamics 365 for Marketing",
        FileName:
          "(M490)EnrAmend(MicrosoftDynamics365forMarketing)(WW)(JPN)(Apr2018)(IU).docx",
        Language: "JPN",
        Code: "M490",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 57569,
        DocName: "M436 : Divestiture Transition Period",
        FileName:
          "(M436)EnrAmend(DivestitureTransitionPeriod)(WW)(JPN)(Apr2019)(IU).docx",
        Language: "JPN",
        Code: "M436",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 52895,
        DocName: "M405 : SQL Server Competitive Migration Offer",
        FileName:
          "(M405)EnrAmend(SQLServerCompetitiveMigrationOffer)(WW)(JPN)(Jan2018)(IU).docx",
        Language: "JPN",
        Code: "M405",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 50717,
        DocName: "M437 : Temporary On-Premises Usage",
        FileName:
          "(M437)EnrAmend(TemporaryOn-PremisesUsage)(WW)(JPN)(Oct2017)(IU).docx",
        Language: "JPN",
        Code: "M437",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 49931,
        DocName: "M406 : SQL Server Competitive Migration Offer (Government)",
        FileName:
          "(M406)EnrAmend(SQLServerCompetitiveMigrationOffer)(WW)(Gov)(JPN)(Aug2017)(IU).docx",
        Language: "JPN",
        Code: "M406",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 49942,
        DocName: "M406 : SQL Server Competitive Migration Offer (Government)",
        FileName:
          "(M406)EnrAmend(SQLServerCompetitiveMigrationOffer)(WW)(Gov)(GER)(Aug2017)(IU).docx",
        Language: "GER",
        Code: "M406",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 52893,
        DocName: "M405 : SQL Server Competitive Migration Offer",
        FileName:
          "(M405)EnrAmend(SQLServerCompetitiveMigrationOffer)(WW)(GER)(Jan2018)(IU).docx",
        Language: "GER",
        Code: "M405",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 64088,
        DocName: "M416 : Supplement to the Terms",
        FileName:
          "(M416)EnrAmend(SupplementtotheTerms)(WW)(GER)(Dec2019)(IU).docx",
        Language: "GER",
        Code: "M416",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 67168,
        DocName: "M456 : Invoice for Quoted Price",
        FileName:
          "(M456)EnrAmend(InvoiceforQuotedPrice)(WW)(SER)(Nov2020)(IU).docx",
        Language: "SER",
        Code: "M456",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 68819,
        DocName: "M413 : Windows 10 Enterprise Per User for Shared Devices",
        FileName:
          "(M413)EnrAmend(Windows10EnterprisePerUserforSharedDevices)(WW)(GER)(Apr2021)(IU).docx",
        Language: "GER",
        Code: "M413",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 68818,
        DocName: "M413 : Windows 10 Enterprise Per User for Shared Devices",
        FileName:
          "(M413)EnrAmend(Windows10EnterprisePerUserforSharedDevices)(WW)(CZE)(Apr2021)(IU).docx",
        Language: "CZE",
        Code: "M413",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 64248,
        DocName: "M456 : Invoice for Quoted Price",
        FileName:
          "(M456)EnrAmend(InvoiceforQuotedPrice)(WW)(CZE)(Jan2020)(IU).docx",
        Language: "CZE",
        Code: "M456",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 62384,
        DocName: "M456 : Invoice for Quoted Price",
        FileName:
          "(M456)EnrAmend(InvoiceforQuotedPrice)(WW)(KOR)(Aug2019)(IU).docx",
        Language: "KOR",
        Code: "M456",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 65007,
        DocName:
          "M496 : Grant Microsoft 365 F1 Office 365 Enterprise Suites and Componentized Microsoft 365 Access to Office Productivity Servers",
        FileName:
          "(M496)EnrollAmend(AccesstoOfficeProductivityServers)(WW)(CZE)(Apr2020)(IU).docx",
        Language: "CZE",
        Code: "M496",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 53325,
        DocName: "M403 : Enrollment Effective Date",
        FileName:
          "(M403)EnrAmend(EnrollmentEffectiveDate)(WW)(CZE)(Feb2018)(IU).docx",
        Language: "CZE",
        Code: "M403",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 49933,
        DocName: "M406 : SQL Server Competitive Migration Offer (Government)",
        FileName:
          "(M406)EnrAmend(SQLServerCompetitiveMigrationOffer)(WW)(Gov)(PTB)(Aug2017)(IU).docx",
        Language: "PTB",
        Code: "M406",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 51017,
        DocName: "M477 : Strategic Cloud Replacement (Direct)",
        FileName:
          "(M477)EnrAmend(StrategicCloudReplacement)(WW)(PTB)(Dir)(Nov2017)(IU).docx",
        Language: "PTB",
        Code: "M477",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 47116,
        DocName: "M425 : OLS-only Enrollment Under 36 Months",
        FileName:
          "(M425)EnrAmend(OLS-onlyEnrollmentUnder36Months)(WW)(PTB)(Aug2017)(IU).docx",
        Language: "PTB",
        Code: "M425",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 47124,
        DocName: "M426 : 5 Year Enrollment",
        FileName: "(M426)EnrAmend(5YearEnrollment)(WW)(PTB)(Aug2017)(IU).docx",
        Language: "PTB",
        Code: "M426",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 54639,
        DocName: "M437 : Temporary On-Premises Usage",
        FileName:
          "(M437)EnrAmend(TemporaryOn-PremisesUsage)(WW)(PTB)(Oct2017)(IU).docx",
        Language: "PTB",
        Code: "M437",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 52897,
        DocName: "M405 : SQL Server Competitive Migration Offer",
        FileName:
          "(M405)EnrAmend(SQLServerCompetitiveMigrationOffer)(WW)(PTB)(Jan2018)(IU).docx",
        Language: "PTB",
        Code: "M405",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 52470,
        DocName:
          "M408 : MCS or Premier Gratuitous Services  in VL – Government Partner",
        FileName:
          "(M408)GPPAmend(MCSorPremierGratuitousServices-GP)(WW)(PTB)(Aug2017)(Internal)(IU).docx",
        Language: "PTB",
        Code: "M408",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 52471,
        DocName:
          "M409 : Partner Gratuitous Services in VL –  Government Partner",
        FileName:
          "(M409)GPPAmend(PartnerGratuitousServicesinVL-GP)(WW)(PTB)(Aug2017)(IU).docx",
        Language: "PTB",
        Code: "M409",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 53902,
        DocName: "M455 : Azure Monetary Commitment Adjustment",
        FileName:
          "(M455)EnrAmend(AzureMonetaryCommitmentAdjustment)(WW)(PTB)(Jan2018)(IU).docx",
        Language: "PTB",
        Code: "M455",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 53577,
        DocName: "L-M415 : Non-OLS Download Correction with Credits",
        FileName:
          "(L-M415)EnrAmend(NonOLSDownloadCorrectionwithCredits)(WW)(PTB)(Feb2018)(IU).docx",
        Language: "PTB",
        Code: "L-M415",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 53586,
        DocName: "P-M414 : Non-OLS Download Correction",
        FileName:
          "(P-M414)EnrAmend(NonOLSDownloadCorrection)(WW)(PTB)(Feb2018)(IU).docx",
        Language: "PTB",
        Code: "P-M414",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 53588,
        DocName: "P-M415 : Non-OLS Download Correction with Credits",
        FileName:
          "(P-M415)EnrAmend(NonOLSDownloadCorrectionwithCredits)(WW)(PTB)(Feb2018)(IU).docx",
        Language: "PTB",
        Code: "P-M415",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 67346,
        DocName: "M464 : Azure Monetary Commitment Adjustment",
        FileName:
          "(M464)EnrAmend(AzureMonetaryCommitmentAdjustment)(WW)(PTB)(Nov2020)(IU).docx",
        Language: "PTB",
        Code: "M464",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 57570,
        DocName: "M436 : Divestiture Transition Period",
        FileName:
          "(M436)EnrAmend(DivestitureTransitionPeriod)(WW)(PTB)(Apr2019)(IU).docx",
        Language: "PTB",
        Code: "M436",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 57379,
        DocName: "M428 : DevOps and Mobile Application Development Offer",
        FileName:
          "(M428)EnrAmend(DevOpsandMobileApplicationDevelopmentOffer)(WW)(PTB)(Mar2019)v2(IU).docx",
        Language: "PTB",
        Code: "M428",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 62512,
        DocName: "M403 : Enrollment Effective Date",
        FileName:
          "(M403)EnrAmend(EnrollmentEffectiveDate)(WW)(PTB)(Sep2019)(IU).docx",
        Language: "PTB",
        Code: "M403",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 68821,
        DocName: "M413 : Windows 10 Enterprise Per User for Shared Devices",
        FileName:
          "(M413)EnrAmend(Windows10EnterprisePerUserforSharedDevices)(WW)(PTB)(Apr2021)(IU).docx",
        Language: "PTB",
        Code: "M413",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 67836,
        DocName: "M452 : Reconciliation for Reservation on Wrong Enrollment",
        FileName:
          "(M452)EnrAmend(ReconciliationforReservationError)(WW)(PTB)(Jan2021)(IU).docx",
        Language: "PTB",
        Code: "M452",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 67715,
        DocName: "M415 : Non-OLS Download Correction with Credits",
        FileName:
          "(M415)EnrAmend(NonOLSDownloadCorrectionWithCredits)(WW)(PTB)(Jan2021)(IU).docx",
        Language: "PTB",
        Code: "M415",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 67709,
        DocName: "M414 : Non-OLS Download Correction",
        FileName:
          "(M414)EnrAmend(NonOLSDownloadCorrection)(WW)(PTB)(Jan2021)(IU).docx",
        Language: "PTB",
        Code: "M414",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 68436,
        DocName:
          "M496 : Grant Microsoft 365 F1 Office 365 Enterprise Suites and Componentized Microsoft 365 Access to Office Productivity Servers",
        FileName:
          "(M496)EnrollAmend(AccesstoOfficeProductivityServers)(WW)(PTB)(Mar2021)(IU).docx",
        Language: "PTB",
        Code: "M496",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 63699,
        DocName: "M436 : Divestiture Transition Period",
        FileName:
          "(M436)EnrAmend(DivestitureTransitionPeriod)(WW)(ITA)(Nov2019)(IU).docx",
        Language: "ITA",
        Code: "M436",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 52894,
        DocName: "M405 : SQL Server Competitive Migration Offer",
        FileName:
          "(M405)EnrAmend(SQLServerCompetitiveMigrationOffer)(WW)(ITA)(Jan2018)(IU).docx",
        Language: "ITA",
        Code: "M405",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 49930,
        DocName: "M406 : SQL Server Competitive Migration Offer (Government)",
        FileName:
          "(M406)EnrAmend(SQLServerCompetitiveMigrationOffer)(WW)(Gov)(ITA)(Aug2017)(IU).docx",
        Language: "ITA",
        Code: "M406",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 49939,
        DocName: "M406 : SQL Server Competitive Migration Offer (Government)",
        FileName:
          "(M406)EnrAmend(SQLServerCompetitiveMigrationOffer)(WW)(Gov)(DUT)(Aug2017)(IU).docx",
        Language: "DUT",
        Code: "M406",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 52891,
        DocName: "M405 : SQL Server Competitive Migration Offer",
        FileName:
          "(M405)EnrAmend(SQLServerCompetitiveMigrationOffer)(WW)(DUT)(Jan2018)(IU).docx",
        Language: "DUT",
        Code: "M405",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 68189,
        DocName: "M464 : Azure Monetary Commitment Adjustment",
        FileName:
          "(M464)EnrAmend(AzureMonetaryCommitmentAdjustment)(WW)(DUT)(Feb2021)(IU).docx",
        Language: "DUT",
        Code: "M464",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 68722,
        DocName: "M413 : Windows 10 Enterprise Per User for Shared Devices",
        FileName:
          "(M413)EnrAmend(Windows10EnterprisePerUserforSharedDevices)(WW)(ENG)(Apr2021)v2(IU).docx",
        Language: "ENG",
        Code: "M413",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 67710,
        DocName: "M414 : Non-OLS Download Correction",
        FileName:
          "(M414)EnrAmend(NonOLSDownloadCorrection)(WW)(ENG)(Jan2021)(IU).docx",
        Language: "ENG",
        Code: "M414",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 67716,
        DocName: "M415 : Non-OLS Download Correction with Credits",
        FileName:
          "(M415)EnrAmend(NonOLSDownloadCorrectionWithCredits)(WW)(ENG)(Jan2021)(IU).docx",
        Language: "ENG",
        Code: "M415",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 67719,
        DocName: "M452 : Reconciliation for Reservation on Wrong Enrollment",
        FileName:
          "(M452)EnrAmend(ReconciliationforReservationError)(WW)(ENG)(Jan2021)(IU).docx",
        Language: "ENG",
        Code: "M452",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 67746,
        DocName:
          "M457 : O365 US Government Defense and Azure Government DFARS 252.204-7012",
        FileName:
          "(M457)EnrAmend(O365GCCGCCHighandAzureGovernmentDFARS252204-7012)(US)(ENG)(Jan2021(IU).docx",
        Language: "ENG",
        Code: "M457",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 68071,
        DocName: "M436 : Divestiture Transition Period",
        FileName:
          "(M436)EnrAmend(DivestitureTransitionPeriod)(WW)(ENG)(Feb2021)(IU).docx",
        Language: "ENG",
        Code: "M436",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 68188,
        DocName: "M464 : Azure Monetary Commitment Adjustment",
        FileName:
          "(M464)EnrAmend(AzureMonetaryCommitmentAdjustment)(WW)(ENG)(Feb2021)(IU).docx",
        Language: "ENG",
        Code: "M464",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 68963,
        DocName: "M456 : Invoice for Quoted Price",
        FileName:
          "(M456)EnrAmend(InvoiceforQuotedPrice)(WW)(ITA)(May2021)(IU).docx",
        Language: "ENG",
        Code: "M456",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 66974,
        DocName: "M456 : Invoice for Quoted Price",
        FileName:
          "(M456)EnrAmend(InvoiceforQuotedPrice)(WW)(ENG)(Oct2020)(IU).docx",
        Language: "ENG",
        Code: "M456",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 67099,
        DocName: "M455 : Azure Monetary Commitment Adjustment",
        FileName:
          "(M455)EnrAmend(AzureMonetaryCommitmentAdjustment)(WW)(ENG)(Nov2020)(IU).docx",
        Language: "ENG",
        Code: "M455",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 67154,
        DocName:
          "M496 : Grant Microsoft 365 F1 Office 365 Enterprise Suites and Componentized Microsoft 365 Access to Office Productivity Servers",
        FileName:
          "(M496)EnrollAmend(AccesstoOfficeProductivityServers)(WW)(ENG)(Nov2020)(IU).docx",
        Language: "ENG",
        Code: "M496",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 67340,
        DocName: "M464 : Azure Monetary Commitment Adjustment",
        FileName:
          "(M464)EnrAmend(AzureMonetaryCommitmentAdjustment)(WW)(ENG)(Nov2020)(IU).docx",
        Language: "ENG",
        Code: "M464",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 66372,
        DocName: "M459 : Multi-Tenant Enrollment for Office 365 GCC High",
        FileName:
          "(M459)EnrAmend(Multi-TenantEnrollmentforOffice365GCCHigh)(US)(ENG)(Sept2020)(IU).docx",
        Language: "ENG",
        Code: "M459",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 65021,
        DocName:
          "M485 : Sub 500 GCC High for Commercial Organizations Holding US Government Controlled Information",
        FileName:
          "(M485)EnrAmend(Sub500GCCHighforCommercialOrganizationsHoldingUSGovernmentControlledInformation)(US)(ENG)(Apr2020)(IU).docx",
        Language: "ENG",
        Code: "M485",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 64978,
        DocName: "M488 : M365 F3 Shared Account for Firstline Workers",
        FileName:
          "(M488)EnrAmend(M365F3SharedAccountforFirstlineWorkers)(WW)(ENG)(Apr2020)(IU).docx",
        Language: "ENG",
        Code: "M488",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 56909,
        DocName: "M441 : Azure Government IRS1075",
        FileName:
          "(M441)EnrAmend(AzureGovernmentIRS1075)(WW)(ENG)(Jan2019)(IU).docx",
        Language: "ENG",
        Code: "M441",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 56910,
        DocName:
          "M442 : Office 365 US Government Community and Azure Government IRS1075",
        FileName:
          "(M442)EnrAmend(Office365USGovernmentCommunityandAzureGovernmentIRS1075)(WW)(ENG)(Jan2019)(IU).docx",
        Language: "ENG",
        Code: "M442",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 57378,
        DocName: "M428 : DevOps and Mobile Application Development Offer",
        FileName:
          "(M428)EnrAmend(DevOpsandMobileApplicationDevelopmentOffer)(WW)(ENG)(Mar2019)v2(IU).docx",
        Language: "ENG",
        Code: "M428",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 62613,
        DocName: "M458 : US Azure Government DFARS 252.204-7012",
        FileName:
          "(M458)EnrAmend(USAzureGovernmentDFARS252204-7012)(US)SLG(ENG)(Sep2019)(IU).docx",
        Language: "ENG",
        Code: "M458",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 64021,
        DocName: "M477 : Strategic Cloud Replacement (Direct)",
        FileName:
          "(M477)EnrAmend(StrategicCloudReplacement)(WW)(ENG)(Dir)(Dec2019)(IU).docx",
        Language: "ENG",
        Code: "M477",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 53348,
        DocName: "M405 : SQL Server Competitive Migration Offer",
        FileName:
          "(M405)EnrAmend(SQLServerCompetitiveMigrationOffer)(WW)(ENG)(Feb2018)(IU).docx",
        Language: "ENG",
        Code: "M405",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 53353,
        DocName: "L-M415 : Non-OLS Download Correction with Credits",
        FileName:
          "(L-M415)EnrAmend(NonOLSDownloadCorrectionwithCredits)(WW)(ENG)(Feb2018)(IU).docx",
        Language: "ENG",
        Code: "L-M415",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 53354,
        DocName: "P-M414 : Non-OLS Download Correction",
        FileName:
          "(P-M414)EnrAmend(NonOLSDownloadCorrection)(WW)(ENG)(Feb2018)(IU).docx",
        Language: "ENG",
        Code: "P-M414",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 53355,
        DocName: "P-M415 : Non-OLS Download Correction with Credits",
        FileName:
          "(P-M415)EnrAmend(NonOLSDownloadCorrectionwithCredits)(WW)(ENG)(Feb2018)(IU).docx",
        Language: "ENG",
        Code: "P-M415",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 53326,
        DocName: "M403 : Enrollment Effective Date",
        FileName:
          "(M403)EnrAmend(EnrollmentEffectiveDate)(WW)(ENG)(Feb2018)(IU).docx",
        Language: "ENG",
        Code: "M403",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 56115,
        DocName:
          "M497 : European Union General Data Protection Regulation Terms",
        FileName:
          "(M497)EnrAmend(EuropeanUnionGeneralDataProtectionRegulationTerms)(WW)(ENG)(Sep2018)(IU).docx",
        Language: "ENG",
        Code: "M497",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 56233,
        DocName: "M486 : Contract Tie Addition",
        FileName:
          "(M486)AgrAmend(ContractTieAddition)(WW)(ENG)(Oct2018)(IU).docx",
        Language: "ENG",
        Code: "M486",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 54218,
        DocName: "M490 : Microsoft Dynamics 365 for Marketing",
        FileName:
          "(M490)EnrAmend(MicrosoftDynamics365forMarketing)(WW)(ENG)(May2018)(IU).docx",
        Language: "ENG",
        Code: "M490",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 48330,
        DocName: "M448 : Azure Monetary Commitment Transfer",
        FileName:
          "(M448)EnrAmend(AzureMonetaryCommitmentTransfer)(WW)(ENG)(Aug2017)(IU).DOCX",
        Language: "ENG",
        Code: "M448",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 48331,
        DocName: "M447 : Privacy Shield",
        FileName: "(M447)EnrAmend(PrivacyShield)(WW)(ENG)(Aug2017)(IU).DOCX",
        Language: "ENG",
        Code: "M447",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 47120,
        DocName: "M426 : 5 Year Enrollment",
        FileName: "(M426)EnrAmend(5YearEnrollment)(WW)(ENG)(Aug2017)(IU).docx",
        Language: "ENG",
        Code: "M426",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 47111,
        DocName: "M425 : OLS-only Enrollment Under 36 Months",
        FileName:
          "(M425)EnrAmend(OLS-onlyEnrollmentUnder36Months)(WW)(ENG)(Aug2017)(IU).docx",
        Language: "ENG",
        Code: "M425",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 47031,
        DocName: "M416 : Supplement to the Terms",
        FileName:
          "(M416)EnrAmend(SupplementtotheTerms)(WW)(ENG)(Aug2017)(IU).docx",
        Language: "ENG",
        Code: "M416",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 51032,
        DocName: "M443 : ITAR Compliance – US Government Cloud",
        FileName:
          "(M443)EnrAmend(ITARCompliance–USGovernmentCloud)(US)(ENG)(Nov2017)v2(IU).docx",
        Language: "ENG",
        Code: "M443",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 51038,
        DocName: "M482 : Microsoft Relationship Sales Add-on to Dynamics 365",
        FileName:
          "(M482)EnrAmend(MicrosoftRelationshipSalesAdd-ontoDynamics365)(WW)(ENG)(Nov2017)(IU).docx",
        Language: "ENG",
        Code: "M482",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 49940,
        DocName: "M406 : SQL Server Competitive Migration Offer (Government)",
        FileName:
          "(M406)EnrAmend(SQLServerCompetitiveMigrationOffer)(WW)(Gov)(ENG)(Aug2017)(IU).docx",
        Language: "ENG",
        Code: "M406",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 50361,
        DocName: "M437 : Temporary On-Premises Usage",
        FileName:
          "(M437)EnrAmend(TemporaryOn-PremisesUsage)(WW)(ENG)(Oct2017)(IU).docx",
        Language: "ENG",
        Code: "M437",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 51024,
        DocName: "M479 : Strategic Cloud Replacement (Direct)",
        FileName:
          "(M479)EnrAmend(StrategicCloudReplacement)(WW)(ENG)(Dir)(Nov2017)(IU).docx",
        Language: "ENG",
        Code: "M479",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 50850,
        DocName: "M474 : Corresponding Online Service Purchase (Direct)",
        FileName:
          "(M474)EnrAmend(CorrespondingOnlineServicePurchase)(WW)(ENG)(Dir)(Nov2017)(IU).docx",
        Language: "ENG",
        Code: "M474",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 50851,
        DocName: "M475 : Corresponding Online Service Activation (Direct)",
        FileName:
          "(M475)EnrAmend(CorrespondingOnlineServiceActivation)(WW)(ENG)(Dir)(Nov2017)(IU).docx",
        Language: "ENG",
        Code: "M475",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 46858,
        DocName:
          "M408 : MCS or Premier Gratuitous Services  in VL – Government Partner",
        FileName:
          "(M408)GPPAmend(MCSorPremierGratuitousServices-GP)(WW)(ENG)(Aug2017)(Internal)(IU).docx",
        Language: "ENG",
        Code: "M408",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 46859,
        DocName:
          "M409 : Partner Gratuitous Services in VL –  Government Partner",
        FileName:
          "(M409)GPPAmend(PartnerGratuitousServicesinVL-GP)(WW)(ENG)(Aug2017)(IU).docx",
        Language: "ENG",
        Code: "M409",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 49936,
        DocName: "M406 : SQL Server Competitive Migration Offer (Government)",
        FileName:
          "(M406)EnrAmend(SQLServerCompetitiveMigrationOffer)(WW)(Gov)(SPA)(Aug2017)(IU).docx",
        Language: "SPA",
        Code: "M406",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 47117,
        DocName: "M425 : OLS-only Enrollment Under 36 Months",
        FileName:
          "(M425)EnrAmend(OLS-onlyEnrollmentUnder36Months)(WW)(SPA)(Aug2017)(IU).docx",
        Language: "SPA",
        Code: "M425",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 47126,
        DocName: "M426 : 5 Year Enrollment",
        FileName: "(M426)EnrAmend(5YearEnrollment)(WW)(SPA)(Aug2017)(IU).docx",
        Language: "SPA",
        Code: "M426",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 51026,
        DocName: "M477 : Strategic Cloud Replacement (Direct)",
        FileName:
          "(M477)EnrAmend(StrategicCloudReplacement)(WW)(SPA)(Dir)(Nov2017)v2(IU).docx",
        Language: "SPA",
        Code: "M477",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 52900,
        DocName: "M405 : SQL Server Competitive Migration Offer",
        FileName:
          "(M405)EnrAmend(SQLServerCompetitiveMigrationOffer)(WW)(SPA)(Jan2018)(IU).docx",
        Language: "SPA",
        Code: "M405",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 53589,
        DocName: "P-M415 : Non-OLS Download Correction with Credits",
        FileName:
          "(P-M415)EnrAmend(NonOLSDownloadCorrectionwithCredits)(WW)(SPA)(Feb2018)(IU).docx",
        Language: "SPA",
        Code: "P-M415",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 53587,
        DocName: "P-M414 : Non-OLS Download Correction",
        FileName:
          "(P-M414)EnrAmend(NonOLSDownloadCorrection)(WW)(SPA)(Feb2018)(IU).docx",
        Language: "SPA",
        Code: "P-M414",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 53578,
        DocName: "L-M415 : Non-OLS Download Correction with Credits",
        FileName:
          "(L-M415)EnrAmend(NonOLSDownloadCorrectionwithCredits)(WW)(SPA)(Feb2018)(IU).docx",
        Language: "SPA",
        Code: "L-M415",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 62871,
        DocName: "M456 : Invoice for Quoted Price",
        FileName:
          "(M456)EnrAmend(InvoiceforQuotedPrice)(WW)(SPA)(Sep2019)(IU).docx",
        Language: "SPA",
        Code: "M456",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 61331,
        DocName: "M455 : Azure Monetary Commitment Adjustment",
        FileName:
          "(M455)EnrAmend(AzureMonetaryCommitmentAdjustment)(WW)(SPA)(Jul2019)(IU).docx",
        Language: "SPA",
        Code: "M455",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 64982,
        DocName: "M488 : M365 F3 Shared Account for Firstline Workers",
        FileName:
          "(M488)EnrAmend(M365F3SharedAccountforFirstlineWorkers)(WW)(SPA)(Apr2020)(IU).docx",
        Language: "SPA",
        Code: "M488",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 67343,
        DocName: "M464 : Azure Monetary Commitment Adjustment",
        FileName:
          "(M464)EnrAmend(AzureMonetaryCommitmentAdjustment)(WW)(SPA)(Nov2020)(IU).docx",
        Language: "SPA",
        Code: "M464",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 68822,
        DocName: "M413 : Windows 10 Enterprise Per User for Shared Devices",
        FileName:
          "(M413)EnrAmend(Windows10EnterprisePerUserforSharedDevices)(WW)(SPA)(Apr2021)(IU).docx",
        Language: "SPA",
        Code: "M413",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 67835,
        DocName: "M452 : Reconciliation for Reservation on Wrong Enrollment",
        FileName:
          "(M452)EnrAmend(ReconciliationforReservationError)(WW)(SPA)(Jan2021)(IU).docx",
        Language: "SPA",
        Code: "M452",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 67714,
        DocName: "M415 : Non-OLS Download Correction with Credits",
        FileName:
          "(M415)EnrAmend(NonOLSDownloadCorrectionWithCredits)(WW)(SPA)(Jan2021)(IU).docx",
        Language: "SPA",
        Code: "M415",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 67708,
        DocName: "M414 : Non-OLS Download Correction",
        FileName:
          "(M414)EnrAmend(NonOLSDownloadCorrection)(WW)(SPA)(Jan2021)(IU).docx",
        Language: "SPA",
        Code: "M414",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 66631,
        DocName: "M403 : Enrollment Effective Date",
        FileName:
          "(M403)EnrAmend(EnrollmentEffectiveDate)(WW)(SPA)(Sep2020)(IU).docx",
        Language: "SPA",
        Code: "M403",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 62381,
        DocName: "M456 : Invoice for Quoted Price",
        FileName:
          "(M456)EnrAmend(InvoiceforQuotedPrice)(WW)(CHT)(Aug2019)(IU).docx",
        Language: "CHT",
        Code: "M456",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 52890,
        DocName: "M405 : SQL Server Competitive Migration Offer",
        FileName:
          "(M405)EnrAmend(SQLServerCompetitiveMigrationOffer)(WW)(CHT)(Jan2018)(IU).docx",
        Language: "CHT",
        Code: "M405",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 49938,
        DocName: "M406 : SQL Server Competitive Migration Offer (Government)",
        FileName:
          "(M406)EnrAmend(SQLServerCompetitiveMigrationOffer)(WW)(Gov)(CHT)(Aug2017)(IU).docx",
        Language: "CHT",
        Code: "M406",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 49935,
        DocName: "M406 : SQL Server Competitive Migration Offer (Government)",
        FileName:
          "(M406)EnrAmend(SQLServerCompetitiveMigrationOffer)(WW)(Gov)(RUS)(Aug2017)(IU).docx",
        Language: "RUS",
        Code: "M406",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 51018,
        DocName: "M477 : Strategic Cloud Replacement (Direct)",
        FileName:
          "(M477)EnrAmend(StrategicCloudReplacement)(WW)(RUS)(Dir)(Nov2017)(IU).docx",
        Language: "RUS",
        Code: "M477",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 50852,
        DocName: "M475 : Corresponding Online Service Activation (Direct)",
        FileName:
          "(M475)EnrAmend(CorrespondingOnlineServiceActivation)(WW)(RUS)(Dir)(Nov2017)(IU).docx",
        Language: "RUS",
        Code: "M475",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 47114,
        DocName: "M425 : OLS-only Enrollment Under 36 Months",
        FileName:
          "(M425)EnrAmend(OLS-onlyEnrollmentUnder36Months)(WW)(RUS)(Aug2017)(IU).docx",
        Language: "RUS",
        Code: "M425",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 52899,
        DocName: "M405 : SQL Server Competitive Migration Offer",
        FileName:
          "(M405)EnrAmend(SQLServerCompetitiveMigrationOffer)(WW)(RUS)(Jan2018)(IU).docx",
        Language: "RUS",
        Code: "M405",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 53328,
        DocName: "M403 : Enrollment Effective Date",
        FileName:
          "(M403)EnrAmend(EnrollmentEffectiveDate)(WW)(RUS)(Feb2018)(IU).docx",
        Language: "RUS",
        Code: "M403",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 67344,
        DocName: "M464 : Azure Monetary Commitment Adjustment",
        FileName:
          "(M464)EnrAmend(AzureMonetaryCommitmentAdjustment)(WW)(RUS)(Nov2020)(IU).docx",
        Language: "RUS",
        Code: "M464",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 64981,
        DocName: "M488 : M365 F3 Shared Account for Firstline Workers",
        FileName:
          "(M488)EnrAmend(M365F3SharedAccountforFirstlineWorkers)(WW)(RUS)(Apr2020)(IU).docx",
        Language: "RUS",
        Code: "M488",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 65010,
        DocName:
          "M496 : Grant Microsoft 365 F1 Office 365 Enterprise Suites and Componentized Microsoft 365 Access to Office Productivity Servers",
        FileName:
          "(M496)EnrollAmend(AccesstoOfficeProductivityServers)(WW)(RUS)(Apr2020)(IU).docx",
        Language: "RUS",
        Code: "M496",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 64322,
        DocName: "M403 : Enrollment Effective Date",
        FileName:
          "(M403)EnrAmend(EnrollmentEffectiveDate)(WW)(SLK)(Jan2020)(IU).docx",
        Language: "SLK",
        Code: "M403",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 62883,
        DocName: "M456 : Invoice for Quoted Price",
        FileName:
          "(M456)EnrAmend(InvoiceforQuotedPrice)(WW)(SLK)(Sep2019)(IU).docx",
        Language: "SLK",
        Code: "M456",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 56978,
        DocName: "M448 : Azure Monetary Commitment Transfer",
        FileName:
          "(M448)EnrAmend(AzureMonetaryCommitmentTransfer)(WW)(CHS)(Jan2019)(IU).docx",
        Language: "CHS",
        Code: "M448",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 64977,
        DocName: "M488 : M365 F3 Shared Account for Firstline Workers",
        FileName:
          "(M488)EnrAmend(M365F3SharedAccountforFirstlineWorkers)(WW)(CHS)(Apr2020)(IU).docx",
        Language: "CHS",
        Code: "M488",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 65005,
        DocName:
          "M496 : Grant Microsoft 365 F1 Office 365 Enterprise Suites and Componentized Microsoft 365 Access to Office Productivity Servers",
        FileName:
          "(M496)EnrollAmend(AccesstoOfficeProductivityServers)(WW)(CHS)(Apr2020)(IU).docx",
        Language: "CHS",
        Code: "M496",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 68802,
        DocName: "M425 : OLS-only Enrollment Under 36 Months",
        FileName:
          "(M425)EnrAmend(OLS-onlyEnrollmentUnder36Months)(WW)(CHS)(Apr2021)v2(IU).docx",
        Language: "CHS",
        Code: "M425",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 68803,
        DocName: "M414 : Non-OLS Download Correction",
        FileName:
          "(M414)EnrAmend(NonOLSDownloadCorrection)(WW)(CHS)(Apr2021)v2(IU).docx",
        Language: "CHS",
        Code: "M414",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 68804,
        DocName: "M426 : 5 Year Enrollment",
        FileName:
          "(M426)EnrAmend(5YearEnrollment)(WW)(CHS)(Apr2021)v2(IU).docx",
        Language: "CHS",
        Code: "M426",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 62380,
        DocName: "M456 : Invoice for Quoted Price",
        FileName:
          "(M456)EnrAmend(InvoiceforQuotedPrice)(WW)(CHS)(Aug2019)(IU).docx",
        Language: "CHS",
        Code: "M456",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 67342,
        DocName: "M464 : Azure Monetary Commitment Adjustment",
        FileName:
          "(M464)EnrAmend(AzureMonetaryCommitmentAdjustment)(WW)(CHS)(Nov2020)(IU).docx",
        Language: "CHS",
        Code: "M464",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 52889,
        DocName: "M405 : SQL Server Competitive Migration Offer",
        FileName:
          "(M405)EnrAmend(SQLServerCompetitiveMigrationOffer)(WW)(CHS)(Jan2018)(IU).docx",
        Language: "CHS",
        Code: "M405",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 64702,
        DocName: "M456 : Invoice for Quoted Price",
        FileName:
          "(M456)EnrAmend(InvoiceforQuotedPrice)(WW)(SLN)(Mar2020)(IU).docx",
        Language: "SLN",
        Code: "M456",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 49937,
        DocName: "M406 : SQL Server Competitive Migration Offer (Government)",
        FileName:
          "(M406)EnrAmend(SQLServerCompetitiveMigrationOffer)(WW)(Gov)(CHS)(Aug2017)(IU).docx",
        Language: "CHS",
        Code: "M406",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 49941,
        DocName: "M406 : SQL Server Competitive Migration Offer (Government)",
        FileName:
          "(M406)EnrAmend(SQLServerCompetitiveMigrationOffer)(WW)(Gov)(FRE)(Aug2017)(IU).docx",
        Language: "FRE",
        Code: "M406",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 52888,
        DocName: "M405 : SQL Server Competitive Migration Offer",
        FileName:
          "(M405)EnrAmend(SQL ServerCompetitiveMigrationOffer)(WW)(FRE)(Jan2018)(IU).docx",
        Language: "FRE",
        Code: "M405",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 65689,
        DocName: "M436 : Divestiture Transition Period",
        FileName:
          "(M436)EnrAmend(DivestitureTransitionPeriod)(WW)(FRE)(May2020)(IU).docx",
        Language: "FRE",
        Code: "M436",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 67345,
        DocName: "M464 : Azure Monetary Commitment Adjustment",
        FileName:
          "(M464)EnrAmend(AzureMonetaryCommitmentAdjustment)(WW)(FRE)(Nov2020)(IU).docx",
        Language: "FRE",
        Code: "M464",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 67542,
        DocName: "M426 : 5 Year Enrollment",
        FileName: "(M426)EnrAmend(5YearEnrollment)(WW)(FRE)(Dec2020)(IU).docx",
        Language: "FRE",
        Code: "M426",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 62382,
        DocName: "M456 : Invoice for Quoted Price",
        FileName:
          "(M456)EnrAmend(InvoiceforQuotedPrice)(WW)(FRE)(Aug2019)(IU).docx",
        Language: "FRE",
        Code: "M456",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 64460,
        DocName: "M486 : Contract Tie Addition",
        FileName:
          "(M486)AgrAmend(ContractTieAddition)(WW)(FRE)(Feb2020)(IU).docx",
        Language: "FRE",
        Code: "M486",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 64646,
        DocName: "M455 : Azure Monetary Commitment Adjustment",
        FileName:
          "(M455)EnrAmend(AzureMonetaryCommitmentAdjustment)(WW)(FRE)(Feb2020)v2(IU).docx",
        Language: "FRE",
        Code: "M455",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 56696,
        DocName:
          "M497 : European Union General Data Protection Regulation Terms",
        FileName:
          "(M497)EnrAmend(EuropeanUnionGeneralDataProtectionRegulationTerms)(WW)(FRE)(Sep2018)(IU).docx",
        Language: "FRE",
        Code: "M497",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 62379,
        DocName: "M456 : Invoice for Quoted Price",
        FileName:
          "(M456)EnrAmend(InvoiceforQuotedPrice)(WW)(BUL)(Aug2019)(IU).docx",
        Language: "BUL",
        Code: "M456",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 49932,
        DocName: "M406 : SQL Server Competitive Migration Offer (Government)",
        FileName:
          "(M406)EnrAmend(SQLServerCompetitiveMigrationOffer)(WW)(Gov)(POL)(Aug2017)(IU).docx",
        Language: "POL",
        Code: "M406",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 53327,
        DocName: "M403 : Enrollment Effective Date",
        FileName:
          "(M403)EnrAmend(EnrollmentEffectiveDate)(WW)(POL)(Feb2018)(IU).docx",
        Language: "POL",
        Code: "M403",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 52896,
        DocName: "M405 : SQL Server Competitive Migration Offer",
        FileName:
          "(M405)EnrAmend(SQLServerCompetitiveMigrationOffer)(WW)(POL)(Jan2018)(IU).docx",
        Language: "POL",
        Code: "M405",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 68984,
        DocName: "M464 : Azure Monetary Commitment Adjustment",
        FileName:
          "(M464)EnrAmend(AzureMonetaryCommitmentAdjustment)(WW)(POL)(May2021)(IU).docx",
        Language: "POL",
        Code: "M464",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 67065,
        DocName: "M436 : Divestiture Transition Period",
        FileName:
          "(M436)EnrAmend(DivestitureTransitionPeriod)(WW)(POL)(Oct2020(IU).docx",
        Language: "POL",
        Code: "M436",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 65785,
        DocName:
          "M496 : Grant Microsoft 365 F1 Office 365 Enterprise Suites and Componentized Microsoft 365 Access to Office Productivity Servers",
        FileName:
          "(M496)EnrollAmend(AccesstoOfficeProductivityServers)(WW)(POL)(Jun2020)(IU).docx",
        Language: "POL",
        Code: "M496",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 66042,
        DocName: "M426 : 5 Year Enrollment",
        FileName: "(M426)EnrAmend(5YearEnrollment)(WW)(POL)(Jul2020)(IU).docx",
        Language: "POL",
        Code: "M426",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 62385,
        DocName: "M456 : Invoice for Quoted Price",
        FileName:
          "(M456)EnrAmend(InvoiceforQuotedPrice)(WW)(POL)(Aug2019)(IU).docx",
        Language: "POL",
        Code: "M456",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 69031,
        DocName: "M455 : Azure Monetary Commitment Adjustment",
        FileName:
          "(M455)EnrAmend(AzureMonetaryCommitmentAdjustment)(WW)(GRE)(May2021)(IU).docx",
        Language: "GRE",
        Code: "M455",
        EmpowermentCode: "Blue",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 50750,
        DocName: "M470 : Billing",
        FileName: "(M470)EnrAmend(Billing)(WW)(POL)(Oct2017)(IU).docx",
        Language: "POL",
        Code: "M470",
        EmpowermentCode: "Red",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 50746,
        DocName: "M470 : Billing",
        FileName: "(M470)EnrAmend(Billing)(WW)(FRE)(Oct2017)(IU).docx",
        Language: "FRE",
        Code: "M470",
        EmpowermentCode: "Red",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 50742,
        DocName: "M470 : Billing",
        FileName: "(M470)EnrAmend(Billing)(WW)(CHS)(Oct2017)(IU).docx",
        Language: "CHS",
        Code: "M470",
        EmpowermentCode: "Red",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 50753,
        DocName: "M470 : Billing",
        FileName: "(M470)EnrAmend(Billing)(WW)(RUS)(Oct2017)(IU).docx",
        Language: "RUS",
        Code: "M470",
        EmpowermentCode: "Red",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 50743,
        DocName: "M470 : Billing",
        FileName: "(M470)EnrAmend(Billing)(WW)(CHT)(Oct2017)(IU).docx",
        Language: "CHT",
        Code: "M470",
        EmpowermentCode: "Red",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 50754,
        DocName: "M470 : Billing",
        FileName: "(M470)EnrAmend(Billing)(WW)(SPA)(Oct2017)(IU).docx",
        Language: "SPA",
        Code: "M470",
        EmpowermentCode: "Red",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 50745,
        DocName: "M470 : Billing",
        FileName: "(M470)EnrAmend(Billing)(WW)(ENG)(Oct2017)(IU).docx",
        Language: "ENG",
        Code: "M470",
        EmpowermentCode: "Red",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 50744,
        DocName: "M470 : Billing",
        FileName: "(M470)EnrAmend(Billing)(WW)(DUT)(Oct2017)(IU).docx",
        Language: "DUT",
        Code: "M470",
        EmpowermentCode: "Red",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 50748,
        DocName: "M470 : Billing",
        FileName: "(M470)EnrAmend(Billing)(WW)(ITA)(Oct2017)(IU).docx",
        Language: "ITA",
        Code: "M470",
        EmpowermentCode: "Red",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 50751,
        DocName: "M470 : Billing",
        FileName: "(M470)EnrAmend(Billing)(WW)(PTB)(Oct2017)(IU).docx",
        Language: "PTB",
        Code: "M470",
        EmpowermentCode: "Red",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 50747,
        DocName: "M470 : Billing",
        FileName: "(M470)EnrAmend(Billing)(WW)(GER)(Oct2017)(IU).docx",
        Language: "GER",
        Code: "M470",
        EmpowermentCode: "Red",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 50749,
        DocName: "M470 : Billing",
        FileName: "(M470)EnrAmend(Billing)(WW)(JPN)(Oct2017)(IU).docx",
        Language: "JPN",
        Code: "M470",
        EmpowermentCode: "Red",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 50752,
        DocName: "M470 : Billing",
        FileName: "(M470)EnrAmend(Billing)(WW)(PTE)(Oct2017)(IU).docx",
        Language: "PTE",
        Code: "M470",
        EmpowermentCode: "Red",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 67571,
        DocName: "M43 : Office Mix",
        FileName:
          "(M43)EnrAmend(ProductSelectionFormOfficeStandardAmendment)(WW)(JPN)(Dec2020)(IU).docx",
        Language: "JPN",
        Code: "M43",
        EmpowermentCode: "Green",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 67564,
        DocName: "M43 : Office Mix",
        FileName:
          "(M43)EnrAmend(ProductSelectionFormOfficeStandardAmendment)(WW)(GER)(Dec2020)(IU).docx",
        Language: "GER",
        Code: "M43",
        EmpowermentCode: "Green",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 67568,
        DocName: "M43 : Office Mix",
        FileName:
          "(M43)EnrAmend(ProductSelectionFormOfficeStandardAmendment)(WW)(CZE)(Dec2020)(IU).docx",
        Language: "CZE",
        Code: "M43",
        EmpowermentCode: "Green",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 67575,
        DocName: "M43 : Office Mix",
        FileName:
          "(M43)EnrAmend(ProductSelectionFormOfficeStandardAmendment)(WW)(SER)(Dec2020)(IU).docx",
        Language: "SER",
        Code: "M43",
        EmpowermentCode: "Green",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 67570,
        DocName: "M43 : Office Mix",
        FileName:
          "(M43)EnrAmend(ProductSelectionFormOfficeStandardAmendment)(WW)(ITA)(Dec2020)(IU).docx",
        Language: "ITA",
        Code: "M43",
        EmpowermentCode: "Green",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 67573,
        DocName: "M43 : Office Mix",
        FileName:
          "(M43)EnrAmend(ProductSelectionFormOfficeStandardAmendment)(WW)(PTB)(Dec2020)(IU).docx",
        Language: "PTB",
        Code: "M43",
        EmpowermentCode: "Green",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 67563,
        DocName: "M43 : Office Mix",
        FileName:
          "(M43)EnrAmend(ProductSelectionFormOfficeStandardAmendment)(WW)(DUT)(Dec2020)(IU).docx",
        Language: "DUT",
        Code: "M43",
        EmpowermentCode: "Green",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 52469,
        DocName: "M484 : Enrollment Extension Amendment",
        FileName:
          "(M484)EnrAmend(EnrollmentExtensionAmendment)(WW)(ENG)(Dec2017)(IU).docx",
        Language: "ENG",
        Code: "M484",
        EmpowermentCode: "Green",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 67561,
        DocName: "M43 : Office Mix",
        FileName:
          "(M43)EnrAmend(ProductSelectionFormOfficeStandardAmendment)(WW)(ENG)(Dec2020)(IU).docx",
        Language: "ENG",
        Code: "M43",
        EmpowermentCode: "Green",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 67567,
        DocName: "M43 : Office Mix",
        FileName:
          "(M43)EnrAmend(ProductSelectionFormOfficeStandardAmendment)(WW)(CHT)(Dec2020)(IU).docx",
        Language: "CHT",
        Code: "M43",
        EmpowermentCode: "Green",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 67562,
        DocName: "M43 : Office Mix",
        FileName:
          "(M43)EnrAmend(ProductSelectionFormOfficeStandardAmendment)(WW)(SPA)(Dec2020)(IU).docx",
        Language: "SPA",
        Code: "M43",
        EmpowermentCode: "Green",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 67566,
        DocName: "M43 : Office Mix",
        FileName:
          "(M43)EnrAmend(ProductSelectionFormOfficeStandardAmendment)(WW)(CHS)(Dec2020)(IU).docx",
        Language: "CHS",
        Code: "M43",
        EmpowermentCode: "Green",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 67576,
        DocName: "M43 : Office Mix",
        FileName:
          "(M43)EnrAmend(ProductSelectionFormOfficeStandardAmendment)(WW)(SLK)(Dec2020)(IU).docx",
        Language: "SLK",
        Code: "M43",
        EmpowermentCode: "Green",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 67574,
        DocName: "M43 : Office Mix",
        FileName:
          "(M43)EnrAmend(ProductSelectionFormOfficeStandardAmendment)(WW)(RUS)(Dec2020)(IU).docx",
        Language: "RUS",
        Code: "M43",
        EmpowermentCode: "Green",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 67569,
        DocName: "M43 : Office Mix",
        FileName:
          "(M43)EnrAmend(ProductSelectionFormOfficeStandardAmendment)(WW)(FRE)(Dec2020)(IU).docx",
        Language: "FRE",
        Code: "M43",
        EmpowermentCode: "Green",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 67565,
        DocName: "M43 : Office Mix",
        FileName:
          "(M43)EnrAmend(ProductSelectionFormOfficeStandardAmendment)(WW)(BUL)(Dec2020)(IU).docx",
        Language: "BUL",
        Code: "M43",
        EmpowermentCode: "Green",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 67572,
        DocName: "M43 : Office Mix",
        FileName:
          "(M43)EnrAmend(ProductSelectionFormOfficeStandardAmendment)(WW)(POL)(Dec2020)(IU).docx",
        Language: "POL",
        Code: "M43",
        EmpowermentCode: "Green",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 68480,
        DocName:
          "M423 : Multiple Azure Billing Tenants Under a Single Enrollment",
        FileName:
          "(M423)EnrMultiTenant(MultipleAzureBillingTenantsUnderASingleEnrollment)(WW)(POL)(Mar2021)(IU).docx",
        Language: "POL",
        Code: "M423",
        EmpowermentCode: "P-LSS",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 56772,
        DocName: "M40 : Affiliation Election Change",
        FileName:
          "(M40)EnrAmend(AffiliateElectionChange)(WW)(POL)(Dec2018)(IU).docx",
        Language: "POL",
        Code: "M40",
        EmpowermentCode: "P-LSS",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 66519,
        DocName: "M40 : Affiliation Election Change",
        FileName:
          "(M40)EnrAmend(AffiliateElectionChange)(WW)(FRE)(Sep2020)(IU).docx",
        Language: "FRE",
        Code: "M40",
        EmpowermentCode: "P-LSS",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 57657,
        DocName: "M499 : Applicable Online Services Terms",
        FileName:
          "(M499)EnrAmend(ApplicableOnlineServicesTerms)(WW)(FRE)(Apr2019)(IU).docx",
        Language: "FRE",
        Code: "M499",
        EmpowermentCode: "P-LSS",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 68475,
        DocName:
          "M423 : Multiple Azure Billing Tenants Under a Single Enrollment",
        FileName:
          "(M423)EnrMultiTenant(MultipleAzureBillingTenantsUnderASingleEnrollment)(WW)(RUS)(Mar2021)(IU).docx",
        Language: "RUS",
        Code: "M423",
        EmpowermentCode: "P-LSS",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 66740,
        DocName: "M40 : Affiliation Election Change",
        FileName:
          "(M40)EnrAmend(AffiliateElectionChange)(WW)(CRO)(Oct2020)(IU).docx",
        Language: "CRO",
        Code: "M40",
        EmpowermentCode: "P-LSS",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 53070,
        DocName: "M40 : Affiliation Election Change",
        FileName:
          "(M40)EnrAmend(AffiliateElectionChange)(WW)(RUS)(Jan2018)(IU).docx",
        Language: "RUS",
        Code: "M40",
        EmpowermentCode: "P-LSS",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 66908,
        DocName: "M421 : Add Affiliates -",
        FileName: "(M421)EnrAmend(AddAffiliates)(WW)(RUS)(Oct2020)(IU).docx",
        Language: "RUS",
        Code: "M421",
        EmpowermentCode: "P-LSS",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 68469,
        DocName:
          "M423 : Multiple Azure Billing Tenants Under a Single Enrollment",
        FileName:
          "(M423)EnrMultiTenant(MultipleAzureBillingTenantsUnderASingleEnrollment)(WW)(CHS)(Mar2021)(IU).docx",
        Language: "CHS",
        Code: "M423",
        EmpowermentCode: "P-LSS",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 68474,
        DocName:
          "M423 : Multiple Azure Billing Tenants Under a Single Enrollment",
        FileName:
          "(M423)EnrMultiTenant(MultipleAzureBillingTenantsUnderASingleEnrollment)(WW)(SPA)(Mar2021)(IU).docx",
        Language: "SPA",
        Code: "M423",
        EmpowermentCode: "P-LSS",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 68477,
        DocName:
          "L-M423 : Multiple Azure Billing Tenants Under a Single Enrollment",
        FileName:
          "(L-M423)EnrMultiTenant(MultipleAzureBillingTenantsUnderASingleEnrollment)(WW)(SPA)(Mar2021)(IU).docx",
        Language: "SPA",
        Code: "L-M423",
        EmpowermentCode: "P-LSS",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 65383,
        DocName:
          "P-M423 : Multiple Azure Billing Tenants Under a Single Enrollment",
        FileName:
          "(P-M423)EnrMultiTenant(MultipleAzureBillingTenantsUnderASingleEnrollment)(WW)(SPA)(May2020)(IU).docx",
        Language: "SPA",
        Code: "P-M423",
        EmpowermentCode: "P-LSS",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 65386,
        DocName:
          "P-M423 : Multiple Azure Billing Tenants Under a Single Enrollment",
        FileName:
          "(P-M423)EnrMultiTenant(MultipleAzureBillingTenantsUnderASingleEnrollment)(WW)(ENG)(May2020)(IU).docx",
        Language: "ENG",
        Code: "P-M423",
        EmpowermentCode: "P-LSS",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 57540,
        DocName: "M499 : Applicable Online Services Terms",
        FileName:
          "(M499)EnrAmend(ApplicableOnlineServicesTerms)(WW)(ENG)(Apr2019)(IU).docx",
        Language: "ENG",
        Code: "M499",
        EmpowermentCode: "P-LSS",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 52975,
        DocName: "M40 : Affiliation Election Change",
        FileName:
          "(M40)EnrAmend(AffiliateElectionChange)(WW)(ENG)(Jan2018)(IU).docx",
        Language: "ENG",
        Code: "M40",
        EmpowermentCode: "P-LSS",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 66905,
        DocName: "M421 : Add Affiliates -",
        FileName: "(M421)EnrAmend(AddAffiliates)(WW)(ENG)(Oct2020)(IU).docx",
        Language: "ENG",
        Code: "M421",
        EmpowermentCode: "P-LSS",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 68446,
        DocName:
          "M423 : Multiple Azure Billing Tenants Under a Single Enrollment",
        FileName:
          "(M423)EnrMultiTenant(MultipleAzureBillingTenantsUnderASingleEnrollment)(WW)(ENG)(Mar2021)v3(IU).docx",
        Language: "ENG",
        Code: "M423",
        EmpowermentCode: "P-LSS",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 68461,
        DocName:
          "L-M423 : Multiple Azure Billing Tenants Under a Single Enrollment",
        FileName:
          "(L-M423)EnrMultiTenant(MultipleAzureBillingTenantsUnderASingleEnrollment)(WW)(ENG)(Mar2021)(IU).docx",
        Language: "ENG",
        Code: "L-M423",
        EmpowermentCode: "P-LSS",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 68552,
        DocName: "M431 : New Commitment for HITRUST Audit and Certification",
        FileName:
          "(M431)EnrAmend(NewCommitmentforHITRUSTAuditandCertification)(WW)(ENG)(Apr2021)(IU).docx",
        Language: "ENG",
        Code: "M431",
        EmpowermentCode: "P-LSS",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 68553,
        DocName: "M432 : New Commitment for PCI DSS Audit and Certification",
        FileName:
          "(M432)EnrAmend(NewCommitmentforPCIDSSAuditandCertification)(WW)(ENG)(Apr2021)(IU).docx",
        Language: "ENG",
        Code: "M432",
        EmpowermentCode: "P-LSS",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 68554,
        DocName: "M433 : New Commitment for ISO 22301",
        FileName:
          "(M433)EnrAmend(NewCommitmentforISO22301)(WW)(ENG)(Apr2021)(IU).docx",
        Language: "ENG",
        Code: "M433",
        EmpowermentCode: "P-LSS",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 67602,
        DocName: "M40 : Affiliation Election Change",
        FileName:
          "(M40)EnrAmend(AffiliateElectionChange)(WW)(PTB)(Dec2020)(IU).docx",
        Language: "PTB",
        Code: "M40",
        EmpowermentCode: "P-LSS",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 68479,
        DocName:
          "L-M423 : Multiple Azure Billing Tenants Under a Single Enrollment",
        FileName:
          "(L-M423)EnrMultiTenant(MultipleAzureBillingTenantsUnderASingleEnrollment)(WW)(PTB)(Mar2021)(IU).docx",
        Language: "PTB",
        Code: "L-M423",
        EmpowermentCode: "P-LSS",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 68473,
        DocName:
          "M423 : Multiple Azure Billing Tenants Under a Single Enrollment",
        FileName:
          "(M423)EnrMultiTenant(MultipleAzureBillingTenantsUnderASingleEnrollment)(WW)(PTB)(Mar2021)(IU).docx",
        Language: "PTB",
        Code: "M423",
        EmpowermentCode: "P-LSS",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 56324,
        DocName: "M40 : Affiliation Election Change",
        FileName:
          "(M40)EnrAmend(AffiliateElectionChange)(WW)(ITA)(Jan2018)(IU).docx",
        Language: "ITA",
        Code: "M40",
        EmpowermentCode: "P-LSS",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 65382,
        DocName:
          "P-M423 : Multiple Azure Billing Tenants Under a Single Enrollment",
        FileName:
          "(P-M423)EnrMultiTenant(MultipleAzureBillingTenantsUnderASingleEnrollment)(WW)(PTB)(May2020)(IU).docx",
        Language: "PTB",
        Code: "P-M423",
        EmpowermentCode: "P-LSS",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 64178,
        DocName: "M499 : Applicable Online Services Terms",
        FileName:
          "(M499)EnrAmend(ApplicableOnlineServicesTerms)(WW)(GER)(Dec2019)v2(IU).docx",
        Language: "GER",
        Code: "M499",
        EmpowermentCode: "P-LSS",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 65385,
        DocName:
          "P-M423 : Multiple Azure Billing Tenants Under a Single Enrollment",
        FileName:
          "(P-M423)EnrMultiTenant(MultipleAzureBillingTenantsUnderASingleEnrollment)(WW)(GER)(May2020)(IU).docx",
        Language: "GER",
        Code: "P-M423",
        EmpowermentCode: "P-LSS",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 68470,
        DocName:
          "M423 : Multiple Azure Billing Tenants Under a Single Enrollment",
        FileName:
          "(M423)EnrMultiTenant(MultipleAzureBillingTenantsUnderASingleEnrollment)(WW)(GER)(Mar2021)(IU).docx",
        Language: "GER",
        Code: "M423",
        EmpowermentCode: "P-LSS",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 68478,
        DocName:
          "L-M423 : Multiple Azure Billing Tenants Under a Single Enrollment",
        FileName:
          "(L-M423)EnrMultiTenant(MultipleAzureBillingTenantsUnderASingleEnrollment)(WW)(GER)(Mar2021)(IU).docx",
        Language: "GER",
        Code: "L-M423",
        EmpowermentCode: "P-LSS",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 65384,
        DocName:
          "P-M423 : Multiple Azure Billing Tenants Under a Single Enrollment",
        FileName:
          "(P-M423)EnrMultiTenant(MultipleAzureBillingTenantsUnderASingleEnrollment)(WW)(PTE)(May2020)(IU).docx",
        Language: "PTE",
        Code: "P-M423",
        EmpowermentCode: "P-LSS",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 68476,
        DocName:
          "L-M423 : Multiple Azure Billing Tenants Under a Single Enrollment",
        FileName:
          "(L-M423)EnrMultiTenant(MultipleAzureBillingTenantsUnderASingleEnrollment)(WW)(PTE)(Mar2021)(IU).docx",
        Language: "PTE",
        Code: "L-M423",
        EmpowermentCode: "P-LSS",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 68571,
        DocName:
          "M423 : Multiple Azure Billing Tenants Under a Single Enrollment",
        FileName:
          "(M423)EnrMultiTenant(MultipleAzureBillingTenantsUnderASingleEnrollment)(WW)(JPN)(Apr2021)(IU).docx",
        Language: "JPN",
        Code: "M423",
        EmpowermentCode: "P-LSS",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 66700,
        DocName: "M40 : Affiliation Election Change",
        FileName:
          "(M40)EnrAmend(AffiliateElectionChange)(WW)(JPN)(Oct2020)(IU).docx",
        Language: "JPN",
        Code: "M40",
        EmpowermentCode: "P-LSS",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 66907,
        DocName: "M421 : Add Affiliates -",
        FileName: "(M421)EnrAmend(AddAffiliates)(WW)(JPN)(Oct2020)(IU).docx",
        Language: "JPN",
        Code: "M421",
        EmpowermentCode: "P-LSS",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 51021,
        DocName: "M478 : Strategic Cloud Replacement with Activation (Direct)",
        FileName:
          "(M478)EnrAmend(StrategicCloudReplacementwithActivation)(WW)(PTB)(Dir)(Nov2017)(IU).docx",
        Language: "PTB",
        Code: "M478",
        EmpowermentCode: "Yellow",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 67536,
        DocName: "M478 : Strategic Cloud Replacement with Activation (Direct)",
        FileName:
          "(M478)EnrAmend(StrategicCloudReplacementwithActivation)(WW)(ENG)(Dir)(Dec2020)v2(IU).docx",
        Language: "ENG",
        Code: "M478",
        EmpowermentCode: "Yellow",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 50853,
        DocName: "M476 : Corresponding Online Service Purchase (Direct)",
        FileName:
          "(M476)EnrAmend(CorrespondingOnlineServicePurchase)(WW)(ENG)(Dir)(Nov2017)(IU).docx",
        Language: "ENG",
        Code: "M476",
        EmpowermentCode: "Yellow",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 51025,
        DocName: "M480 : Strategic Cloud Replacement (Direct)",
        FileName:
          "(M480)EnrAmend(StrategicCloudReplacement)(WW)(ENG)(Dir)(Nov2017)(IU).docx",
        Language: "ENG",
        Code: "M480",
        EmpowermentCode: "Yellow",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 65687,
        DocName: "M473 : Corresponding Online Service Activation (Direct)",
        FileName:
          "(M473)EnrAmend(CorrespondingOLSActivation)(WW)(ENG)(Dir)(May2020)(IU).docx",
        Language: "ENG",
        Code: "M473",
        EmpowermentCode: "Yellow",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 51023,
        DocName: "M478 : Strategic Cloud Replacement with Activation (Direct)",
        FileName:
          "(M478)EnrAmend(StrategicCloudReplacementwithActivation)(WW)(SPA)(Dir)(Nov2017)(IU).docx",
        Language: "SPA",
        Code: "M478",
        EmpowermentCode: "Yellow",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 50849,
        DocName: "M473 : Corresponding Online Service Activation (Direct)",
        FileName:
          "(M473)EnrAmend(CorrespondingOLSActivation)(WW)(RUS)(Dir)(Nov2017)(IU).docx",
        Language: "RUS",
        Code: "M473",
        EmpowermentCode: "Yellow",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 51029,
        DocName: "M478 : Strategic Cloud Replacement with Activation (Direct)",
        FileName:
          "(M478)EnrAmend(StrategicCloudReplacementwithActivation)(WW)(RUS)(Dir)(Nov2017)v2(IU).docx",
        Language: "RUS",
        Code: "M478",
        EmpowermentCode: "Yellow",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 55524,
        DocName:
          "M498 : EU General Data Protection Commitments for Products not in the Online Services Terms",
        FileName:
          "(M498)EnrAmend(EUGeneralDataProtectionCommitmentsforProductsNotintheOnlineServicesTerms)(WW)(FRE)(Aug2018)(IU).docx",
        Language: "FRE",
        Code: "M498",
        EmpowermentCode: "Orange",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 67974,
        DocName: "M471 : Microsoft Online Services Data Protection Addendum",
        FileName:
          "(M471)EnrAmend(MicrosoftOnlineServicesDataProtectionAddendum)(WW)(FRE)(Feb2021)(IU).docx",
        Language: "FRE",
        Code: "M471",
        EmpowermentCode: "Orange",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 55523,
        DocName:
          "M498 : EU General Data Protection Commitments for Products not in the Online Services Terms",
        FileName:
          "(M498)EnrAmend(EUGeneralDataProtectionCommitmentsforProductsNotintheOnlineServicesTerms)(WW)(ENG)(Aug2018)(IU).docx",
        Language: "ENG",
        Code: "M498",
        EmpowermentCode: "Orange",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 68069,
        DocName: "M471 : Microsoft Online Services Data Protection Addendum",
        FileName:
          "(M471)EnrAmend(MicrosoftOnlineServicesDataProtectionAddendum)(WW)(ENG)(Feb2021)(IU).docx",
        Language: "ENG",
        Code: "M471",
        EmpowermentCode: "Orange",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 69040,
        DocName: "M453 : Financial Services Amendment",
        FileName:
          "(M453)EnrAmend(FinancialServicesAmendment)(WW)(ENG)(May2021)(IU) .docx",
        Language: "ENG",
        Code: "M453",
        EmpowermentCode: "Orange",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 66498,
        DocName: "M420 : Australian Privacy Principles",
        FileName:
          "(M420)EnrAmend(AustralianPrivacyPrinciples)(AUS)(ENG)(Sept2020)(IU).docx",
        Language: "ENG",
        Code: "M420",
        EmpowermentCode: "Orange",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 67973,
        DocName: "M471 : Microsoft Online Services Data Protection Addendum",
        FileName:
          "(M471)EnrAmend(MicrosoftOnlineServicesDataProtectionAddendum)(WW)(ITA)(Feb2021)(IU).docx",
        Language: "ITA",
        Code: "M471",
        EmpowermentCode: "Orange",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 67969,
        DocName: "M471 : Microsoft Online Services Data Protection Addendum",
        FileName:
          "(M471)EnrAmend(MicrosoftOnlineServicesDataProtectionAddendum)(WW)(PTB)(Feb2021)(IU)v2.docx",
        Language: "PTB",
        Code: "M471",
        EmpowermentCode: "Orange",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 68003,
        DocName: "M471 : Microsoft Online Services Data Protection Addendum",
        FileName:
          "(M471)EnrAmend(MicrosoftOnlineServicesDataProtectionAddendum)(WW)(GER)(Feb2021)(IU).docx",
        Language: "GER",
        Code: "M471",
        EmpowermentCode: "Orange",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 67970,
        DocName: "M471 : Microsoft Online Services Data Protection Addendum",
        FileName:
          "(M471)EnrAmend(MicrosoftOnlineServicesDataProtectionAddendum)(WW)(JPN)(Feb2021)(IU).docx",
        Language: "JPN",
        Code: "M471",
        EmpowermentCode: "Orange",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 57237,
        DocName: "M449 : Termination",
        FileName: "(M449)EnrAmend(Termination)(WW)(JPN)(Feb2019)(IU).docx",
        Language: "JPN",
        Code: "M449",
        EmpowermentCode: "Business Desk",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 68861,
        DocName: "M460 : Enrollment Extension",
        FileName:
          "(M460)EnrAmend(EnrollmentExtension)(WW)(JPN)(May2021)(IU).docx",
        Language: "JPN",
        Code: "M460",
        EmpowermentCode: "Business Desk",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 55989,
        DocName: "M407 : Azure Commitment Discount",
        FileName:
          "(M407)EnrAmend(AzureCommitmentDiscount)(WW)(JPN)(Aug2018)(IU).docx",
        Language: "JPN",
        Code: "M407",
        EmpowermentCode: "Business Desk",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 48383,
        DocName: "M49 : Full Year Transition",
        FileName:
          "(M49)EnrAmend(FullYearTransitions)(WW)(JPN)(Aug2017)(IU).docx",
        Language: "JPN",
        Code: "M49",
        EmpowermentCode: "Business Desk",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 45471,
        DocName: "M46 : STW",
        FileName:
          "(M46)EnrAmend(StructuredTaskWorker(STW)-LimitedUseOffice)(WW)(JPN)(Aug2017)(IU).docx",
        Language: "JPN",
        Code: "M46",
        EmpowermentCode: "Business Desk",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 56994,
        DocName: "M407 : Azure Commitment Discount",
        FileName:
          "(M407)EnrAmend(AzureCommitmentDiscount)(WW)(CZE)(Jan2019)(IU).docx",
        Language: "CZE",
        Code: "M407",
        EmpowermentCode: "Business Desk",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 45473,
        DocName: "M46 : STW",
        FileName:
          "(M46)EnrAmend(StructuredTaskWorker(STW)-LimitedUseOffice)(WW)(GER)(Aug2017)(IU).docx",
        Language: "GER",
        Code: "M46",
        EmpowermentCode: "Business Desk",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 48382,
        DocName: "M49 : Full Year Transition",
        FileName:
          "(M49)EnrAmend(FullYearTransitions)(WW)(GER)(Aug2017)(IU).docx",
        Language: "GER",
        Code: "M49",
        EmpowermentCode: "Business Desk",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 66337,
        DocName: "M460 : Enrollment Extension",
        FileName:
          "(M460)EnrAmend(EnrollmentExtension)(WW)(PTB)(Aug2020)(IU).docx",
        Language: "PTB",
        Code: "M460",
        EmpowermentCode: "Business Desk",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 48381,
        DocName: "M49 : Full Year Transition",
        FileName:
          "(M49)EnrAmend(FullYearTransitions)(WW)(PTB)(Aug2017)(IU).docx",
        Language: "PTB",
        Code: "M49",
        EmpowermentCode: "Business Desk",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 45476,
        DocName: "M46 : STW",
        FileName:
          "(M46)EnrAmend(StructuredTaskWorker(STW)-LimitedUseOffice)(WW)(PTB)(Aug2017)(IU).docx",
        Language: "PTB",
        Code: "M46",
        EmpowermentCode: "Business Desk",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 48380,
        DocName: "M49 : Full Year Transition",
        FileName:
          "(M49)EnrAmend(FullYearTransitions)(WW)(ITA)(Aug2017)(IU).docx",
        Language: "ITA",
        Code: "M49",
        EmpowermentCode: "Business Desk",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 45478,
        DocName: "M46 : STW",
        FileName:
          "(M46)EnrAmend(StructuredTaskWorker(STW)-LimitedUseOffice)(WW)(ITA)(Aug2017)(IU).docx",
        Language: "ITA",
        Code: "M46",
        EmpowermentCode: "Business Desk",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 48379,
        DocName: "M49 : Full Year Transition",
        FileName:
          "(M49)EnrAmend(FullYearTransitions)(WW)(DUT)(Aug2017)(IU).docx",
        Language: "DUT",
        Code: "M49",
        EmpowermentCode: "Business Desk",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 45480,
        DocName: "M46 : STW",
        FileName:
          "(M46)EnrAmend(StructuredTaskWorker(STW)-LimitedUseOffice)(WW)(DUT)(Aug2017)(IU).docx",
        Language: "DUT",
        Code: "M46",
        EmpowermentCode: "Business Desk",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 48372,
        DocName: "L-M424 : PSTN Conferencing",
        FileName:
          "(L-M424)EnrAmend(PSTNConferencing)(WW)(ENG)(Aug2017)(IU).docx",
        Language: "ENG",
        Code: "L-M424",
        EmpowermentCode: "Business Desk",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 48373,
        DocName: "M49 : Full Year Transition",
        FileName:
          "(M49)EnrAmend(FullYearTransitions)(WW)(ENG)(Aug2017)(IU).docx",
        Language: "ENG",
        Code: "M49",
        EmpowermentCode: "Business Desk",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 48338,
        DocName: "M424 : PSTN Conferencing",
        FileName: "(M424)EnrAmend(PSTNConferencing)(WW)(ENG)(Aug2017)(IU).docx",
        Language: "ENG",
        Code: "M424",
        EmpowermentCode: "Business Desk",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 49081,
        DocName: "P-M407 : Azure Commitment Discount (Direct)",
        FileName:
          "(P-M407)EnrAmend(Dir)(AzureCommitmentDiscount(Direct))(ENG)(Aug2017)(IU).docx",
        Language: "ENG",
        Code: "P-M407",
        EmpowermentCode: "Business Desk",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 49088,
        DocName: "P-M424 : PSTN Conferencing",
        FileName:
          "(P-M424)EnrAmend(PSTNConferencing)(WW)(ENG)(Aug2017)(IU).docx",
        Language: "ENG",
        Code: "P-M424",
        EmpowermentCode: "Business Desk",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 56972,
        DocName: "M407 : Azure Commitment Discount",
        FileName:
          "(M407)EnrAmend(AzureCommitmentDiscount)(WW)(ENG)(Jan2019)(IU).docx",
        Language: "ENG",
        Code: "M407",
        EmpowermentCode: "Business Desk",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 65515,
        DocName: "M460 : Enrollment Extension",
        FileName:
          "(M460)EnrAmend(EnrollmentExtension)(WW)(ENG)(May2020)(IU).docx",
        Language: "ENG",
        Code: "M460",
        EmpowermentCode: "Business Desk",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 51112,
        DocName: "M483 : Information Technology Management Pilot",
        FileName:
          "(M483)EnrAmend(InformationTechnologyManagementPilot)(WW)(ENG)(Nov2017)(IU).docx",
        Language: "ENG",
        Code: "M483",
        EmpowermentCode: "Business Desk",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 53038,
        DocName: "M439 : Solution Architect Services",
        FileName:
          "(M439)EnrAmend(SolutionArchitectServices)(WW)(ENG)(Jan2018)(IU).docx",
        Language: "ENG",
        Code: "M439",
        EmpowermentCode: "Business Desk",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 53380,
        DocName: "M493 : E5 Component Suites",
        FileName:
          "(M493)EnrAmend(E5ComponentSuites)(WW)(ENG)(Feb2018)(IU).DOCX",
        Language: "ENG",
        Code: "M493",
        EmpowermentCode: "Business Desk",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 50273,
        DocName: "M467 : Cloud PBX One-time Concession",
        FileName:
          "(M467)EnrAmend(CloudPBXOne-timeConcession)(WW)(ENG)(Sep2017)(IU).docx",
        Language: "ENG",
        Code: "M467",
        EmpowermentCode: "Business Desk",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 48329,
        DocName: "M449 : Termination",
        FileName: "(M449)EnrAmend(Termination)(WW)(ENG)(Aug2017)(IU).docx",
        Language: "ENG",
        Code: "M449",
        EmpowermentCode: "Business Desk",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 47071,
        DocName: "M422 : OMS-G Discount",
        FileName: "(M422)EnrAmend(OMS-GDiscount)(WW)(ENG)(Aug2017)(IU).docx",
        Language: "ENG",
        Code: "M422",
        EmpowermentCode: "Business Desk",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 48376,
        DocName: "M49 : Full Year Transition",
        FileName:
          "(M49)EnrAmend(FullYearTransitions)(WW)(RUS)(Aug2017)(IU).docx",
        Language: "RUS",
        Code: "M49",
        EmpowermentCode: "Business Desk",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 45483,
        DocName: "M46 : STW",
        FileName:
          "(M46)EnrAmend(StructuredTaskWorker(STW)-LimitedUseOffice)(WW)(RUS)(Aug2017)(IU).docx",
        Language: "RUS",
        Code: "M46",
        EmpowermentCode: "Business Desk",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 53323,
        DocName: "P-M407 : Azure Commitment Discount (Direct)",
        FileName:
          "(P-M407)EnrAmend(Dir)(AzureCommitmentDiscount(Direct))(SPA)(Aug2017)(IU).docx",
        Language: "SPA",
        Code: "P-M407",
        EmpowermentCode: "Business Desk",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 45482,
        DocName: "M46 : STW",
        FileName:
          "(M46)EnrAmend(StructuredTaskWorker(STW)-LimitedUseOffice)(WW)(CHT)(Aug2017)(IU).docx",
        Language: "CHT",
        Code: "M46",
        EmpowermentCode: "Business Desk",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 48377,
        DocName: "M49 : Full Year Transition",
        FileName:
          "(M49)EnrAmend(FullYearTransitions)(WW)(CHT)(Aug2017)(IU).docx",
        Language: "CHT",
        Code: "M49",
        EmpowermentCode: "Business Desk",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 45469,
        DocName: "M46 : STW",
        FileName:
          "(M46)EnrAmend(StructuredTaskWorker(STW)-LimitedUseOffice)(WW)(ENG)(Aug2017)(IU).docx",
        Language: "ENG",
        Code: "M46",
        EmpowermentCode: "Business Desk",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 45481,
        DocName: "M46 : STW",
        FileName:
          "(M46)EnrAmend(StructuredTaskWorker(STW)-LimitedUseOffice)(WW)(SPA)(Aug2017)(IU).docx",
        Language: "SPA",
        Code: "M46",
        EmpowermentCode: "Business Desk",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 48378,
        DocName: "M49 : Full Year Transition",
        FileName:
          "(M49)EnrAmend(FullYearTransitions)(WW)(SPA)(Aug2017)(IU).docx",
        Language: "SPA",
        Code: "M49",
        EmpowermentCode: "Business Desk",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 55990,
        DocName: "M407 : Azure Commitment Discount",
        FileName:
          "(M407)EnrAmend(AzureCommitmentDiscount)(WW)(SPA)(Aug2018)(IU).docx",
        Language: "SPA",
        Code: "M407",
        EmpowermentCode: "Business Desk",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 65700,
        DocName: "M460 : Enrollment Extension",
        FileName:
          "(M460)EnrAmend(EnrollmentExtension)(WW)(RUS)(May2020)(IU).docx",
        Language: "RUS",
        Code: "M460",
        EmpowermentCode: "Business Desk",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 56971,
        DocName: "M407 : Azure Commitment Discount",
        FileName:
          "(M407)EnrAmend(AzureCommitmentDiscount)(WW)(CHS)(Jan2019)(IU).docx",
        Language: "CHS",
        Code: "M407",
        EmpowermentCode: "Business Desk",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 45486,
        DocName: "M46 : STW",
        FileName:
          "(M46)EnrAmend(StructuredTaskWorker(STW)-LimitedUseOffice)(WW)(FRE)(Aug2017)(IU).docx",
        Language: "FRE",
        Code: "M46",
        EmpowermentCode: "Business Desk",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 48375,
        DocName: "M49 : Full Year Transition",
        FileName:
          "(M49)EnrAmend(FullYearTransitions)(WW)(CHS)(Aug2017)(IU).docx",
        Language: "CHS",
        Code: "M49",
        EmpowermentCode: "Business Desk",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 45484,
        DocName: "M46 : STW",
        FileName:
          "(M46)EnrAmend(StructuredTaskWorker(STW)-LimitedUseOffice)(WW)(CHS)(Aug2017)(IU).docx",
        Language: "CHS",
        Code: "M46",
        EmpowermentCode: "Business Desk",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 48374,
        DocName: "M49 : Full Year Transition",
        FileName:
          "(M49)EnrAmend(FullYearTransitions)(WW)(FRE)(Aug2017)(IU).docx",
        Language: "FRE",
        Code: "M49",
        EmpowermentCode: "Business Desk",
        ExpirationDate: null,
        EmpowermentName: null
      },
      {
        Id: 69032,
        DocName: "M407 : Azure Commitment Discount",
        FileName:
          "(M407)EnrAmend(AzureCommitmentDiscount)(WW)(GRE)(May2021)(IU).docx",
        Language: "GRE",
        Code: "M407",
        EmpowermentCode: "Business Desk",
        ExpirationDate: null,
        EmpowermentName: null
      }
    ];
    //});
  }
}
