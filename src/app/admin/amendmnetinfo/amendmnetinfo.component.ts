import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AdminService } from '../admin.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ICellRendererParams } from 'ag-grid-community';
import { AgRendererComponent } from "ag-grid-angular";
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'addAmendCode-component',
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
    this.params.context.componentParent.editAmendmentsInfo(this.params.data);
  }
  refresh(): boolean {
    return false;
  }
}

@Component({
  selector: 'app-amendmnetinfo',
  templateUrl: './amendmnetinfo.component.html',
  styleUrls: ['./amendmnetinfo.component.css']
})
export class AmendmnetinfoComponent implements OnInit {

  constructor(private adminService: AdminService, private modalService: NgbModal, private toastr: ToastrService) {
    this.context = { componentParent: this };
  }
  amendmentInfoData: AmendmentInfoData[];
  amendmentInfoId: number;
  amendmentCode: string;
  selectedBucketId: number;
  selectedBucketName: string;
  amendmentBucketType: string;
  buckets: any[];
  introSingular: string;
  exitSingular: string;
  introPlural: string;
  exitPlural: string;
  hasEditableTables: boolean;
  isHRD: boolean;
  context: any;
  private gridApi;
  isDisabled: boolean = true;
  popupMsg: string;

  myForm: FormGroup;

  columnDefs = [
    { headerName: "Amendment", field: 'code', sortable: true, filter: true, resizable: true, width: 130 },
    { headerName: "Bucket", field: 'bucket', sortable: true, filter: true, resizable: true, width: 155 },
    { headerName: "Intro Singular", field: 'intro_Singular', sortable: true, filter: true, resizable: true, width: 145 },
    { headerName: "Exit Singular", field: 'exit_Singular', sortable: true, filter: true, resizable: true, width: 130 },
    { headerName: "Intro Plural", field: 'intro_Plural', sortable: true, filter: true, resizable: true, width: 130 },
    { headerName: "Exit Plural", field: 'exit_Plural', sortable: true, filter: true, resizable: true, width: 130 },
    { headerName: "Editable Tables", field: 'hasEditableTables', sortable: true, filter: true, resizable: true, width: 145 },
    { headerName: "Action", field: 'id', width: 110, cellRenderer: 'addAmendmentInfoRenderer' },
  ];

