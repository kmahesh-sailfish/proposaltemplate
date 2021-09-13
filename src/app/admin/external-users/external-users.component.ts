import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AdminService } from '../admin.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { GridApi, ICellRendererParams, IDatasource, IGetRowsParams } from 'ag-grid-community';
import { AgRendererComponent } from "ag-grid-angular";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from "rxjs/Observable";


@Component({
  selector: 'addAmendCode-component',
  template: `<span>
                  <button type="button" class="btn btn-sm" (click)="viewClicked()" style="border:2px;margin-right:10px;color:#433163"><i class="fas fa-edit"></i>  View</button>
            </span>`
})

export class ExtUserInfoRenderer implements AgRendererComponent {

  public params: ICellRendererParams;
  agInit(params: ICellRendererParams) {
    this.params = params;
  }
  
  viewClicked() {
    console.log(this.params.data);
    this.params.context.componentParent.viewUserInfo(this.params.data);
  }
  refresh(): boolean {
    return false;
  }
}
export class SelectedUserInfoRenderer implements AgRendererComponent{
  public params: ICellRendererParams;
  agInit(params: ICellRendererParams) {
    this.params = params;    
  }
  refresh(): boolean {
    return false;
  }
}

@Component({
  selector: 'app-external-users',
  templateUrl: './external-users.component.html',
  styleUrls: ['./external-users.component.css']
})
export class ExternalUsersComponent implements OnInit {

  constructor(private adminService: AdminService, private modalService: NgbModal, private toastr: ToastrService) {
    this.context = { componentParent: this };
  }
  ExtUsersData: ExtUsersData[];
  selectedUserUniqueId: string;
  context: any;
  isDisabled: boolean = true;
  popupMsg: string;
  public userId: any;
  myForm: FormGroup;
  public gridOptions: any;
  public showbutton: boolean = false;
  public rowData: any = [];
  public title = "agGridExamples";
  public gridApi: GridApi;
  params: any;
  columnDefs = [
    {
      headerName: "Select",
      width: 75,
      //field: "id",
      resizable: true,
      headerTooltip:"Select",
      editable:true,
      checkboxSelection: true,
      tooltipField:"uniqueId",
      //cellRenderer: 'selectedUserInfoRenderer'
    },
    { headerName: "Name", field: 'name', sortable: true, filter: true, resizable: true, width: 140, cellRenderer: function(params) {
     //console.log("param:"+params);
      return params.data.firstName + ' ' + params.data.lastName; }
},
    { headerName: "Email", field: 'email', sortable: true, filter: true, resizable: true, width: 140 },
    { headerName: "Business Justification", field: 'businessJustification', sortable: true, filter: true, resizable: true, width: 140 },
    { headerName: "Request Status", field: 'approvalStatus', sortable: true, filter: true, resizable: true, width: 140 },
    { headerName: "Modified Date", field: 'modifiedDate', sortable: true, filter: true, resizable: true, width: 140 },
   { headerName: "Action", field: 'id', width: 120, cellRenderer: 'ExtUserInfoRenderer' },
  ];

  @ViewChild('content') templateRef: TemplateRef<any>;
  frameworkComponents = {
    ExtUserInfoRenderer: ExtUserInfoRenderer,
    selectedUserInfoRenderer: SelectedUserInfoRenderer
  }

  ngOnInit(): void {
    console.log("Amendmentinfo data");
    this.loadGrid();
    this.userId = localStorage.getItem("userAlias");
       
    this.myForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'email': new FormControl({ value: '', disabled: false }),
      'businessJustification': new FormControl({ value: '', disabled: false }),
      'approvalStatus': new FormControl({ value: '', disabled: false }),
      'comments': new FormControl({ value: '', disabled: false }),
    });
  }
  onGridReady(params: any) {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
    this.gridApi.setDatasource(this.datasource);
  }
  // private getRowData(startRow: number, endRow: number): Observable<any[]> {
  //   return this.adminService.getExternalUsers();
  // }
  datasource: IDatasource = {
    getRows: (params: IGetRowsParams) => {
      this.adminService.getExternalUsers().subscribe((data: any) => {
        params.successCallback(data)
      });
    }
  };
  loadGrid() {
    var data = this.adminService.getExternalUsers().subscribe((data: any) => {
      console.log(data);
      this.ExtUsersData = data.result._sourceObject as ExtUsersData[];
    });
    this.gridOptions = {     
      // maxConcurrentDatasourceRequests: 1,
      // rowModelType: "infinite",     
      rowSelection: 'multiple'
    };
  }
  viewUserInfo(selectedRow) {
    this.modalService.open(this.templateRef, {
      ariaLabelledBy: 'modal-basic-title'
    }).result.then((result) => {
      console.log("Closed");
    });
    console.log(selectedRow);
    this.isDisabled = true;
    this.myForm.setValue(
      {
        name: selectedRow.firstName + " "+ selectedRow.lastName,
        email: selectedRow.email,
        businessJustification: selectedRow.businessJustification,
        approvalStatus: selectedRow.approvalStatus,
        comments: selectedRow.comments
      }
    )
    this.popupMsg = "User Info";
  }
  approveSelected(content, status) {
console.log(status);
    var deleteObj = {};
    deleteObj['alias'] = this.userId;
    let selectedRows;
    selectedRows = this.gridApi.getSelectedRows();
console.log(selectedRows);

    if (selectedRows.length > 0) {
      let userIds = new Array();
      selectedRows.map((row) => {
        userIds.push(row["uniqueId"]);        
        deleteObj["uniqueIds"] = userIds;
        deleteObj['newStatus'] =  status;
        this.adminService.approveOrDenyUser(deleteObj).subscribe((data: any) => {
          //this.modalService.dismissAll();
          console.log("response: "+data)
          this.loadGrid();
        });
      }); 
      this.toastr.success("Selected users status updated successfully! "+ deleteObj["uniqueIds"]);
    }
    else {
      this.toastr.info("Please select user to approve/deny");
    }


//this.toastr.show("Approve");

console.log("data:"+content.toString());
   
  } 
  
}

export class ExtUsersData {  
  userId:number;
  Name: string;
  firstName: string;
  lastName: string;
  displayName: string;
  email: string;
  isActive: boolean;
  approvalStatusId: number;
  approvalStatus: string;
  approvedDate: Date;
  revokedDate: Date;
  comments: string;
  createdDate: Date;
  createdBy: string;
  modifiedDate:Date;
  modifiedBy:string;
  expiredDate:Date;
  businessJustification: string;
  isPendingApproval: boolean;
  actionModify:string;
  actionEnableDisable: string;
  actionModifyVisibility: boolean;
  actionEnableDisableVisibility: boolean;
  approversEmail :string;
  uniqueId: string;
}
