import { Component, OnInit } from "@angular/core";
import { ICellRendererParams } from "ag-grid-community";
import { NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { ProposalService } from "../../../../proposal.service";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { ConformationComponent } from "../../conformation/conformation.component";

@Component({
  selector: "app-edit-action",
  templateUrl: "./edit-action.component.html",
  styleUrls: ["./edit-action.component.css"]
})
export class EditActionComponent implements OnInit {
  userId: any;
  cellValue: any;
  params: any;
  obj: any = {};
  // private objactiveComponent: ActiveProposalComponent;
  ngOnInit(): void {
    console.log(this.obj, "edited");
    // this.obj = this.params.data;
    this.userId = localStorage.getItem("userAlias");
  }

  constructor(
    //  private objactiveComponents: ActiveProposalComponent,
    private modalService: NgbModal,
    private adminService: ProposalService,
    private toastr: ToastrService,
    private router: Router
  ) {
    // this.objactiveComponent = objactiveComponents;
  }

  editClicked(event) {
    event.stopPropagation();
    console.log(this.params.data, "edited");

    // this.router.navigate(["proposaloverview/", this.params.data["id"]]);
  }
  downloadCTMFile(event) {
    event.stopPropagation();
    var rowData = this.params.data;
    console.log(rowData, "data");
    this.adminService.downLoadCTM(rowData.id).subscribe(data => {
      this.saveData(data.content, data.fileName);
    });
  }
  saveData = (function() {
    var a = document.createElement("a");
    document.body.appendChild(a);
    // a.style = "display: none";
    return function(data, fileName) {
      console.log(data);
      var json = atob(data),
        blob = this.base64toBlob(json),
        url = window.URL.createObjectURL(blob);
      a.href = url;
      a.download = fileName;
      a.click();
      window.URL.revokeObjectURL(url);
    };
  })();

  base64toBlob(byteString) {
    var ia = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ia], { type: "octet/stream" });
  }

  shareClicked(event) {
    event.stopPropagation();
    var rowData = this.params.data;
    rowData["labelMessage"] = "Share";
    console.log(this.params.data, "share");
    const modalRef = this.modalService.open(ConformationComponent, {
      size: "sm"
    });
    modalRef.componentInstance.rowObj = rowData;
  }
  deleteClicked(event) {
    event.stopPropagation();
    var rowData = this.params.data;
    rowData["labelMessage"] = "Delete";
    console.log(this.params.data, "deleted");
    const modalRef = this.modalService.open(ConformationComponent, {
      size: "sm"
    });
    modalRef.componentInstance.labelMessage = "Delete";
    modalRef.componentInstance.rowObj = rowData;
  }
  stopShareCTM(event) {
    event.stopPropagation();
    var rowData = this.params.data;
    rowData["labelMessage"] = "Stop Sharing CTM";

    const modalRef = this.modalService.open(ConformationComponent, {
      size: "sm"
    });
    modalRef.componentInstance.labelMessage = "Stop Sharing CTM";
    modalRef.componentInstance.rowObj = rowData;
  }
  agInit(params: ICellRendererParams): void {
    this.cellValue = params.value;
    this.params = params;
    this.obj = params.data;
    //this.objactiveComponent.setHRDEditDiv(this.params.data);
  }
}
