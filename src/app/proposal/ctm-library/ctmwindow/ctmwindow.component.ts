import { Component, OnInit } from "@angular/core";
import { ProposalService } from "../../../proposal.service";

@Component({
  selector: "app-ctmwindow",
  templateUrl: "./ctmwindow.component.html",
  styleUrls: ["./ctmwindow.component.css"]
})
export class CtmwindowComponent implements OnInit {
  public getLanguages: any = [];
  public footerCategory: any = [];
  constructor(public proposalService: ProposalService) {}

  ngOnInit(): void {
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
}
