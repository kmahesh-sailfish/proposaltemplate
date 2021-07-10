import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild
} from "@angular/core";
import { DataTableDirective } from "angular-datatables";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { Location } from "@angular/common";
import { ProposalService } from "src/app/proposal.service";
import { FormGroup, FormControl } from "@angular/forms";
import { NgbModalConfig, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { SearchProposalComponent } from "../modeal/search-proposal/search-proposal.component";
import { SharedService } from "../../sharedservices/shared.service";
import { Subject } from "rxjs";

import { NgForm } from '@angular/forms';
import { ShareProposalComponent } from '../modeal/share-proposal/share-proposal.component';
import { DelProposalComponent } from "../modeal/del-proposal/del-proposal.component";

@Component({
  selector: "app-proposal-overview",
  templateUrl: "./proposal-overview.component.html",
  styleUrls: ["./proposal-overview.component.css"],
  providers: [NgbModalConfig, NgbModal]
})
export class ProposalOverviewComponent implements OnInit, OnDestroy {
  public sampe:any={};
  dtOptions: DataTables.Settings = {};
  public showbutton: boolean;
  public proposalIdentifierReq: any;
  public Identifier: any;
  public doctype: any;
  public IsLinked: any;
  public showLinkedProposalsbutton: boolean;
  public Amendments: any[] = [];
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject<any>();
  public modelRef: any;
  public searchAmendment: any;
  public HRDDDetails: any = [];
  public HRDDCountries: any = [];
  public propOverView: FormGroup;
  public sourceId: any;
  public editProposalObj: any = {};
  public pricingCountries: any[];
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
    this.getLrdCountreis();
    this.getById();
    this.getAmendmentsInfoStaticData();
  //  this.getmetaData(); // load the data table
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
      createdByAlias: "V2Alias",
      isSuperUser: true
    };
    this.proposalService.getProposal(obj).subscribe((data: any) => {
      this.editProposalObj = data["_sourceObject"];
      console.log(this.editProposalObj, "editProposalObj");
      this.getAmendements(this.editProposalObj);
      this.loadForm();
     // this.getHrdCountries();
    });
  }

  getAmendmentsInfoStaticData(){
    this.proposalService.getamendmentstaticInfo().subscribe(data => {
      console.log('data',data)
      // $scope.vm.DiscountAmendments = data.DiscountAmendments;
      // $scope.vm.Currencies = data.Currencies;
    })
  }
  getProposal(obj){
    this.proposalService.getProposal(obj).subscribe((data: any) => {
      this.editProposalObj = data["_sourceObject"];
      console.log(this.editProposalObj, "editProposalObj");
      this.getAmendements(this.editProposalObj); 
    if(this.editProposalObj == null || this.editProposalObj.ID == undefined)
     {
         console.log({ content: "Proposal does not exists or you don`t have permissions to view it." });
      }
      
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
      .subscribe((data: any) => (this.pricingCountries = data));
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
      id: this.editProposalObj['proposalEntity']?.id,
      proposalId: this.editProposalObj['proposalEntity']?.proposalId,
    
      pricingCountry: block == "pricingCountry"? this.propOverView.get("pricingCountry").value
     : Object.keys(this.editProposalObj).length > 0? this.editProposalObj['proposalEntity']?.pricingCountry :"",
          // : this.editProposalObj.pricingCountry,

      enrollmentId: block == "enrollmentId" ? this.propOverView.get("enrollmentId").value :
       Object.keys(this.editProposalObj).length > 0? this.editProposalObj['proposalEntity']?.enrollmentId :"",

      agreementId:
        block == "agreementId"
          ? this.propOverView.get("agreementId").value
          : Object.keys(this.editProposalObj).length > 0? this.editProposalObj['proposalEntity']?.agreementId :"",
      identifier:
        block == "identifier"
          ? this.propOverView.get("identifier").value
          : Object.keys(this.editProposalObj).length > 0? this.editProposalObj['proposalEntity']?.identifier :null,

      customerName:
        block == "customerName"
          ? this.propOverView.get("customerName").value
          : Object.keys(this.editProposalObj).length > 0? this.editProposalObj['proposalEntity']?.customerName :"",

      dealNickname:
        block == "dealNickname"
          ? this.propOverView.get("dealNickname").value
          : Object.keys(this.editProposalObj).length > 0? this.editProposalObj['proposalEntity']?.dealNickname :"",

      notes:   block == "notes" ? this.propOverView.get("notes").value   : Object.keys(this.editProposalObj).length > 0? this.editProposalObj['proposalEntity']?.notes :"",
      LastModifiedBy: "V2Alias"
    };
  
    this.proposalService.updateProposal(obj).subscribe((data: any) => {
      // this.editProposalObj = data["result"]["_sourceObject"];
      // console.log(this.editProposalObj, "editProposalObj");
     // this.loadForm();
    });
  }

  // form loading -------------------------------------

  loadForm() {
    console.log(this.editProposalObj, "edit");

    this.propOverView = new FormGroup({
      proposalId: new FormControl({
        value: this.editProposalObj['proposalEntity']?.proposalId,
        disabled: true
      }),
      pricingCountry: new FormControl(this.editProposalObj['proposalEntity']?.pricingCountry ? this.editProposalObj['proposalEntity']?.pricingCountry:null ),
      enrollmentId: new FormControl(this.editProposalObj['proposalEntity']?.enrollmentId ? this.editProposalObj['proposalEntity']?.enrollmentId :null),
      agreementId: new FormControl(this.editProposalObj['proposalEntity']?.agreementId ? this.editProposalObj['proposalEntity']?.agreementId:null),
      customerName: new FormControl(this.editProposalObj['proposalEntity']?.customerName ? this.editProposalObj['proposalEntity']?.customerName:null),
      dealNickname: new FormControl(this.editProposalObj['proposalEntity']?.dealNickname ? this.editProposalObj['proposalEntity']?.dealNickname:null),
      identifier: new FormControl(this.editProposalObj['proposalEntity']?.identifier ? this.editProposalObj['proposalEntity']?.identifier : ""),
      notes: new FormControl(this.editProposalObj['proposalEntity']?.notes ? this.editProposalObj['proposalEntity']?.notes:null),
      searchAmendment: new FormControl()
    });
  }
  get f() {
    return this.propOverView.controls;
  }
  checkById() {
    if (this.propOverView.get("identifier").value == "") {
      this.IdentifierValid = true;
    }
  }
  upwordItem(obj, category, fromIndex) {
    var toIndex;
    if (category == "up") {
      toIndex = fromIndex - 1;
      var element = this.Amendments[fromIndex];
      this.Amendments.splice(fromIndex, 1);
      this.Amendments.splice(toIndex, 0, element);
    } else {
      toIndex = fromIndex + 1;
      var element = this.Amendments[fromIndex];
      this.Amendments.splice(fromIndex, 1);
      this.Amendments.splice(toIndex, 0, element);
    }
  }

  removeItem(obj) {
    
var deleObj={};
deleObj['AmendmentId'] = obj.id;
this.proposalService.deleteAmendate(deleObj).subscribe((data: any) => {
  this.getProposalById()
})

  
  }
  open() {
    this.proposalService
      .searchAmendement(this.propOverView.get("searchAmendment").value)
      .subscribe((data: any) => {
        console.log(data);
        const modelRef = this.modalService.open(SearchProposalComponent, {
          // backdrop: "static",
          // keyboard: false,
          size: "lg"
        });
        modelRef.componentInstance.searchAmendList = data.result;
        modelRef.componentInstance.selectAmendement.subscribe(receivedEntry => {
          var obj1=
           [ {
              "Id": receivedEntry.id,
              "DocName": receivedEntry.docName,
              "FileName":receivedEntry.fileName,
              "Language": receivedEntry.language,
              "code": receivedEntry.code,
              "EmpowermentCode": receivedEntry.empowermentCode,
              "ExpirationDate": receivedEntry.expirationDate,
              "EmpowermentName": receivedEntry.empowermentName
            }
          ]
          
          this.saveAmendate(obj1);
        });
      });
  }
  saveAmendate(amendments){
  var obj= {
      "ProposalID":  this.sourceId,
      "isSuperUser": false,
      "userAlias": "V2Alias",
      "AmendmentDocs": amendments
    }
    this.proposalService.saveMetadata(obj).subscribe(data=>{
      console.log('dataAmendata', data);
      this.Amendments.push(data["amendments"]);
     //this.getAmendements(data["result"])
      this.editProposalObj = data;
      this.getVersion();
    })
  }
  reloadTable() {
    this.dtTrigger.next();
  }
  getAmendements(data){
    this.Amendments = data["amendments"] == null ? [] : data["amendments"];
    this.reloadTable();
    this.getVersion()
  }

  getVersion() {
    
    for (var i = 0; i < this.Amendments.length; i++){
      this.Amendments[i].location = this.Amendments[i].fileName.split("(")[3].split(")")[0];
       this.Amendments[i].version= this.Amendments[i].fileName.split("(")[5].split(")")[0]
    }
   // return (item.split("(")[5].split(")")[0])
  }
  getLocation(item) {
    return (item.split("(")[3].split(")")[0])
  }
    //lrdCountries List
  lrdCountries:any=[];

  getLrdCountreis(){
    this.proposalService.getLrdCountries().subscribe(data => {
    this.lrdCountries = data;
    });
  }
  doesNonPricingDocumentsExists (){
  if (this.Amendments.length >0) {
      var result = this.Amendments.filter(function (f) { return f.code[0] != 'P'; });

      return result && result.length > 0;
  }

  return false;
  }
isPricingCountry(){

  if (this.lrdCountries.length > 0) {

      var result =this.lrdCountries.filter(function (d) { return d == this.editProposalObj['proposalEntity']?.pricingCountry });
      return result && result.length > 0;
  }

  return false;
  }
IsPricingAmendmentExists() {
  var IsContainsPricingAmendment = false;
   for (var i = 0; i < this.Amendments.length; i++) {
  var amendmentCode = this.Amendments[i].code.toLowerCase();
  if (amendmentCode.startsWith("p-")) {
      IsContainsPricingAmendment= true;
          break;
                }
            }
            return IsContainsPricingAmendment;
}
  generate() {
  this.Identifier=1;
 
  if (this.Identifier != undefined && this.Identifier != null && this.Identifier != 0) {
      this.proposalIdentifierReq = false;
      if (this.Amendments.length > 0) {
         // console.log("IsPricingAmendmentExists " +IsPricingAmendmentExists())
          if (this.isPricingCountry() || this.IsPricingAmendmentExists()) {
              this.showbutton = true;
          }
          else if (this.IsLinked) {
              this.showLinkedProposalsbutton = true;
              this.doctype = 0;
          }
          else{
//   window.location.href = "/api/proposal/download/" + this.editProposalObj['proposalEntity']?.proposalId, + "/0";
          }
           
      }
      else {
        alert('No Amendments in proposal')
         // ngToast.create({ content: "No Amendments in proposal" });
      }
  }
  else {
      this.proposalIdentifierReq = true;
  }
}
generatePricing(){
 if (!this.doesPricingDocumentsExists()) {
  //  ngToast.create({ content: "No Pricing Amendments in proposal" });
   }
 else if (this.IsLinked) {
  this.showLinkedProposalsbutton = true;
 this.doctype = 1;
     }
            else {
                this.showbutton = false;
               // window.location.href = "/api/proposal/download/" + this.editProposalObj['proposalEntity']?.proposalId+ "/1";
            }
        };

        generateNonPricing = function () {
            
            if (!this.doesNonPricingDocumentsExists()) {
               // ngToast.create({ content: "No Non-Pricing Amendments in proposal" });
            }
            else if (this.IsLinked) {
                this.showLinkedProposalsbutton = true;
                this.doctype = 2;
            }
            else {

                this.showbutton = false;
              //  window.location.href = "/api/proposal/download/" + this.editProposalObj['proposalEntity']?.proposalId + "/2";
            }
        };
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
doesPricingDocumentsExists() {
    if (this.Amendments && this.Amendments) {
        var result = this.Amendments.filter(function (f) { return (f.code[0] == 'P' || (f.CTMCode!=null && f.CTMCode[0] == 'P')); });
               return result && result.length > 0;
            }

            return false;
  }
  submitForm(form: NgForm) {
   // this.isSubmitted = true;
  if(!form.valid) {
    return false;
    } else {
    alert(JSON.stringify(form.value))
     }
   }
   openDelegationPoup(){
    const modelRef = this.modalService.open(DelProposalComponent, {
      // backdrop: "static",
      // keyboard: false,
   size: "sm",
   centered: true,
     });
     modelRef.componentInstance.delegationProposalId =  this.sourceId; 
   }
  openPoup() {
     const modelRef = this.modalService.open(ShareProposalComponent, {
          // backdrop: "static",
          // keyboard: false,
       size: "sm",
       centered: true,
    });
     modelRef.componentInstance.shareProposalId =  this.sourceId;
   }
   showEditDocumentPopup = function (obj, protection) {
   var isEdit = protection == '1';
   var aid = obj.id;
    // if (DiscountAmendments.length == 0)
    //     getAmendmentInfoStaticData();
    // var amendment = $scope.model.Amendments.filter(function (d) { return d.Id == aid; })[0];
    // var discountedAmendmentInfo = AppService.isDiscountedAmendment(DiscountAmendments, amendment.Code)[0];
    // if (discountedAmendmentInfo != null && !isEdit) {
    //     $scope.editAmendmentDiscountData(discountedAmendmentInfo, amendment);
    // }
    //else {
       // EditDocumentService.startEditDocument(proposalId, id).then(function (data) {
          //  if (data && data.FileName) {
               // donthide = true;
               // $(".exe-loader").show();
               // intializeTimer(data.FileName);
                //var url = "http://localhost:5556/api/home/opendocument/" + id + '/' + data.FileName + '/' + protection;
                //$.get(url, function (data, status) {
                //});
                window.location.href = "amendmentappwordservice://documentsService?aid=" + aid + "&fileName=" + obj.fileName + "&protection=" + protection;

          //  }
      //  });
  //  }

    
};
showEditAdditionalDocumentFields(obj,protection)
{
  var isEdit = protection == '1';
 var  aid = obj.id;
 // EditDocumentService.startEditDocument(proposalId, id).then(function (data) {
     // if (data && data.FileName) {
         // donthide = true;
         // $(".exe-loader").show();
         // intializeTimer(data.FileName);
          window.location.href = "amendmentappwordservice://documentsService?aid=" + aid + "&fileName=" + obj.fileName + "&protection=" + protection;

     // }
 // });
}
openActiveproposal(){
  this.router.navigate(["activeproposal"]);
}


}
function Proposal(data) {
  this.ID = data.ID;
  this.ProposalId = data.ProposalId;
  this.PricingCountry = data.PricingCountry;
  this.Empowerment = data.Empowerment;
  this.EnrollmentId = data.EnrollmentId;
  this.AgreementId = data.AgreementId;
  this.PageBreak = data.PageBreak;
  this.CustomerName = data.CustomerName;
  this.Identifier = data.Identifier;
  this.DealNickname = data.DealNickname;
  this.Notes = data.Notes;
  this.HRDDTotalValue = data.HRDDTotalValue;
  this.HRDDMaxDiscount = data.HRDDMaxDiscount;
  this.IsLinked = data.IsLinked;
  this.IsDraft = data.IsDraft;
  // this.vm.isLe ||
  this.IsEditDocumentViewable =  data.DelegationStatus == 2 || data.DelegationStatus == 5 || data.IsFromDateRangeDelegation;
  this.Amendments = [];

  if (data.Amendments && data.Amendments.length > 0) {
      for (var i = 0; i < data.Amendments.length; i++) {
          this.Amendments.push(new Amendment(data.Amendments[i]));
      }
  }

  this.ID = data.ID;
  
}

