import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";
import { ProposalService } from "src/app/proposal.service";
import { ToastrService } from "ngx-toastr";
import { ICellRendererParams } from "ag-grid-community";
import { EditActionComponent } from "../../sharedAction/edit-action/edit-action.component";

@Component({
  selector: "app-active-proposal",
  templateUrl: "./active-proposal.component.html",
  styleUrls: ["./active-proposal.component.css"]
})
export class ActiveProposalComponent implements OnInit {
  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject<any>();
  public ActiveProposal: any[] = [];

  constructor(private proposalService: ProposalService) {}
  rowData: any = [];

  ngOnInit(): void {
    // this.loadActiveProposal();
    this.loadGrid();
  }
  setHRDEditDiv(obj) {
    console.log(obj, "obj");
  }

  loadGrid() {
    var da = this.proposalService.getActiveProposal().subscribe((res: any) => {
      this.rowData = res["result"];
      //  this.ActiveProposal = res["result"];
    });
  }
  columnDefs = [
    { headerName: "Create", field: "createdDate", resizable: true },
    { headerName: "proposalId", field: "proposalId", resizable: true },
    { headerName: "CreateBy", field: "createdByAlias", resizable: true },
    { headerName: "ModifyBy", field: "lastModifiedBy", resizable: true },
    { headerName: "Customer Name", field: "customerName", resizable: true },
    { headerName: "Status", field: "status", resizable: true },
    { headerName: "Shared", field: "isShared", resizable: true },
    { headerName: "Delegation", field: "delegationStatus", resizable: true },
    {
      headerName: "Action",
      field: "id",
      cellRenderer: "editAction",
      resizable: true,
      width: 250
    }
  ];
  frameworkComponents = {
    editAction: EditActionComponent
  };
}

// @Component({
//   selector: "editAction-component",
//   template: `<span>
//                   <button type="button" class="btn btn-sm" (click)="editClicked()" style="border:2px;margin-right:10px;color:#433163"><i class="fas fa-edit"></i>  Edit</button>
//                   <button type="button" class="btn btn-outline-secondary btn-sm" (click)="deleteClicked()" style="border:2px;"><i class="fas fa-times"></i>    Delete</button>

//             </span>`
// })
// export class editActionComponent {
//   cellValue: any;
//   params: any;
//   private objactiveComponent: ActiveProposalComponent;
//   constructor(
//     private objactiveComponents: ActiveProposalComponent,
//     private adminService: ProposalService,
//     private toastr: ToastrService
//   ) {
//     this.objactiveComponent = objactiveComponents;
//   }

//   editClicked() {
//     console.log(this.params.data);
//   }
//   deleteClicked() {
//     console.log(this.params.data);
//   }
//   agInit(params: ICellRendererParams): void {
//     this.cellValue = params.value;
//     this.params = params;
//     this.objactiveComponent.setHRDEditDiv(this.params.data);
//   }
// }
