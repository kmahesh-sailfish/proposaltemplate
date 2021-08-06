import { Component, OnInit } from "@angular/core";
import { ProposalService } from "../proposal.service";

@Component({
  selector: "app-user-reference",
  templateUrl: "./user-reference.component.html",
  styleUrls: ["./user-reference.component.css"]
})
export class UserReferenceComponent implements OnInit {
  public getLanguages: any = [];
  public user: any = {};
  public config: any = [];
  constructor(private proposalService: ProposalService) {}

  ngOnInit(): void {
    this.user.selectLanguage = null;
    this.user.pricingcountry = null;
    this.loadLanguages();
    this.getPricingCountry();
  }
  getPricingCountry() {
    this.proposalService
      .getPricingCountry()
      .subscribe((data: any) => (this.config = data));
  }
  loadLanguages() {
    this.proposalService.getLanguage().subscribe((data: any) => {
      this.getLanguages = data;
    });
  }
  onSubmit() {
    
  }
}