function Amendment(amendment) {
  this.Code = amendment.Code;
  this.Language = amendment.Language;
  this.Id = amendment.Id;
  this.Order = amendment.Order;
  this.CTMCode = amendment.CTMCode;
  this.FileName = amendment.Code.indexOf("CTM") >= 0 ? amendment.FileName : '';
  this.IsCTMPricing = amendment.IsCTMPricing;
  this.IsPricingAmendment = amendment.IsPricingAmendment;
  this.HasEditableTable = amendment.HasEditableTable;
  this.IsEdited = amendment.IsEdited ? "Yes" : "No";
  this.IsEditField = amendment.IsEditField ? "Yes" : "No";
  this.Discount = amendment.Discount;
  this.DealSize = amendment.DealSize;
  this.BeginDate = amendment.BeginDate;
  this.EndDate = amendment.EndDate;
  this.CommitToConsume = amendment.CommitToConsume;
  this.CurrencyCode = amendment.CurrencyCode;
  this.Type = amendment.Type;

  if (amendment.Code.indexOf("CTM") == -1) {
      this.Title = amendment.FileName;
      this.Version = amendment.FileVersion;
      this.Loc = amendment.Loc;
      this.DI = amendment.DI;
  }
}

function AmendmentOrder(id, currentOrder, previousOrder, proposalId, isDown) {
  this.Id = id;
  this.CurrentOrder = currentOrder;
  this.PreviousOrder = previousOrder;
  this.ProposalId = proposalId;
  this.IsDown = isDown;
}