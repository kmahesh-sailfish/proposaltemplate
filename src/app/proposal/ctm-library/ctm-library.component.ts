import { Component, OnInit } from "@angular/core";
import { ProposalService } from "src/app/proposal.service";

@Component({
  selector: "app-ctm-library",
  templateUrl: "./ctm-library.component.html",
  styleUrls: ["./ctm-library.component.css"]
})
export class CtmLibraryComponent implements OnInit {
  public footerCategory = [
   
  ];
  public SelectedCategoriesText: any = "Select Footer Category";
  public SelectCategory: any;
  public selectedCateg: any = [];
  public SelectedCategories: any = [];
  public Others: any;
  public showRevenueImpact: any;
  public OthersChecked: any;
  public tempOthersCode: any;
  constructor(private proposalService: ProposalService) {}

  ngOnInit(): void {
    this.loadCTMFooterCode()
  }
  loadCTMFooterCode(){
    this.proposalService.getCTMFootercode().subscribe((data: any) => {
      this.footerCategory = data;
    })}
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
