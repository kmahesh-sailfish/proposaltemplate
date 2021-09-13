import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AdminService } from '../admin.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ICellRendererParams } from 'ag-grid-community';
import { AgRendererComponent } from "ag-grid-angular";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'addAlert-component',
  template: `<span>
                  <button type="button" class="btn btn-sm" (click)="editClicked()" style="border:2px;margin-right:10px;color:#433163"><i class="fas fa-edit"></i>  Edit</button>
            </span>`
})
export class AddAmendmentInfoRenderer implements AgRendererComponent {

  public params: ICellRendererParams;
  agInit(params: ICellRendererParams) {
    this.params = params;
  }
  editClicked() {
    console.log(this.params.data);
    console.log("edit method start");
    this.params.context.componentParent.editAmendmentsInfo(this.params.data);
    console.log("edit method start2");
  }
  refresh(): boolean {
    return false;
  }
}


@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})


export class AlertsComponent implements OnInit {

  constructor(private adminService: AdminService, private modalService: NgbModal, private toastr: ToastrService) {
    this.context = { componentParent: this };
  }
  amendmentInfoData: AlertData[];
  alertInfoId: number;  
  context: any;
  private gridApi;
  isDisabled: boolean = true;
  popupMsg: string;

  myForm: FormGroup;
  levels= [{level: "Warning", id:0},{level:"Info", id:1 }];

  columnDefs = [
    { headerName: "Name", field: 'name', sortable: true, filter: true, resizable: true, width: 140, cellRenderer: function(params) {
      return params.value ? params.value : '';
  } },

    { headerName: "Message", field: 'message', sortable: true, filter: true, resizable: true, width: 150, cellRenderer: function(params) {
      return params.value ? params.value : '';
  } },
    { headerName: "Level", field: 'level', sortable: true, filter: true, resizable: true, width: 140 },
    { headerName: "Start Date", field: 'startDate', sortable: true, filter: true, resizable: true, width: 140 },
    { headerName: "End Date", field: 'endDate', sortable: true, filter: true, resizable: true, width: 140 },
    { headerName: "Action", field: 'id', width: 110, cellRenderer: 'addAmendmentInfoRenderer' },

  ];

  @ViewChild('content') templateRef: TemplateRef<any>;
  frameworkComponents = {
    addAmendmentInfoRenderer: AddAmendmentInfoRenderer
  }
  ngOnInit(): void {
    this.loadGrid();
    this.myForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'message': new FormControl(null, Validators.required),
      'level': new FormControl({ value: '', disabled: false }),
      'startDate': new FormControl({ value: '', disabled: false }),
      'endDate': new FormControl({ value: '', disabled: false })
           
    });
  }
 
  loadGrid() {   
    var data = this.adminService.getAlerts().subscribe((data: any) => {
      console.log(data);
      this.amendmentInfoData = data.result._sourceObject as AlertData[];
    });
  }
  editAmendmentsInfo(selectedRow) {
    this.modalService.open(this.templateRef, {
      ariaLabelledBy: 'modal-basic-title'
    }).result.then((result) => {
      console.log("Closed");
    });
    console.log(selectedRow);
    this.isDisabled = true;
    this.alertInfoId = selectedRow.id;
    
    this.myForm.setValue(
      {
        // "2021-08-26"
        
        name: selectedRow.name,
        message: selectedRow.message,
        level: selectedRow.level,
        startDate: moment(selectedRow.startDate).format("YYYY-MM-DD"),
        endDate: moment(selectedRow.endDate).format("YYYY-MM-DD"),
      }
    )
    this.popupMsg = "Edit Alert Info";
  }
  addAlert(content) {
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title'
    }).result.then((result) => {
      console.log("Closed");
    })
    this.myForm.reset();
    this.isDisabled = false;
    this.popupMsg = "Add Alert Info";
    this.myForm.get('formAmendmentCode').enable();   
  }
  saveNewAmendment(form) {
    if (this.popupMsg == "Add Alert Info") {
      console.log("Save started");
      var obj = {
        "Name": this.myForm.get('name').value,
        "Message": this.myForm.get('message').value,
        "Level": this.myForm.get('level').value,
        "StartDate": this.myForm.get('startDate').value,
        "EndDate": this.myForm.get('endDate').value,
        "CreatedBy": "v-nagarjunaa",
        "ModifiedBy": "v-nagarjunaa"
      }
      console.log(obj);
      this.adminService.addAlert(obj).subscribe((data: any) => {
        this.modalService.dismissAll();
        this.toastr.success("Alert added successfully!");
        this.loadGrid();
      });
    }
    else {
      var objUpdate = {        
        "Name": this.myForm.get('name').value,
        "Id": this.alertInfoId,
        "Message": this.myForm.get('message').value,
        "Level": this.myForm.get('level').value,
        "StartDate": this.myForm.get('startDate').value,
        "EndDate": this.myForm.get('endDate').value,        
        "ModifiedBy": "v-nagarjunaa"
      }
      console.log(objUpdate);
      this.adminService.addAlert(objUpdate).subscribe((data: any) => {
        this.modalService.dismissAll();
        this.toastr.success("Alert updated successfully!");
        this.loadGrid();
      });
    }
  }
}
export const QuillConfiguration = {
  toolbar: [
    ['bold', 'italic', 'underline', 'strike'],
    // ['blockquote', 'code-block'],
    // [{ list: 'ordered' }, { list: 'bullet' }],
    // [{ header: [1, 2, 3, 4, 5, 6, false] }],
    // [{ color: [] }, { background: [] }],
    // ['link'],
    // ['clean'],
  ],
}

export class AlertData {
  id:number;
  message: string;
  level: number;
  startDate: Date;
  endDate: Date;
  createdBy: string;
  dateCreated: Date;
  modifiedBy: string;
  dateModified: Date;
  name: string;
}


