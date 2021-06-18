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
@Component({
  selector: "app-proposal-overview",
  templateUrl: "./proposal-overview.component.html",
  styleUrls: ["./proposal-overview.component.css"],
  providers: [NgbModalConfig, NgbModal]
})
export class ProposalOverviewComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = {};

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
      createdByAlias: "V-sanjay",
      isSuperUser: true
    };
    this.proposalService.getProposal(obj).subscribe((data: any) => {
      this.editProposalObj = data["result"]["_sourceObject"];
      console.log(this.editProposalObj, "editProposalObj");
      this.getAmendements(this.editProposalObj); 
     
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
      proposalId: this.editProposalObj['proposalEntity']?.proposalId,
      pricingCountry: block == "pricingCountry"? this.propOverView.get("pricingCountry").value
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
        value: this.editProposalObj['proposalEntity']?.proposalId,
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
      notes: new FormControl(this.editProposalObj.notes),
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
    var index = this.Amendments.findIndex(function(o) {
      return o.id === obj.id;
    });
    if (index !== -1) this.Amendments.splice(index, 1);

    console.log(this.Amendments);
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
              "Code": receivedEntry.code,
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
      "ProposalID":  this.editProposalObj['proposalEntity']?.id,
      "isSuperUser": false,
      "userAlias": "V2Alias",
      "AmendmentDocs": amendments
    }
    this.proposalService.saveMetadata(obj).subscribe(data=>{
      console.log('dataAmendata',data);
     this.getAmendements(data["result"])
    //  this.editProposalObj = data["result"];
    })
  }
  reloadTable() {
    this.dtTrigger.next();
  }
  getAmendements(data){
    this.Amendments = data["amendments"] == null? []:data["amendments"]
    this.reloadTable();
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}
