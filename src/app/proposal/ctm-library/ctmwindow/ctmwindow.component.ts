import { Component, OnInit } from "@angular/core";
import { ProposalService } from "../../../proposal.service";

@Component({
  selector: "app-ctmwindow",
  templateUrl: "./ctmwindow.component.html",
  styleUrls: ["./ctmwindow.component.css"]
})
export class CtmwindowComponent implements OnInit {
  public description: any;
  public selectedCateg: any = [];
  public Others: any=[];
  public SelectedCategories: any = [];
  public showRevenueImpact: any;
  public tempOthersCode: any;
  public OthersChecked: any;
  public SelectedCategoriesText: any = "Select Footer Category";
  public SelectCategory: any;
  public selectLanguage: any;
  public getLanguages: any = [];
  public footerCategory: any = [];
  constructor(public proposalService: ProposalService) {}

  ngOnInit(): void {
    this.selectLanguage = null;
    this.loadLanguages();
    this.loadCTMFooterCode();
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
  CheckBoxChecked(cat, isChecked) {
    if (cat.NeedDescription && isChecked) {
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
}
