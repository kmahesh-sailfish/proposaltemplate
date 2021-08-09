import { Component, OnInit } from "@angular/core";
import { ProposalService } from "../proposal.service";

@Component({
  selector: "app-user-reference",
  templateUrl: "./user-reference.component.html",
  styleUrls: ["./user-reference.component.css"]
})
export class UserReferenceComponent implements OnInit {
  public opCenterVales:any = [];
  public userProgram:any =[];
  public getLanguages: any = [];
  public user: any = {};
  public config: any = [];
  constructor(private proposalService: ProposalService) {}

  ngOnInit(): void {
    this.user.Language = null;
    this.user.pricingcountry = null;
    this.domainLoad();
  }
  domainLoad() {
    this.proposalService.domainConetent().subscribe(data=>{
      if(Object.keys(data).length >0){
        this.getLanguages = data.languages;
        this.config = data.countries;
        this.userProgram = data['domainData'].programs;
        this.opCenterVales =data['domainData'].operationsCenters;

      }
    })
  }
  
  onSubmit() {
    
  }
}
