import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import {DataTableDirective} from "angular-datatables";
import {Router,ActivatedRoute,ParamMap} from "@angular/router";
import {Location} from "@angular/common";
import {ProposalService} from "src/app/proposal.service";
import {FormGroup,FormControl} from "@angular/forms";
import {NgbModalConfig,NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {SearchProposalComponent} from "../modeal/search-proposal/search-proposal.component";
import {SharedService} from "../../sharedservices/shared.service";
import {Subject} from "rxjs";
import {NgForm} from '@angular/forms';
import {ShareProposalComponent} from '../modeal/share-proposal/share-proposal.component';
import {DelProposalComponent} from "../modeal/del-proposal/del-proposal.component";
import { PriceProposalComponent } from '../modeal/price-proposal/price-proposal.component';

@Component({
    selector: "app-proposal-overview",
    templateUrl: "./proposal-overview.component.html",
    styleUrls: ["./proposal-overview.component.css"],
    providers: [NgbModalConfig, NgbModal]
})
export class ProposalOverviewComponent implements OnInit, OnDestroy {
    public userId: any;
    // ----------------------------------
    public discountFeedback = '';
    public discountFeedbackContainer = '';
    public ctcFeedback = '';
    public ctcFeedbackContainer = '';
    public dSizeFeedback = '';
    public dSizeFeedbackContainer = '';            
    public DealSizeLabel = "";
    public DealSizeRequired = true;
    public CommitmentConsumeRequired = false;
    public IsPAYG = false;
    public ShowCommitToConsumeAmount = false;
    public DiscountTitle = "Monetary Commit";
    public SelectedDiscountedAmendment:any;
             
    //------------------------------
    // new work flow 
  public HRDDAmendments: any[] = [];
  public IsAmendmentDeleted: any;
  public showDescription: any;
  public selectedCountry: any;
  public showPricingCountryAlignDescription: any;
  public lrdCountries: any;
  public HRDDeal: any;
  public HRDDiscount: any;
  public HRDDCondition: any;
  public discountAmendments: any;
  public currencies: any;
  public model: any;
    ///--------------  
   public sampe: any = {};
   dtOptions: DataTables.Settings = {};
   public showbutton: boolean = false;
   public proposalIdentifierReq: any;
   
   public doctype: any;
   
   public showLinkedProposalsbutton: boolean;
   public Amendments: any[] = [];
    // We use this trigger because fetching the list of persons can be quite long,
    // thus we ensure the data is fetched before rendering
    dtTrigger: Subject < any > = new Subject < any > ();
    public modelRef: any;
    public searchAmendment: any;
    public HRDDDetails: any = [];
    public HRDDCountries: any = [];
    public propOverView: FormGroup;
    public ProposalId: any;
    public editProposalObj: any = {};
    public pricingCountries: any[];
    public IdentifierValid: boolean = false;
    public chooseList: any = [{ ids: 1,name: "Agreement Id"},{
            ids: 2,
            name: "Enrollment Id"
        }
    ];

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private proposalService: ProposalService,
        private sharedSerivice: SharedService,
        private modalService: NgbModal
    ) {}

    ngOnInit(): void {
        this.userId = localStorage.getItem('userAlias');
       this.loadForm();
       this.getPricingCountry();
       // this.getLrdCountreis();
       this.getById();
       this.getAmendmentsInfoStaticData();
       //  this.getmetaData(); // load the data table
       if (this.ProposalId != 0 && this.ProposalId != null) {
        this.getProposalById();
        } else {
           this.sharedSerivice.getproposalObs().subscribe(data => {
           this.createProposal(data);
         });
        }
    }
    getById() {
        this.route.paramMap.subscribe((params: ParamMap) => {
            this.ProposalId = +params.get("id");
        });
    }
    createProposal(obj) {
        this.proposalService.createProposal(obj).subscribe((data: any) => {
        this.editProposalObj = data;
        console.log(this.editProposalObj, "editProposalObj");
        this.getProposalById();
        this.loadForm();
        this.router.navigate(["proposaloverview/", this.editProposalObj["id"]]);
        });
    }
    getProposalById() {
        var obj = {
            id: this.editProposalObj.id != null ?
            this.editProposalObj.id :
            this.ProposalId,
            createdByAlias: this.userId,
            isSuperUser: true
        };
      this.proposalService.getProposal(obj).subscribe((data: any) => {
           this.editProposalObj = data;
            console.log(this.editProposalObj, "editProposalObj");
            this.getAmendements(this.editProposalObj);
            this.loadForm();
            // this.getHrdCountries();
        });
    }
    getAmendmentsInfoStaticData() {
     this.proposalService.getamendmentstaticInfo().subscribe(data => {
      console.log('data', data)
      this.discountAmendments = data.discountAmendments;
      this.currencies = data.Currencies;
      if (this.ProposalId != 0 && this.ProposalId != null) {
          this.proposalService.getProposalCopy(this.ProposalId).subscribe((data: any) => {
          this.editProposalObj = data;
          this.model = new Proposal(data);
          console.log(this.model, "editProposalObj");
         // this.getAmendements(this.editProposalObj); 
         if (this.model == null || this.model.ID == undefined) {
             console.log({
                 content: "Proposal does not exists or you don`t have permissions to view it."
              });
          }
         this.proposalService.getHrdCountries().subscribe((data: any) => {
             this.HRDDDetails = data;
             this.HRDDCountries = data.map((country) => {
                 return country.name;
             });
             if (this.model.PricingCountry != "") {
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
         this.proposalService.getLrdCountries().subscribe(data => {
             this.lrdCountries = data;
             var isPricingCountry = this.proposalService.isPricingCountry(this.lrdCountries, this.model.PricingCountry);
             if (isPricingCountry) {
                 this.showPricingCountryAlignDescription = true;
                 // $timeout(function () { this.showPricingCountryAlignDescription = false; }, 6000);
             } else {
                 this.Amendments.forEach((a, c) => {
                  if (a.code.indexOf("P-") == 0) {
                  this.showPricingCountryAlignDescription = true;
                  // $timeout(function() {
                 //     this.showPricingCountryAlignDescription = false;
                      // }, 6000);
                     }
                 });
             }
             this.coutryChanged();
         });
        });
      }
    })
  }
// var appendAmendments = function () {
//     if ($stateParams.amendmentIds) {
//     ProposalServices.saveAmendments(this.vm.proposalId, $stateParams.amendmentIds).then(function (data) {
//     if (data && data.length > 0) {
//      for (var i = 0; i < data.length; i++) {
//      if (this.model.Amendments) {
//      this.model.Amendments.push(new Amendment(data[i]));
//           }
//      else {
        // this.model.Amendments = [];
        //                         this.model.Amendments.push(new Amendment(data[i]));
        //                     }
        //                 }
        //                 this.amendmentsGrid.data = this.model.Amendments;
        //                 this.vm.captureHRDDvalues();
        //                 this.vm.captureAmendmentAzureDiscounts();
        //             }

        //         });
        //     }

        //     if ($stateParams.metadata && $stateParams.metadata.length > 0) {
        //         ProposalServices.saveAmendmentMetadata($stateParams.metadata, this.vm.proposalId).then(function (data) {
        //             if (data && data.Amendments && data.Amendments.length > 0) {
        //                 for (var i = 0; i < data.Amendments.length; i++) {
        //                     if (this.model.Amendments) {
        //                         this.model.Amendments.push(new Amendment(data.Amendments[i]));
        //                     }
        //                     else {
        //                         this.model.Amendments = [];
        //                         this.model.Amendments.push(new Amendment(data.Amendments[i]));
        //                     }
        //                 }
        //                 this.vm.captureHRDDvalues();
        //                 this.vm.captureAmendmentAzureDiscounts();
        //             }
        //             if (data.Notes != "") {
        //                 ngToast.create({ content: "Warning: The following amendments use custom introductory language outside the standard language approved by CELA.  Please resubmit amendment " + data.Notes + " and process through the tool as an individual document. ", timeout: 30000 });
        //             }
        //         });
        //     }
        // }
    coutryChanged() {
        this.showbutton = false;
        var result = this.proposalService.isPricingCountry(this.lrdCountries, this.model.PricingCountry);
         // if (result) {
         //     var showDesc = false;
         //     //this.showDescription = this.model.Amendments.length == 0 ? false : this.model.Amendments.filter(function (d) { return this.model.Amendments.filter(function (c) { return (c.Code == 'L-' + d.Code) || (c.Code == 'P-' + d.Code); }); }).length > 0;
         //     this.model.Amendments.forEach(function (a, c) {
        //     this.model.Amendments.forEach(function (b, d) {
         //             showDesc = !showDesc ? (((a.Code == 'L-' + b.Code) || (a.Code == 'P-' + b.Code)) && !a.Code.includes('CTM') && !b.Code.includes('CTM') ? true : false) : showDesc;
         //         });
         //     });
         //   this.showDescription = this.model.Amendments.length == 0 ? false : showDesc;
         // }
         // else {
         //   this.showDescription = this.model.Amendments.length == 0 ? false : this.model.Amendments.filter(function (d) { return (d.Code.indexOf('P-') == 0) || (d.Code.indexOf('L-')==0); }).length > 0;
         // }
         //this.showDescription = this.model.Amendments.length == 0 ? result : this.model.Amendments.filter(function (d) { return d.IsPricingAmendment == result; }).length != this.model.Amendments.length;
            //$timeout(function () { this.showDescription = false; }, 60000);
            if (this.selectedCountry != this.model.PricingCountry) {
                // this.proposalSerive.updatePricingCountry(this.model.ID, this.model.PricingCountry).then(function (data) {
                //     console.log(this.model.PricingCountry + " country changed");
                // });
              
                //this.model.HRDDTotalValue = 0;
                //this.model.HRDDMaxDiscount = 0;
                //this.saveOnlyProposalHRDDData();

                //UPDATE HRDD INFO WHEN COUNTRY CHANGED
            if (this.model.PricingCountry != "" && this.HRDDCountries && this.HRDDCountries.length >= 1 ) {
                this.HRDDDetails.forEach((country) => {
                    if (country.name == this.model.PricingCountry) {
                        this.HRDDAmendments = country.hrddAmendments;
                        this.HRDDeal = country.dealAmount;
                        this.HRDDiscount = country.discount;
                        this.HRDDCondition = country.hrddCondition;
                        return false;
                    }
                });
                }
            this.selectedCountry = this.model.PricingCountry;
        }
    this.captureHRDDvalues();
    this.captureAmendmentAzureDiscounts();
    };
   captureHRDDvalues () {
     if (this.HRDDCountries.length == 0) {
       this.proposalService.getHrdCountries().subscribe((data: any) => {
       this.HRDDDetails = data;
       this.HRDDCountries = data.map((country) =>{ return country.Name });
       if (this.model.PricingCountry != "") {
       data.forEach((country)=> {
         if (country.name == this.model.PricingCountry) {
           this.HRDDAmendments = country.hrddAmendments;
           this.HRDDeal = country.dealAmount;
           this.HRDDiscount = country.discount;
           this.HRDDCondition = country.hrddCondition;
         }
         });
       }
       var isHrddCountry = this.proposalService.isHRDDCountry(this.HRDDCountries, this.model.PricingCountry);
       var hasHrddAmendments = this.proposalService.hasHRDDAmendments(this.HRDDAmendments, this.model.Amendments);
        if (isHrddCountry && hasHrddAmendments && this.model.HRDDTotalValue == null && this.model.HRDDMaxDiscount == null) {
      // if (true) {
         this.modalService.open(PriceProposalComponent, {
            // backdrop: "static",
            // keyboard: false,
            size: "lg"
            });
         //$("#HRDD-review-confirmation").modal();
       }
        //else if (isHrddCountry && hasHrddAmendments && this.model.HRDDTotalValue > this.HRDDeal && this.model.HRDDMaxDiscount > this.HRDDiscount) {
      //    $("#HRDD-review-confirmation").modal();
         //}
       });
     }
     else {
       var isHrddCountry = this.proposalService.isHRDDCountry(this.HRDDCountries, this.model.PricingCountry);
       var hasHrddAmendments = this.proposalService.hasHRDDAmendments(this.HRDDAmendments, this.model.Amendments);
       //if (isHrddCountry && hasHrddAmendments && this.model.HRDDTotalValue == null && this.model.HRDDMaxDiscount == null) {
       if (isHrddCountry && hasHrddAmendments && !this.IsAmendmentDeleted) {
         //  $("#HRDD-review-confirmation").modal();
       }
       this.IsAmendmentDeleted = false;
       //else if (isHrddCountry && hasHrddAmendments && this.model.HRDDTotalValue > this.HRDDeal && this.model.HRDDMaxDiscount > this.HRDDiscount) {
       //    debugger;
       //    $("#HRDD-review-confirmation").modal();
       //}
     }
    }
    captureAmendmentAzureDiscounts() {
        if (this.discountAmendments.length == 0) {
            this.proposalService.getamendmentstaticInfo().subscribe(data => {
                this.discountAmendments = data.discountAmendments;
                this.initDiscountAmendmentPopUp();
            });
        }
        else {
            this.initDiscountAmendmentPopUp();
        }
    }
    getPricingCountry() {
        this.proposalService
            .getPricingCountry()
            .subscribe((data: any) => (this.pricingCountries = data));
    }
    addCTM() {
        this.router.navigate(["/ctmlibrary"]);
    }
    initDiscountAmendmentPopUp(){
       // debugger;
        for (var ai in this.model.Amendments) {
              this.discountFeedback = '';
              this.discountFeedbackContainer = '';
              this.ctcFeedback = '';
              this.ctcFeedbackContainer = '';
              this.dSizeFeedback = '';
              this.dSizeFeedbackContainer = '';
              var amendment = this.model.Amendments[ai];
              var isDiscountedAmendment = this.proposalService.isDiscountedAmendment(this.discountAmendments, amendment.code);
              if (isDiscountedAmendment != null && isDiscountedAmendment.length > 0 && (amendment.Discount == null || amendment.BeginDate == null || amendment.EndDate == null)) {
              if (isDiscountedAmendment[0].DiscountType == 1) { // equals to MonetaryCommitmentACD 
              this.DealSizeLabel = 'Deal size (Monetary Commit)';
              this.DealSizeRequired = true;
              this.CommitmentConsumeRequired = false;
              this.IsPAYG = false;
              this.ShowCommitToConsumeAmount = false;
              this.DiscountTitle = "Monetary Commit";
              }
              else if (isDiscountedAmendment[0].DiscountType == 2) { // equals to PayAsYouGoACD
              this.DealSizeRequired = false;
              this.CommitmentConsumeRequired = false;
              this.ShowCommitToConsumeAmount = false;
              this.IsPAYG = true;
              this.DiscountTitle = "Pay As You Go";
              }
              else if (isDiscountedAmendment[0].DiscountType == 3) { // equals to CommitmenttoConsumeACD
              this.DealSizeLabel = 'Monetary Commit (if applicable)';
              this.DealSizeRequired = false;
              this.CommitmentConsumeRequired = true;
              this.ShowCommitToConsumeAmount = true;
              this.IsPAYG = false;
              this.DiscountTitle = "Commit to Consume";
              }
              this.SelectedDiscountedAmendment = amendment;
            // alert('called the popup');
              break;
              }
              }; 
      }
    // Input blur event .............................

    modifyIdentifier() {
        this.IdentifierValid = false;
    }

    proposalUpdate(event, block) {

        var obj = {
            id: this.editProposalObj['proposalEntity']?.id,
            proposalId: this.editProposalObj['proposalEntity']?.proposalId,

            pricingCountry: block == "pricingCountry" ? this.propOverView.get("pricingCountry").value :
                Object.keys(this.editProposalObj).length > 0 ? this.editProposalObj['proposalEntity']?.pricingCountry : "",
            // : this.editProposalObj.pricingCountry,

            enrollmentId: block == "enrollmentId" ? this.propOverView.get("enrollmentId").value : Object.keys(this.editProposalObj).length > 0 ? this.editProposalObj['proposalEntity']?.enrollmentId : "",

            agreementId: block == "agreementId" ?
                this.propOverView.get("agreementId").value :
                Object.keys(this.editProposalObj).length > 0 ? this.editProposalObj['proposalEntity']?.agreementId : "",
            identifier: block == "identifier" ?
                this.propOverView.get("identifier").value :
                Object.keys(this.editProposalObj).length > 0 ? this.editProposalObj['proposalEntity']?.identifier : null,

            customerName: block == "customerName" ?
                this.propOverView.get("customerName").value :
                Object.keys(this.editProposalObj).length > 0 ? this.editProposalObj['proposalEntity']?.customerName : "",

            dealNickname: block == "dealNickname" ?
                this.propOverView.get("dealNickname").value :
                Object.keys(this.editProposalObj).length > 0 ? this.editProposalObj['proposalEntity']?.dealNickname : "",

            notes: block == "notes" ? this.propOverView.get("notes").value : Object.keys(this.editProposalObj).length > 0 ? this.editProposalObj['proposalEntity']?.notes : "",
            LastModifiedBy: this.userId
        };

        this.proposalService.updateProposal(obj).subscribe((data: any) => {
            this.model = new Proposal(data);
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
            pricingCountry: new FormControl(this.editProposalObj['proposalEntity']?.pricingCountry ? this.editProposalObj['proposalEntity']?.pricingCountry : null),
            enrollmentId: new FormControl(this.editProposalObj['proposalEntity']?.enrollmentId ? this.editProposalObj['proposalEntity']?.enrollmentId : null),
            agreementId: new FormControl(this.editProposalObj['proposalEntity']?.agreementId ? this.editProposalObj['proposalEntity']?.agreementId : null),
            customerName: new FormControl(this.editProposalObj['proposalEntity']?.customerName ? this.editProposalObj['proposalEntity']?.customerName : null),
            dealNickname: new FormControl(this.editProposalObj['proposalEntity']?.dealNickname ? this.editProposalObj['proposalEntity']?.dealNickname : null),
            identifier: new FormControl(this.editProposalObj['proposalEntity']?.identifier ? this.editProposalObj['proposalEntity']?.identifier : ""),
            notes: new FormControl(this.editProposalObj['proposalEntity']?.notes ? this.editProposalObj['proposalEntity']?.notes : null),
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

        var deleObj = {};
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
                modelRef.componentInstance.searchAmendList = data;
                modelRef.componentInstance.selectAmendement.subscribe(receivedEntry => {
                    var obj1 = [{
                        "Id": receivedEntry.id,
                        "DocName": receivedEntry.docName,
                        "FileName": receivedEntry.fileName,
                        "Language": receivedEntry.language,
                        "Code": receivedEntry.code,
                        "EmpowermentCode": receivedEntry.empowermentCode,
                        "ExpirationDate": receivedEntry.expirationDate,
                        "EmpowermentName": receivedEntry.empowermentName
                    }]

                    this.saveAmendate(obj1);
                });
            });
    }
    saveAmendate(amendments) {
        var obj = {
            "ProposalID": this.ProposalId,
            "isSuperUser": false,
            "userAlias": this.userId,
            "AmendmentDocs": amendments
        }
        this.proposalService.saveMetadata(obj).subscribe(data => {
            debugger;
           // console.log('dataAmendata', data);
            //this.Amendments.push(data["amendments"]);
        if (data && data.length > 0) {
           for (var i = 0; i < data.length; i++) {
               if (this.model.Amendments) {
                   this.model.Amendments.push(new Amendment(data[i]));
               }
               else {
                   this.model.Amendments = [];
                   this.model.Amendments.push(new Amendment(data[i]));
               }
            }
           this.captureHRDDvalues();
           this.captureAmendmentAzureDiscounts();
            }
            this.getProposalById();
        if (data.notes != "") {
                // ngToast.create({ content: "Warning: The following amendments use custom introductory language outside the standard language approved by CELA.  Please resubmit amendment " + data.Notes + " and process through the tool as an individual document. ", timeout: 30000 });
            }
           
        })
    }
    reloadTable() {        
        this.dtTrigger.next();
         this.dtTrigger.unsubscribe();
    }
    getAmendements(data) {
        this.Amendments = data["amendments"] == null ? [] : data["amendments"];
        this.reloadTable();
        this.getVersion()
    }

    getVersion() {

        for (var i = 0; i < this.Amendments.length; i++) {
            this.Amendments[i].location = this.Amendments[i].fileName.split("(")[3].split(")")[0];
            this.Amendments[i].version = this.Amendments[i].fileName.split("(")[5].split(")")[0]
        }
        // return (item.split("(")[5].split(")")[0])
    }
    getLocation(item) {
        return (item.split("(")[3].split(")")[0])
    }
    
    doesNonPricingDocumentsExists() {
        if (this.Amendments.length > 0) {
            var result = this.Amendments.filter((f)=> {
                return f.code[0] != 'P';
            });

            return result && result.length > 0;
        }

        return false;
    }
    isPricingCountry() {

        if (this.lrdCountries.length > 0) {

            var result = this.lrdCountries.filter((d) => {
                return d == this.editProposalObj['proposalEntity']?.pricingCountry
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
            var obj={};
            obj['pid'] = this.editProposalObj["proposalEntity"].id;
            obj['type']="0";
            obj["userAlias"] = this.editProposalObj['proposalEntity'].createdByAlias;
            obj["isSuperUser"]=false;
            this.proposalService.generateDocFile(obj).subscribe(data => {
              this.saveData(data.content,data.fileName);
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
    generatePricing() {
        if (!this.doesPricingDocumentsExists()) {
        alert({ content: "No Pricing Amendments in proposal" });
            
        } else if (this.model.IsLinked) {
            this.showLinkedProposalsbutton = true;
            this.doctype = 1;
        } else {
            this.showbutton = false;
            var obj={};
            obj['pid'] = this.editProposalObj["proposalEntity"].id;
            obj['type']="1";
            obj["userAlias"] = this.editProposalObj['proposalEntity'].createdByAlias;
            obj["isSuperUser"]=false;
            this.proposalService.generateDocFile(obj).subscribe(data => {
              this.saveData(data.content,data.fileName);
            });
            
        }
    };

    generateNonPricing (){

        if (!this.doesNonPricingDocumentsExists()) {
            // ngToast.create({ content: "No Non-Pricing Amendments in proposal" });
        } else if (this.model.IsLinked) {
            this.showLinkedProposalsbutton = true;
            this.doctype = 2;
        } else {

            this.showbutton = false;
            var obj={};
            obj['pid'] = this.editProposalObj["proposalEntity"].id;
            obj['type']="2";
            obj["userAlias"] = this.editProposalObj['proposalEntity'].createdByAlias;
            obj["isSuperUser"]=false;
            this.proposalService.generateDocFile(obj).subscribe(data => {
              this.saveData(data.content,data.fileName);
            });
        }
    };
    ngOnDestroy(): void {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }
    doesPricingDocumentsExists() {
        if (this.Amendments && this.Amendments) {
            var result = this.Amendments.filter((f)=> {
                return (f.code[0] == 'P' || (f.CTMCode != null && f.CTMCode[0] == 'P'));
            });
            return result && result.length > 0;
        }

        return false;
    }
    submitForm(form: NgForm) {
        // this.isSubmitted = true;
        if (!form.valid) {
            return false;
        } else {
            alert(JSON.stringify(form.value))
        }
    }
    openDelegationPoup() {
        const modelRef = this.modalService.open(DelProposalComponent, {
            // backdrop: "static",
            // keyboard: false,
            size: "sm",
            centered: true,
        });
        modelRef.componentInstance.delegationProposalId = this.ProposalId;
    }
    openPoup() {
        const modelRef = this.modalService.open(ShareProposalComponent, {
            // backdrop: "static",
            // keyboard: false,
            size: "sm",
            centered: true,
        });
        modelRef.componentInstance.shareProposalId = this.ProposalId;
    }
    showEditDocumentPopup(obj, protection) {
        var isEdit = protection == '1';
        var aid = obj.id;
        // if (discountAmendments.length == 0)
        //     getAmendmentInfoStaticData();
        // var amendment = this.model.Amendments.filter(function (d) { return d.Id == aid; })[0];
        // var discountedAmendmentInfo = AppService.isDiscountedAmendment(discountAmendments, amendment.Code)[0];
        // if (discountedAmendmentInfo != null && !isEdit) {
        //     this.editAmendmentDiscountData(discountedAmendmentInfo, amendment);
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
    showEditAdditionalDocumentFields(obj, protection) {
        var isEdit = protection == '1';
        var aid = obj.id;
        // EditDocumentService.startEditDocument(proposalId, id).then(function (data) {
        // if (data && data.FileName) {
        // donthide = true;
        // $(".exe-loader").show();
        // intializeTimer(data.FileName);
        window.location.href = "amendmentappwordservice://documentsService?aid=" + aid + "&fileName=" + obj.fileName + "&protection=" + protection;

        // }
        // });
    }
    openActiveproposal() {
        this.router.navigate(["activeproposal"]);
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
  
    base64toBlob(byteString) {
      var ia = new Uint8Array(byteString.length);
      for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }
      return new Blob([ia], { type: "octet/stream" });
    }
}

function Proposal(data) {
    if( data.proposalEntity != undefined &&  Object.keys(data.proposalEntity).length >0 ){
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
3    // "isCSDPricing": null,
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

function AmendmentOrder(id, currentOrder, previousOrder, proposalId, isDown) {
    this.Id = id;
    this.CurrentOrder = currentOrder;
    this.PreviousOrder = previousOrder;
    this.ProposalId = proposalId;
    this.IsDown = isDown;
}