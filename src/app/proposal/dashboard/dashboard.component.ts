import { Component, OnInit } from '@angular/core';
import { ProposalService } from 'src/app/proposal.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
public getList:any=[];
  constructor(private proposalService:ProposalService) { }

  ngOnInit(): void {
    this.dashboardDetails();
  }
  dashboardDetails(){
    var obj={    
    }
    obj['userAlias'] ='V2Alias';
    obj['isSuperUser']=true;
    obj['noOfRecords']=20;
    this.proposalService.dashboardDetails(obj).subscribe(data=>{
      this.getList = data;
    })
  }

}
