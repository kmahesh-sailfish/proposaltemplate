import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AgRendererComponent } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../admin.service';

@Component({
  selector: 'addAmendCode-component',
  template: `<span>
                  <button type="button" class="btn btn-sm" (click)="editClicked()" style="border:2px;margin-right:10px;color:#433163"><i class="fas fa-times"></i>  Delete</button>
            </span>`
})
export class EditApprover implements AgRendererComponent {

  public params: ICellRendererParams;
  agInit(params: ICellRendererParams) {
    this.params = params;
  }
  editClicked() {
    console.log(this.params.data);
    this.params.context.componentParent.deleteApprover(this.params.data);
  }
  refresh(): boolean {
    return false;
  }
}

@Component({
  selector: 'app-approvers',
  templateUrl: './approvers.component.html',
  styleUrls: ['./approvers.component.css']
})
export class ApproversComponent implements OnInit {
  approvers: any[];
  context: any;
  AddNewForm: boolean;
  isDisabled: boolean = true;
  popupMsg: string;
  myForm: FormGroup;
  errVal: boolean;  
  columnDefs = [
    { headerName: "Alias", field: 'alias', sortable: true, filter: true, resizable: true, width: 220 },
    { headerName: "Action", field: 'id', cellRenderer: 'editApprover', resizable: true, width: 200 }
  ];
  frameworkComponents = {
    editApprover: EditApprover
  };
  constructor(private adminService: AdminService, private toastr: ToastrService, private modalService: NgbModal) {
    this.context = { componentParent: this };
  }

  ngOnInit(): void {
    this.loadGrid();

    this.myForm = new FormGroup({
      'alias': new FormControl(null, Validators.required),
      'firstName': new FormControl({ value: '', disabled: false }),
      'lastName': new FormControl({ value: '', disabled: false }),
      'email': new FormControl({ value: '', disabled: false }),
    });
  }
  loadGrid() {
    var data = this.adminService.getApprovers().subscribe((data: any) => {
      console.log(data);
      this.approvers = data.result._sourceObject as ApproverData[];
    });
  }
  addApprover(content) {

    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title'
    }).result.then((result) => {
      console.log("Closed");
    })
    this.isDisabled = false;
    this.popupMsg = "Add Approver";
    this.myForm.reset();
  }
  saveNewApprover(form) {
    
      console.log("Save started");
      var obj = {
        "Alias": this.myForm.get('alias').value,
        "FirstName": this.myForm.get('firstName').value,
        "LastName": this.myForm.get('lastName').value,
        "Email": this.myForm.get('email').value,        
        "CreatedBy": "v-nagarjunaa"
      }
      console.log(obj);
      this.adminService.addApprover(obj).subscribe((data: any) => {
        this.modalService.dismissAll();
        this.toastr.success("Approver added successfully!");
        this.loadGrid();
      });
    }

    deleteApprover(selectedApprover) {  
      console.log(selectedApprover) ;   
      this.adminService.deleteApprover(selectedApprover.uniqueId).subscribe(result => {
        console.log(result)
        this.toastr.success("Approver deleted successfully!");
        this.loadGrid();
      });
    }
}
  export class ApproverData {
    id: number;
    firstName: string;
    lastName: string;  
    email: string;
    alias: string;
    createdDate: string;  
    createdBy: string;
    modifiedDate: string;
    modifiedBy: boolean;  
    uniqueId: boolean;   
  }
  

