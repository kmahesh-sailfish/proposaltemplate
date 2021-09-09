import { Component, OnInit } from "@angular/core";
import { SharedService } from "src/app/sharedservices/shared.service";
import { ProposalService } from "../../proposal.service";
import { Router, ActivatedRoute, RouterModule } from "@angular/router";

@Component({
  selector: "app-ctm-footer",
  templateUrl: "./ctm-footer.component.html",
  styleUrls: ["./ctm-footer.component.css"]
})
export class CtmFooterComponent implements OnInit {
  public IsCTMPricing: boolean = false;
  public CTMLibFile: any = {};
  public FileContent: any;
  public fileObj: any = {};
  public SelectedCategorieIds: any = [];
  public fileName: any;
  public reasoning: any;
  public amtcode: any;
  public ctmCode: any;
  public footerCategory = [];
  public SelectedCategoriesText: any = "Select Footer Category";
  public SelectCategory: any;
  public selectedCateg: any = [];
  public SelectedCategories: any = [];
  public Others: any = [];
  public showRevenueImpact: any;
  public OthersChecked: any;
  public tempOthersCode: any;
  public selectLanguage: any = null;
  public getLanguages: any = [];
  public ProposalId: any;
  public userId;
  public Amendments: any = [];
  constructor(
    private proposalService: ProposalService,
    private sharedService: SharedService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userId = localStorage.getItem("userAlias");
    this.ProposalId = this.route.snapshot.paramMap.get("id");
    this.loadCTMFooterCode();
    //this.selectLanguage="";
    this.loadLanguages();
    // this.fileObj= localStorage.getItem("fileObj");
    this.getFileObjs();
    this.getProposalbyId(this.ProposalId);
  }
  getProposalbyId(ProposalId) {
    var obj = {
      id: this.ProposalId,
      createdByAlias: this.userId,
      isSuperUser: true
    };
    this.proposalService.getProposal(obj).subscribe((data: any) => {
      this.getAmendements(data);
    });
  }
  getAmendements(data) {
    this.Amendments = data["amendments"] == null ? [] : data["amendments"];
  }

  getFileObjs() {
    this.sharedService.getproposalObs().subscribe(data => {
      this.fileObj = data;
      this.getbase64(data);
    });
  }
  getbase64(fileObj) {
    let file = fileObj;
    this.fileName = file.name;
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event: Event) => {
      //me.modelvalue = reader.result;
      //let FileContent =reader.result;
      this.FileContent = reader.result;
      this.FileContent = btoa(this.FileContent);
      console.log(reader.result, "base64444");
    };
    reader.onerror = function(error) {
      console.log("Error: ", error);
    };
  }
  loadLanguages() {
    this.proposalService.getLanguage().subscribe((data: any) => {
      this.getLanguages = data;
    });
  }
  loadCTMFooterCode() {
    this.proposalService.getCTMFootercode().subscribe((data: any) => {
      this.footerCategory = data;
    });
  }
  clearData() {}
  saveCTMLib() {
    if (this.Others.length > 0) {
      this.CTMLibFile.CategoryDescription = JSON.stringify(this.Others);
    } else {
      this.CTMLibFile.CategoryDescription = "";
    }
    this.CTMLibFile.CTMAmendmentCode = "121";
    this.CTMLibFile.SelectedCategoryIds = "";
    this.CTMLibFile.OtherCategoryInfo = "";
    (this.CTMLibFile.IsPublic = false),
      (this.CTMLibFile.Id = 0),
      (this.CTMLibFile.HasRevenueImpact = false),
      (this.CTMLibFile.FileId = 0),
      (this.CTMLibFile.CategoryIds = this.SelectedCategorieIds);
    this.CTMLibFile.Name = this.fileObj.name;
    this.CTMLibFile.FileExtension = "." + this.fileObj.name.split(".").pop();
    this.CTMLibFile.CreatedBy = this.userId;
    this.CTMLibFile.ConsolidatedAmendments = "";
    this.CTMLibFile.CustomerReasoning = "";
    this.CTMLibFile.Language = this.selectLanguage;
    this.CTMLibFile.CTMCode = this.SelectedCategoriesText;
    this.CTMLibFile.IsCTMPricing = this.IsCTMPricing;
    this.CTMLibFile.FileContent = this.FileContent;
    var Amendment = {};
    Amendment["Code"] = this.SelectedCategoriesText;
    Amendment["Language"] = this.selectLanguage;
    Amendment["PId"] = this.ProposalId;
    Amendment["FileName"] = this.fileName;
    Amendment["Stream"] = this.FileContent;
    var obj = {
      CTMLibFile: this.CTMLibFile,
      Amendment: Amendment
    };
    this.proposalService.saveAmendment(obj).subscribe(data => {
      console.log(data);

      this.router.navigate([
        "/proposaloverview/" + this.ProposalId + "/" + false
      ]);
    });
  }
  CheckBoxChecked(cat, isChecked) {
    if (cat.needDescription && isChecked) {
      this.OthersChecked = true;
      this.tempOthersCode = cat;
      $('input[type="checkbox"]').prop("disabled", true);
      if (cat.HasRevenueImpact) {
        this.showRevenueImpact = true;
      }
    } else {
      this.OthersChecked = this.showRevenueImpact = false;
      $('input[type="checkbox"]').removeAttr("disabled");
    }
    if (cat.parentId == null) {
      var temp = [];
      $("input[name=" + cat.id + "]:checked").prop("checked", false);
      this.SelectedCategories.forEach(function(category, index) {
        if (category.parentId != cat.id) {
          temp.push(category);
        }
      });
      this.SelectedCategories = temp;
    }
    if (isChecked) {
      this.SelectedCategories.push(cat);
    } else {
      this.SelectedCategories.splice(this.SelectedCategories.indexOf(cat), 1);
      this.Others.splice(this.Others.indexOf(cat), 1);
    }
  }
  clearCategory() {
    this.OthersChecked = false;
    this.selectedCateg[this.tempOthersCode.Id] = false;
    $('input[type="checkbox"]').removeAttr("disabled");
    this.selectedCateg[this.tempOthersCode.Id] = false;
    this.SelectedCategories.splice(
      this.SelectedCategories.indexOf(this.tempOthersCode),
      1
    );
    this.Others.splice(this.Others.indexOf(this.tempOthersCode), 1);
    $("input[value=" + this.tempOthersCode.Id + "]:checked").prop(
      "checked",
      false
    );
  }
  SelectCategoryVal() {
    this.GenerateCTMCodes();
  }
  GenerateCTMCodes() {
    var text = "CTM";
    var categoryText = null;
    this.SelectedCategories.forEach((category, index) => {
      if (categoryText) {
        categoryText = categoryText + "-" + category.name;
      } else {
        categoryText = category.name;
      }
      this.SelectedCategorieIds.push(category.id);
    });
    text = categoryText ? text + "-" + categoryText : text + "-";
    // this.CTM.CTMCode = text;
    // this.CTMLibFile.CTMCode = text;
    this.SelectCategory = false;
    this.SelectedCategoriesText = categoryText
      ? categoryText
      : "Select Footer Category";
  }
}
