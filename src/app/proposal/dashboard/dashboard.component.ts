import { Component, OnInit } from "@angular/core";
import { ProposalService } from "src/app/proposal.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  public proposalid: any;
  public getList: any = [];
  constructor(private proposalService: ProposalService) {}

  ngOnInit(): void {
    this.dashboardDetails();
  }
  searchResult(event) {
    if (event.length > 0) {
      var obj = {};
    obj["userAlias"] = "V2Alias";
    obj["isSuperUser"] = true;
    obj["noOfRecords"] = 20;
    this.proposalService.dashboardSearch(event,obj).subscribe(data => {
      this.getList = data;
    });
    }
  }
  dashboardDetails() {
    var obj = {};
    obj["userAlias"] = "V2Alias";
    obj["isSuperUser"] = true;
    obj["noOfRecords"] = 20;
    this.proposalService.dashboardDetails(obj).subscribe(data => {
      this.getList = data;
    });
  }
}
