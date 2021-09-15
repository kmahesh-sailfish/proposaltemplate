import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProposalService } from 'src/app/proposal.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SharedService } from 'src/app/sharedservices/shared.service';

@Component({
  selector: 'app-mopet-details',
  templateUrl: './mopet-details.component.html',
  styleUrls: ['./mopet-details.component.css'],
})
export class MopetDetailsComponent implements OnInit {
  public FileNames: any;
  public Content: any;
  public pricingCountryFile = null;
  public pricingCountryFileName = null;
  public nonPricingCountryFileName: any;
  public nonPricingCountryFile: any;
  public isSubmitted = true;
  public isPricingContry: boolean = false;
  public SpanName: any = 'Upload Offline Document to Proposal';
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
  public HRDDDetails: any = [];
  public HRDDCountries: any = [];
  public HRDDAmendments: any[] = [];
  public HRDDeal: any;
  public HRDDiscount: any;
  public HRDDCondition: any;
  public showPricingCountryAlignDescription: any;
  public MopetOverView: FormGroup;
  fileList: File[] = [];
  listOfFiles: any[] = [];
  @ViewChild('attachments') attachment: any;
  constructor(
    public proposalService: ProposalService,
    public route: ActivatedRoute,
    private toastr: ToastrService,
    private sharedSerivice: SharedService
  ) {}

