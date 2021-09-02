import { Component, OnInit } from '@angular/core';
import { ProposalService } from "src/app/proposal.service";
//import { FormGroup, FormControl, FormArray, Validators } from "@angular/forms";
//import { DatePipe } from '@angular/common';

import { ToastrService } from "ngx-toastr";


@Component({
  selector: 'app-delgate-date-range',
  templateUrl: './delgate-date-range.component.html',
  styleUrls: ['./delgate-date-range.component.css']
})
export class DelgateDateRangeComponent implements OnInit {
  public dateDelegation: any = {};
  //public delegateForm: FormGroup;
  constructor(
    private proposalService: ProposalService,
    private toastr: ToastrService,
    //private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    //this.userId = localStorage.getItem('userAlias');
    // this.dateDelegation.delegatedTo = null;
    // this.dateDelegation.effectiveDate = null;
    
    // this.dateDelegation.range = null;
    // this.dateDelegation.comments = null;
    //alert(this.datePipe.transform(new Date(), 'yyyy-MM-dd'));
  }

  // loadForm() {
  //   // this.delegateForm = new FormGroup({
  //   //   //proposalId: new FormControl("", [Validators.required,this.customValidators.nameValidator]),
  //   //   delegatedTo: new FormControl(this.dateDelegation.delegatedTo, [Validators.required]),
  //   //   //IsDraft: new FormControl(false, [])
  //   // });
  // }

  onSubmit(value: any) {
    value["UserAlias"] = "v-skarukonda";
    value["IsLe"] = true;
    value["IsSuperUser"] = true;
    value["DelegationType"] = 1;
    value["IsValidDelegateDateRange"] = true;
    this.proposalService.addDelegation(value).subscribe(data => {
      //console.log(data);
      this.toastr.success("Successfully Authorized New Delegation", "Success");
    });
  }

}
