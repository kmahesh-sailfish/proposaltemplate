import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ProposalService } from "src/app/proposal.service";
import { ToastrService } from 'ngx-toastr';
import { ICellRendererParams } from 'ag-grid-community';
import { AgRendererComponent } from "ag-grid-angular";
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { convertActionBinding } from '@angular/compiler/src/compiler_util/expression_converter';

@Component({
  selector: 'addAlert-component',
  template: `<span>
            <button type="button" class="btn btn-outline-secondary btn-sm" (click)="deleteClicked()" style="border:2px;"><i class="fas fa-times"></i>    Delete</button>
            </span>`
})
export class AddAmendmentInfoRenderer implements AgRendererComponent {

  public params: ICellRendererParams;
  rowDataSelected: DelegationData;
  amendmentInfoData: DelegationData[];

  constructor(private proposalService: ProposalService, private toastr:ToastrService) {
  }

  agInit(params: ICellRendererParams) {
    this.params = params;
  }

  deleteClicked() {
    console.log("delete clicked");
    this.rowDataSelected = Object.assign(new DelegationData(), this.params.data);
    var obj = {
      "Id": this.rowDataSelected.id,
      "proposalId": this.rowDataSelected.proposalId,
      "delegationType": this.rowDataSelected.delegationType,
      "Action": "Delete"
     }
     console.log(obj);
     console.log(obj.delegationType);
     var delType = obj.delegationType.toString();

     if (delType == "Proposal")
     {
          this.proposalService.deleteProposalDelegation(obj.Id).subscribe(result => {
          console.log(result)
           this.toastr.success("Proposal Delegation ID: "+ obj.proposalId+ " deleted successfully!");
           this.loadGrid();
        });
     }
     else if (delType == "DateDelegation")
     {
          this.proposalService.deleteDateDelegation(obj.Id).subscribe(result => {
          console.log(result)
           this.toastr.success("Date Delegation ID "+ obj.Id + " deleted successfully!");
           this.loadGrid();
        });
     }
  }

  loadGrid() {
    var data = this.proposalService.getAllAdvanceDelegations("v-skarukonda").subscribe((data: any) => {
      console.log(data);
      this.amendmentInfoData = data as DelegationData[];
    });
  }

  refresh(): boolean {
    return false;
  }
}

@Component({
  selector: 'app-delegation',
  templateUrl: './delegation.component.html',
  styleUrls: ['./delegation.component.css']
})

export class DelegationComponent implements OnInit {

  constructor(private proposalService: ProposalService, private modalService: NgbModal, private toastr: ToastrService) {
    this.context = { componentParent: this };
  }

  amendmentInfoData: DelegationData[];
  alertInfoId: number;
  context: any;
  private gridApi;
  isDisabled: boolean = true;
  popupMsg: string;

  public userId: any;
  public rowData: any = [];

  columnDefs = [
    { headerName: "Type", field: 'delegationType', sortable: true, filter: true, resizable: true, width: 100,
    // cellRenderer: (data: { value: moment.MomentInput; }) => {
    //   return data.value == 0 ? "Proposal" : "Date";
    // }
  },
    { headerName: "Authorized", field: 'status', sortable: true, filter: true, resizable: true, width: 100,
    cellRenderer: (data: { value: moment.MomentInput; }) => {
      return data.value == 1 ? "DelegationRequested" : "Delegated";
    } 
  },
    { headerName: "Authorizing LE", field: 'authorizingLE', sortable: true, filter: true, resizable: true, width: 140 },
    { headerName: "Delegated LS", field: 'delegatedLS', sortable: true, filter: true, resizable: true, width: 140 },
    { headerName: "Proposal ID", field: 'proposalId', sortable: true, filter: true, resizable: true, width: 140 },
    { headerName: "Start Date", field: 'startDate', sortable: true, filter: true, resizable: true, width: 140 },
    { headerName: "End Date", field: 'endDate', sortable: true, filter: true, resizable: true, width: 150 },
    { headerName: "Action", field: 'id', width: 150, cellRenderer: 'addAmendmentInfoRenderer' },
  ];

  @ViewChild('content') templateRef: TemplateRef<any>;
  frameworkComponents = {
    addAmendmentInfoRenderer: AddAmendmentInfoRenderer
  }

  ngOnInit(): void {
    console.log("Amendmentinfo data");
    this.loadGrid();
    //this.userId = localStorage.getItem("userAlias");
  }

  loadGrid() {
    var data = this.proposalService.getAllAdvanceDelegations("v-skarukonda").subscribe((data: any) => {
      console.log(data);
      this.amendmentInfoData = data as DelegationData[];
    });
  }
}

export class DelegationData {
  id: number;
  proposalId: string;
  delegationType: number;
  status: number;
  startDate: Date;
  endDate: Date;
  delegatedLS: string;
  authorizingLE: string;
  isEditMode: boolean;
  isDateEditable: boolean;
}