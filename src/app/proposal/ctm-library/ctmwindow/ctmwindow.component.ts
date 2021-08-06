import { Component, OnInit } from "@angular/core";
import { ProposalService } from "../../../proposal.service";

@Component({
  selector: "app-ctmwindow",
  templateUrl: "./ctmwindow.component.html",
  styleUrls: ["./ctmwindow.component.css"]
})
export class CtmwindowComponent implements OnInit {
  public SelectedCategoriesText: any = "Select Footer Category";
  public SelectCategory: any;
  public selectLanguage:any;
  public getLanguages: any = [];
  public footerCategory: any = [];
  constructor(public proposalService: ProposalService) {}

  ngOnInit(): void {
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
  
}
