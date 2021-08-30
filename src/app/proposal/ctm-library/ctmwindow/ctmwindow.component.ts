import { Component, OnInit } from "@angular/core";
import { ProposalService } from "../../../proposal.service";

@Component({
  selector: "app-ctmwindow",
  templateUrl: "./ctmwindow.component.html",
  styleUrls: ["./ctmwindow.component.css"]
})
export class CtmwindowComponent implements OnInit {
  public fileName:any;
  public fileObj:any;
  public userId:any;
  public isPublic:boolean=false;
  public selected = [];
  public othersDescription:any;
  public description: any;
  public selectedCateg: any = [];
  public Others: any=[];
  public SelectedCategories: any = [];
  public showRevenueImpact: any;
  public revenueImpact:boolean;
  public tempOthersCode: any;
  public OthersChecked: boolean=false;
  public SelectedCategoriesText: any = "Select Footer Category";
  public SelectCategory: any;
  public selectLanguage: any;
  public getLanguages: any = [];
  public footerCategory: any = [];
  public submitClicked:boolean=true;
  constructor(public proposalService: ProposalService) {}

  ngOnInit(): void {
    this.userId= localStorage.getItem("userAlias");
    this.fileName =this.fileObj.name;
    this.selectLanguage = null;
    this.loadLanguages();
    this.loadCTMFooterCode();
  }
  loadLanguages() {
    this.proposalService.getLanguage().subscribe((data: any) => {
      this.getLanguages = data;
      this.userDetails();
    });
  }
  userDetails(){ 
    this.proposalService.getUserDetails(this.userId).subscribe(data=>{
     console.log(data['userPreference']);
     this.selectLanguage = data['userPreference'].language;
    })
  }
  loadCTMFooterCode() {
    this.proposalService.getCTMFootercode().subscribe((data: any) => {
      this.footerCategory = data;
    });
  }
  clearCategory(){

  }
  SelectCategoryVal(){

  }
  clearData(){
    
  }
  submitData(){
    // add the ctm winddow 
alert('call');
  }
  SaveOthers(){
    alert('called');
    // this.tempOthersCode.name, Description: this.description, HasRevenueImpact: this.hasRevenueImpact
    var temp = { Code: this.tempOthersCode.name, Description: this.othersDescription, HasRevenueImpact: this.revenueImpact };
    if (this.Others.length > 0) {
        var index = this.Others.indexOf(temp);
        if (index == -1) {
            this.Others.push(temp);
        }
        else {
            this.Others[index] = temp;
        }
    }
    else {
        this.Others.push(temp);
    }
    this.OthersChecked = this.revenueImpact = false;
    this.othersDescription = "";
    $('input[type="checkbox"]').removeAttr('disabled');
};
  Cancel(){
    this.OthersChecked = false;
    this.selected[this.tempOthersCode.id] = false;
    $('input[type="checkbox"]').removeAttr('disabled');
    this.selectedCateg[this.tempOthersCode.id] = false;
    this.SelectedCategories.splice(this.SelectedCategories.indexOf(this.tempOthersCode), 1);
    this.Others.splice(this.Others.indexOf(this.tempOthersCode), 1);
    $("input[value=" + this.tempOthersCode.id + "]:checked").prop('checked', false);
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
}
