import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProposalService } from 'src/app/proposal.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-conformation',
  templateUrl: './conformation.component.html',
  styleUrls: ['./conformation.component.css']
})
export class ConformationComponent implements OnInit {
  public rowObj:any;
  constructor(
    public activeModal: NgbActiveModal,
    public proposalService:ProposalService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  submitConfirm(){
    if (this.rowObj["labelMessage"] == "Share"){
      console.log(this.rowObj);
    }else if(this.rowObj["labelMessage"] == "Delete"){
      console.log(this.rowObj,'deleted')
    }else{
      console.log(this.rowObj,'stopsahre');
    }
    // this.proposalService
    //   .actionProposal(obj, this.rowObj["labelMessage"])
    //   .subscribe(res => {
    //     //this.router.navigate(["/activeproposal"]);
    //     const currentUrl = this.router.url;
    //     this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
    //         this.router.navigate([currentUrl]);
    //     });
    //     this.activeModal.close();
    //   });
  }

  deleteCTM(){

  }
  shareCTM(){

  }
  
}
