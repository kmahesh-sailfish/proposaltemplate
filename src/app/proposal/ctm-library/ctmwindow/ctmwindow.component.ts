import { Component, OnInit } from "@angular/core";
import { ProposalService } from "../../../proposal.service";
import { Router } from "@angular/router";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
@Component({
  selector: "app-ctmwindow",
  templateUrl: "./ctmwindow.component.html",
  styleUrls: ["./ctmwindow.component.css"]
})
export class CtmwindowComponent implements OnInit {
  
  public IsCTMPricing:boolean=false;
  public CTMLibFile:any={};
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
  public SelectedCategorieIds:any=[];
  public FileContent:any;
  
  constructor(public proposalService: ProposalService,public router: Router, public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    this.userId= localStorage.getItem("userAlias");
    this.fileName =this.fileObj.name;
    this.getbase64(this.fileObj);
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
    this.GenerateCTMCodes();
  }
  clearData(){
    
  }
  saveCTMLib(){
    if(this.Others.length >0 ){
      this.CTMLibFile.CategoryDescription = JSON.stringify(this.Others);
    }else{
      this.CTMLibFile.CategoryDescription=""
    }
 
  this.CTMLibFile.CategoryIds = this.SelectedCategorieIds;
  this.CTMLibFile.Name = this.fileObj.name;
  this.CTMLibFile.FileExtension= "."+(this.fileObj.name).split('.').pop();
  this.CTMLibFile.CreatedBy= this.userId;
  this.CTMLibFile.Language = this.selectLanguage;
  this.CTMLibFile.CTMCode = this.SelectedCategoriesText;
  this.CTMLibFile.IsCTMPricing = this.IsCTMPricing;
  this.CTMLibFile.FileContent=this.FileContent;
  this.proposalService.saveCtmtoLib(this.CTMLibFile).subscribe(data=>{
    this.activeModal.close(true);
    
  })
  }
  GenerateCTMCodes(){
    var text = "CTM";
    var categoryText = null;
    this.SelectedCategories.forEach((category, index) => {
        if (categoryText) {
            categoryText = categoryText + '-' + category.name;
        }
        else{
          categoryText = category.name;
        }
        this.SelectedCategorieIds.push(category.id);
    });
    text = categoryText ? text + '-' + categoryText : text + '-';
    // this.CTM.CTMCode = text;
    // this.CTMLibFile.CTMCode = text;
    this.SelectCategory = false;
    this.SelectedCategoriesText = categoryText ? categoryText : "Select Footer Category";
  }
  SaveOthers(){
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
  getbase64(fileObj){
    
    let file = fileObj;
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event:Event) =>{
      //me.modelvalue = reader.result;
      //let FileContent =reader.result;
      this.FileContent= reader.result;
      this.FileContent = btoa(this.FileContent);
      console.log(reader.result,'base64444');
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  
  }
}
