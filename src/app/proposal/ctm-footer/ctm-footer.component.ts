import { Component, OnInit } from "@angular/core";
import { ProposalService } from "../../proposal.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-ctm-footer",
  templateUrl: "./ctm-footer.component.html",
  styleUrls: ["./ctm-footer.component.css"]
})
export class CtmFooterComponent implements OnInit {
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
  public Others: any;
  public showRevenueImpact: any;
  public OthersChecked: any;
  public tempOthersCode: any;
  public selectLanguage: any = null;
  public getLanguages: any = [];
  public ProposalId: any;
  constructor(private proposalService: ProposalService,private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.ProposalId = this.route.snapshot.paramMap.get('id');
    this.loadCTMFooterCode();
    //this.selectLanguage="";
    this.loadLanguages();
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
  clearData() { }
  saveCTMLib(){}
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
  clearCategory() {}
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
