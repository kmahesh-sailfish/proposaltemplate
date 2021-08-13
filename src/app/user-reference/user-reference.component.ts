import { Component, OnInit } from "@angular/core";
import { ProposalService } from "../proposal.service";

import { ToastrService } from "ngx-toastr";
@Component({
  selector: "app-user-reference",
  templateUrl: "./user-reference.component.html",
  styleUrls: ["./user-reference.component.css"]
})
export class UserReferenceComponent implements OnInit {
  public userId: any;
  public opCenterVales: any = [];
  public userProgram: any = [];
  public getLanguages: any = [];
  public user: any = {};
  public config: any = [];
  constructor(
    private proposalService: ProposalService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.userId = localStorage.getItem('userAlias');
    this.user.Language = null;
    this.user.PricingCountry = null;
    this.user.OpCenter = null;
    this.user.Program = null;
    this.domainLoad();
  }
  reSet() {
    this.user.Language = null;
    this.user.PricingCountry = null;
    this.user.OpCenter = null;
    this.user.Program = null;
    //this.domainLoad();
  }
  domainLoad() {
    this.proposalService.domainConetent().subscribe(data => {
      if (Object.keys(data).length > 0) {
        this.getLanguages = data.languages;
        this.config = data.countries;
        this.userProgram = data["domainData"].programs;
        this.opCenterVales = data["domainData"].operationsCenters;
      }
    });
  }

  onSubmit() {
    this.user["UserName"] = this.userId
    this.proposalService.updatedomainConetent(this.user).subscribe(data => {
      console.log(data);
      this.toastr.success(data, "Success");
    });
  }
}
