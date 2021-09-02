import { Component, OnInit } from '@angular/core';
import { ProposalService } from "src/app/proposal.service";

import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-delgate-proposal-workflow',
  templateUrl: './delgate-proposal-workflow.component.html',
  styleUrls: ['./delgate-proposal-workflow.component.css']
})
export class DelgateProposalWorkflowComponent implements OnInit {
  public proposalDelegation: any = {};
  constructor(private proposalService: ProposalService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(value: any) {
    value["UserAlias"] = "v-skarukonda";
    value["IsLe"] = true;
    value["IsSuperUser"] = true;
    value["DelegationType"] = 0;

    this.proposalService.addDelegation(value).subscribe(data => {
      console.log(data);
      this.toastr.success(data, "Success");
    });
  }
}