  @ViewChild('content') templateRef: TemplateRef<any>;
  frameworkComponents = {
    addAmendmentInfoRenderer: AddAmendmentInfoRenderer
  }
  ngOnInit(): void {
    console.log("Amendmentinfo data");
    this.loadGrid();
    this.adminService.getAmendmentBucketInfo().subscribe((data: any) => {
      console.log(data)
      this.buckets = data.result;
    });


    this.myForm = new FormGroup({
      'formAmendmentCode': new FormControl(null, Validators.required),
      'formAmendmentBucketType': new FormControl(null, Validators.required),
      'formIntroSingular': new FormControl({ value: '', disabled: true }),
      'formExitSingular': new FormControl({ value: '', disabled: true }),
      'formIntroPlural': new FormControl({ value: '', disabled: true }),
      'formExitPlural': new FormControl({ value: '', disabled: true }),
      'formHasEditableTables': new FormControl(null)
    });
  }
  // onGridReady(params) {
  //   // onGridReady(params: GridReadyEvent) {
  //   this.gridApi = params.api;
  // }
  loadGrid() {
    var data = this.adminService.getAmendmentInfo().subscribe((data: any) => {
      console.log(data);
      this.amendmentInfoData = data.result as AmendmentInfoData[];

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
    this.amendmentInfoId = selectedRow.id;
    this.amendmentCode = selectedRow.code;
    this.selectedBucketId = selectedRow.bucketId;
    this.amendmentBucketType = selectedRow.bucketId;
    this.hasEditableTables = selectedRow.hasEditableTables;
    this.myForm.setValue(
      {
        formAmendmentCode: selectedRow.code,
        formAmendmentBucketType: selectedRow.bucketId,
        formIntroSingular: selectedRow.intro_Singular,
        formExitSingular: selectedRow.exit_Singular,
        formIntroPlural: selectedRow.intro_Plural,
        formExitPlural: selectedRow.exit_Plural,
        formHasEditableTables: selectedRow.hasEditableTables
      }
    )
    this.myForm.get('formAmendmentCode').disable();
    this.isHRD = selectedRow.isHRDD;
    this.popupMsg = "Edit Amendment Info";
  }
  addAmendments(content) {
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title'
    }).result.then((result) => {
      console.log("Closed");
    })
    this.isDisabled = false;
    this.popupMsg = "Add New Amendment Info";
    this.myForm.get('formAmendmentCode').enable();
    this.myForm.reset();
  }
  onBucketChange(event) {
    console.log(event);
    console.log(this.buckets.filter(a => a.id === event.id)[0].id);
    this.selectedBucketId = this.buckets.filter(a => a.id === event.id)[0].id;
    this.selectedBucketName = this.buckets.filter(a => a.id === event.id)[0].bucket;
    this.myForm.setValue(
      {
        formAmendmentCode: this.myForm.get('formAmendmentCode').value,
        formAmendmentBucketType: this.selectedBucketId,
        formIntroSingular: this.buckets.filter(a => a.id === event.id)[0].intro_Singular,
        formExitSingular: this.buckets.filter(a => a.id === event.id)[0].exit_Singular,
        formIntroPlural: this.buckets.filter(a => a.id === event.id)[0].intro_Plural,
        formExitPlural: this.buckets.filter(a => a.id === event.id)[0].exit_Plural,
        formHasEditableTables: this.myForm.get('formHasEditableTables').value,
      }
    )
  }
  onHasEditChange(isChecked: boolean) {
    this.hasEditableTables = isChecked;
  }
  saveNewAmendment(form) {


    if (this.popupMsg == "Add New Amendment Info") {
      var obj = {
        "Code": this.myForm.get('formAmendmentCode').value,
        "BucketId": this.myForm.get('formAmendmentBucketType').value,
        "Bucket": this.selectedBucketName,
        "Intro_Singular": this.myForm.get('formIntroSingular').value,
        "Exit_Singular": this.myForm.get('formExitSingular').value,
        "Intro_Plural": this.myForm.get('formIntroPlural').value,
        "Exit_Plural": this.myForm.get('formExitPlural').value,
        "HasEditableTables": this.myForm.get('formHasEditableTables').value,
        "userAlias": "v-nagarjunaa"
      }
      this.adminService.addAmendmentInfo(obj).subscribe((data: any) => {
        this.modalService.dismissAll();
        this.toastr.success("Amendment code " + this.amendmentCode + " added successfully!");
        this.loadGrid();
      });
    }
    else {
      var objUpdate = {
        "Bucket": this.selectedBucketName,
        "BucketId": this.selectedBucketId,
        "Code": this.myForm.get('formAmendmentCode').value,
        "Id": this.amendmentInfoId,
        "Intro_Singular": this.myForm.get('formIntroSingular').value,
        "Exit_Singular": this.myForm.get('formExitSingular').value,
        "Intro_Plural": this.myForm.get('formIntroPlural').value,
        "Exit_Plural": this.myForm.get('formExitPlural').value,
        "HasEditableTables": this.hasEditableTables,
        "IsHRDD": this.isHRD,
        "userAlias": "v-nagarjunaa"
      }
      this.adminService.updateAmendmentInfo(objUpdate).subscribe((data: any) => {
        this.modalService.dismissAll();
        this.toastr.success("Amendment code " + this.amendmentCode + " updated successfully!");
        this.loadGrid();
      });
    }
  }

}

export class AmendmentInfoData {
  id: number;
  code: string;
  bucket: string;
  isHRDD: boolean;
  isDiscounted: boolean;
  discountType: string;
  bucketId: number;
  intro_Singular: string;
  exit_Singular: string;
  intro_Plural: string;
  exit_Plural: string;
  hasEditableTables: boolean;
}