  ngOnInit(): void {
    this.userId = localStorage.getItem('userAlias');
    // this.getPricingCountry();
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.ProposalId = +params.get('proposalId');
    });
    this.domainLoad();

    this.loadLardCountries();
  }
  loadLardCountries() {
    this.proposalService.getLrdCountries().subscribe((data) => {
      this.lrdCountries = data;
    });
  }
  coutryChanged() {
    var result = this.proposalService.isPricingCountry(
      this.lrdCountries,
      this.mopetDetails.pricingCountry
    );
    this.updatemopetDetails();
    //   var obj = {
    //     id: this.editProposalObj['proposalEntity']?.id,
    //     proposalId:  this.MopetOverView.get("proposalId").value ? this.MopetOverView.get("proposalId").value:
    //     Object.keys(this.editProposalObj).length > 0 ? this.editProposalObj['proposalEntity']?.proposalId : "",

    //     pricingCountry:  this.MopetOverView.get("pricingCountry").value ? this.MopetOverView.get("pricingCountry").value:
    //         Object.keys(this.editProposalObj).length > 0 ? this.editProposalObj['proposalEntity']?.pricingCountry : "",
    //     // : this.editProposalObj.pricingCountry,

    //     enrollmentId: this.MopetOverView.get("enrollmentId").value ? this.MopetOverView.get("enrollmentId").value:
    //         Object.keys(this.editProposalObj).length > 0 ? this.editProposalObj['proposalEntity'] ?.enrollmentId : "",

    //     agreementId:
    //         this.MopetOverView.get("agreementId").value ? this.MopetOverView.get("agreementId").value:
    //         Object.keys(this.editProposalObj).length > 0 ? this.editProposalObj['proposalEntity']?.agreementId : "",
    //     identifier: this.MopetOverView.get("identifier").value ? this.MopetOverView.get("identifier").value:
    //         Object.keys(this.editProposalObj).length > 0 ? this.editProposalObj['proposalEntity']?.identifier : null,

    //     customerName:
    //         this.MopetOverView.get("customerName").value ? this.MopetOverView.get("customerName").value:
    //         Object.keys(this.editProposalObj).length > 0 ? this.editProposalObj['proposalEntity']?.customerName : null,

    //     dealNickname:
    //         this.MopetOverView.get("dealNickname").value ? this.MopetOverView.get("dealNickname").value:
    //         Object.keys(this.editProposalObj).length > 0 ? this.editProposalObj['proposalEntity']?.dealNickname : "",

    //     notes: this.MopetOverView.get("notes").value ? this.MopetOverView.get("notes").value:
    //         Object.keys(this.editProposalObj).length > 0 ? this.editProposalObj['proposalEntity'] ?.notes : "",
    //     LastModifiedBy: this.userId
    // };
    this.isPricingContry = result;
    if (result)
      this.SpanName = 'Upload Offline Non-Pricing Document to Proposal';
    else this.SpanName = 'Upload Offline Document to Proposal';
    this.model.MetaData.PricingCountry = this.model.PricingCountry;
    this.SaveMetadata();
  }
  SaveMetadata() {
    if (!this.isSubmitted) {
      // this.proposalService.SaveMetadata(this.model.ID, this.model.MetaData).then(function (data) {
      //     console.log(this.model.MetaData);
      // })
    }
  }
  getProposalById() {
    var obj = {
      id: this.ProposalId,
      createdByAlias: this.userId,
      isSuperUser: true,
    };
    this.proposalService.getProposal(obj).subscribe((data: any) => {
      this.newProposal = data;
      this.model = new Proposal(data);
      this.mopetDetails.pricingCountry = data['proposalEntity'].pricingCountry;
      this.mopetDetails.proposalId = data['proposalEntity'].proposalId;
      this.mopetDetails.customerName = data['proposalEntity'].customerName;
      this.mopetDetails.lastModifiedBy = data['proposalEntity'].lastModifiedBy;
      this.mopetDetails['proposalEntity'] = data['proposalEntity'];
    });
    this.proposalService.getHrdCountries().subscribe((data: any) => {
      this.HRDDDetails = data;
      this.HRDDCountries = data.map((country) => {
        return country.name;
      });
      if (this.model.PricingCountry != '') {
        for (var i = 0; i < data.length; i++) {
          if (data[i].name == this.model.PricingCountry) {
            this.HRDDAmendments = data[i].hrddAmendments;
            this.HRDDeal = data[i].dealAmount;
            this.HRDDiscount = data[i].discount;
            this.HRDDCondition = data[i].hrddCondition;
          }
        }
      }
    });
    //  this.tempModel = data;
    //  this.supportMailSubject = "Amendment Service Crash-dump : Proposal Overview " + this.model.ProposalId;
    //  this.CheckPagebreak();
    //  this.appendAmendments();
    this.proposalService.getLrdCountries().subscribe((data) => {
      this.lrdCountries = data;
      this.sharedSerivice.setLardCountries(data);
      var isPricingCountry = this.proposalService.isPricingCountry(
        this.lrdCountries,
        this.model.PricingCountry
      );
      if (isPricingCountry) {
        this.showPricingCountryAlignDescription = true;
        // $timeout(function () { this.showPricingCountryAlignDescription = false; }, 6000);
      } else {
        this.Amendments.forEach((a, c) => {
          if (a.code.indexOf('P-') == 0) {
            this.showPricingCountryAlignDescription = true;
            // $timeout(function() {
            //     this.showPricingCountryAlignDescription = false;
            // }, 6000);
          }
        });
      }
      this.coutryChanged();
    });
  }
  onFileChanged(event: any) {
    for (var i = 0; i <= event.target.files.length - 1; i++) {
      var selectedFile = event.target.files[i];
      this.getbase64(selectedFile);
      this.listOfFiles.push(selectedFile.name);
    }

    //this.attachment.nativeElement.value = '';
  }
  getbase64(fileObj) {
    let file = fileObj;
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event: Event) => {
      this.Content = reader.result;
      this.FileNames = file.name;
      this.Content = btoa(this.Content);

      console.log(reader.result, 'base64444');
      var FileSpec={};
      FileSpec['FileName']= this.FileNames;
      FileSpec['Content']= this.Content;
      var obj = {
        FileSpec:FileSpec,       
        pid: this.ProposalId,
        isPricing: this.isPricingContry,
      };
      this.proposalService.uploadDocument(obj).subscribe(data=>{

      })
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }
  removeSelectedFile(index) {
    this.deleteNonPricing(index);
  }
  domainLoad() {
    this.proposalService.domainConetent().subscribe((data) => {
      if (Object.keys(data).length > 0) {
        this.getLanguages = data.languages;
        this.config = data.countries;
        this.userProgram = data['domainData'].programs;
        this.opCenterVales = data['domainData'].operationsCenters;
        this.getUserPreference();
      }
    });
  }
  getUserPreference() {
    this.proposalService.getUserPreferences(this.userId).subscribe((data) => {
      this.mopetDetails = data;
      this.getProposalById();
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
      IsSuperAdmin: false,
    };
    console.log(obj);
    this.proposalService.addMopetDetails(obj).subscribe((data) => {
      console.log(data);
    });
  }
  updatemopetDetails() {
    var obj = {
      Id: this.newProposal.metaData.id,
      CustomerName: this.newProposal.proposalEntity.customerName,
      PricingCountry: this.mopetDetails.pricingCountry,
      LCAlias: this.newProposal.proposalEntity.lastModifiedBy,
      OperationCenterId: this.mopetDetails.opCenter,
      ProgramId: this.mopetDetails.program,
      Notes: this.newProposal.proposalEntity.comments,
      ProposalId: this.ProposalId,
      NonPricingFileName: null,
      PricingFileName: null,
    };

    this.proposalService.updatemopetDetails(obj).subscribe((data) => {
      console.log(data);
    });
  }
  isPricingCountry() {
    if (this.lrdCountries.length > 0) {
      var result = this.lrdCountries.filter((d) => {
        return d == this.mopetDetails.pricingCountry;
      });
      return result && result.length > 0;
    }

    return false;
  }
  IsPricingAmendmentExists() {
    var IsContainsPricingAmendment = false;
    for (var i = 0; i < this.Amendments.length; i++) {
      var amendmentCode = this.Amendments[i].code.toLowerCase();
      if (amendmentCode.startsWith('p-')) {
        IsContainsPricingAmendment = true;
        break;
      }
    }
    return IsContainsPricingAmendment;
  }
  // generatePricing() {
  //   if (!this.doesPricingDocumentsExists()) {
  //     // ngToast.create({ content: "No Pricing Amendments in proposal" });
  //   }
  //   else {
  //     this.showbutton = false;
  //     window.location.href = '/api/proposal/download/' + this.model.ID + '/1';
  //   }
  // }
  // generateNonPricing() {
  //   if (!this.doesNonPricingDocumentsExists()) {
  //     //  ngToast.create({ content: "No Non-Pricing Amendments in proposal" });
  //   } else {
  //     this.showbutton = false;
  //     window.location.href = '/api/proposal/download/' + this.model.ID + '/2';
  //   }
  // }
  generatePricing() {
    if (!this.doesPricingDocumentsExists()) {
      alert({ content: 'No Pricing Amendments in proposal' });
    } else if (this.model.IsLinked) {
      this.showLinkedProposalsbutton = true;
      this.doctype = 1;
    } else {
      this.showbutton = false;
      var obj = {};
      obj['pid'] = this.mopetDetails['proposalEntity'].id;
      obj['type'] = '1';
      obj['userAlias'] = this.mopetDetails['proposalEntity'].createdByAlias;
      obj['isSuperUser'] = false;
      this.proposalService.generateDocFile(obj).subscribe((data) => {
        this.saveData(data.content, data.fileName);
      });
    }
  }

  generateNonPricing() {
    if (!this.doesNonPricingDocumentsExists()) {
      // ngToast.create({ content: "No Non-Pricing Amendments in proposal" });
    } else if (this.model.IsLinked) {
      this.showLinkedProposalsbutton = true;
      this.doctype = 2;
    } else {
      this.showbutton = false;
      var obj = {};
      obj['pid'] = this.mopetDetails['proposalEntity'].id;
      obj['type'] = '2';
      obj['userAlias'] = this.mopetDetails['proposalEntity'].createdByAlias;
      obj['isSuperUser'] = false;
      this.proposalService.generateDocFile(obj).subscribe((data) => {
        this.saveData(data.content, data.fileName);
      });
    }
  }
  // generate() {
  //   if (this.model.Amendments.length > 0) {
  //     if (this.isPricingCountry()) {
  //       this.showbutton = !this.showbutton;
  //     } else
  //       window.location.href = '/api/proposal/download/' + this.model.ID + '/0';
  //   } else {
  //     // ngToast.create({ content: "No Amendments in proposal" });
  //   }
  // }
  generate() {
    if (
      this.model.Identifier != undefined &&
      this.model.Identifier != null &&
      this.model.Identifier != 0
    ) {
      this.proposalIdentifierReq = false;
      if (this.model.Amendments.length > 0) {
        // console.log("IsPricingAmendmentExists " +IsPricingAmendmentExists())
        if (this.isPricingCountry() || this.IsPricingAmendmentExists()) {
          this.showbutton = true;
        } else if (this.model.IsLinked) {
          this.showLinkedProposalsbutton = true;
          this.doctype = 0;
        } else {
          var obj = {};
          obj['pid'] = this.mopetDetails['proposalEntity'].id;
          obj['type'] = '0';
          obj['userAlias'] = this.mopetDetails['proposalEntity'].createdByAlias;
          obj['isSuperUser'] = false;
          this.proposalService.generateDocFile(obj).subscribe((data) => {
            this.saveData(data.content, data.fileName);
          });
          // window.location.href = "/api/proposal/download/" + this.editProposalObj['proposalEntity']?.proposalId, + "/0";
        }
      } else {
        alert('No Amendments in proposal');
        // ngToast.create({ content: "No Amendments in proposal" });
      }
    } else {
      this.proposalIdentifierReq = true;
    }
  }
  deleteNonPricing(index) {
    var obj = { proposalId: this.ProposalId, isPricing: false };
    this.proposalService.deleteDocument(obj).subscribe((data) => {
      this.nonPricingCountryFile = null;
      this.nonPricingCountryFileName = null;
      this.listOfFiles.splice(index, 1);
    });
  }
  deletePricing() {
    var obj = { proposalId: this.ProposalId, isPricing: true };
    if (!this.isSubmitted) {
      this.proposalService.deleteDocument(obj).subscribe((data) => {
        this.pricingCountryFile = null;
        this.pricingCountryFileName = null;
      });
    }
  }
  downloadNonPricing() {
    window.location.href =
      '/api/mopet/downloadattachement/' + this.model.ID + '/' + false;
  }

  downloadPricing() {
    window.location.href =
      '/api/mopet/downloadattachement/' + this.model.ID + '/' + true;
  }
  base64toBlob(byteString) {
    var ia = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ia], { type: 'octet/stream' });
  }
  saveData = (function () {
    var a = document.createElement('a');
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
  })();
  doesPricingDocumentsExists() {
    if (this.model.Amendments && this.model.Amendments) {
      var result = this.model.Amendments.filter(function (f) {
        return f.Code[0] == 'P' || (f.CTMCode != null && f.CTMCode[0] == 'P');
      });

      return result && result.length > 0;
    }

    return false;
  }
  doesNonPricingDocumentsExists() {
    if (this.model.Amendments && this.model.Amendments) {
      var result = this.model.Amendments.filter(function (f) {
        return f.Code[0] != 'P';
      });

      return result && result.length > 0;
    }

    return false;
  }
}
function Proposal(data) {
  if (
    data.proposalEntity != undefined &&
    Object.keys(data.proposalEntity).length > 0
  ) {
    this.ID = data.proposalEntity.id;
    this.ProposalId = data.proposalEntity.proposalId;
    this.PricingCountry = data.proposalEntity.pricingCountry;
    // this.Empowerment = data.proposalEntity.Empowerment;
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
    this.MetaData = data.metaData;
    // this.vm.isLe ||
    this.IsEditDocumentViewable =
      data.proposalEntity.delegationStatus == 2 ||
      data.proposalEntity.delegationStatus == 1 ||
      data.isFromDateRangeDelegation;
  } else {
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
    this.IsEditDocumentViewable =
      data.delegationStatus == 2 ||
      data.delegationStatus == 1 ||
      data.isFromDateRangeDelegation;
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

  this.Code = amendment.code ? amendment.code : amendment.amendmentCode;
  this.Language = amendment.language;
  this.Id = amendment.id;
  (this.Empowerment = amendment.empowerment), (this.Order = amendment.order);
  this.CTMCode = amendment.ctmCode;
  if (amendment.code != undefined) {
    this.FileName =
      amendment.code.indexOf('CTM') >= 0 ? amendment.FileName : '';
  } else {
    if (amendment.amendmentCode != undefined) {
      this.FileName =
        amendment.amendmentCode.indexOf('CTM') >= 0 ? amendment.FileName : '';
    }
  }

  this.IsCTMPricing = amendment.isCTMPricing;
  this.IsPricingAmendment = amendment.isPricingAmendment;
  this.HasEditableTable = amendment.hasEditableTable;
  this.IsEdited = amendment.isEdited ? 'Yes' : 'No';
  this.IsEditField = amendment.isEditField ? 'Yes' : 'No';
  this.Discount = amendment.discount;
  this.DealSize = amendment.dealSize;
  this.BeginDate = amendment.beginDate;
  this.EndDate = amendment.endDate;
  this.CommitToConsume = amendment.commitToConsume;
  this.CurrencyCode = amendment.currencyCode;
  this.Type = amendment.type;

  if (amendment.code != undefined && amendment.code.indexOf('CTM') == -1) {
    this.Title = amendment.fileName;
    this.Version = amendment.fileVersion;
    this.Loc = amendment.loc;
    this.DI = amendment.di;
  }
  if (
    amendment.amendmentCode != undefined &&
    amendment.amendmentCode.indexOf('CTM') == -1
  ) {
    this.Title = amendment.fileName;
    this.Version = amendment.fileVersion;
    this.Loc = amendment.loc;
    this.DI = amendment.di;
  }
}
