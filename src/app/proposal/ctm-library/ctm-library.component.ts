import { Component, OnInit } from "@angular/core";
import { ProposalService } from "src/app/proposal.service";
import { Router } from "@angular/router";
import * as moment from "moment";
import {
  GridApi,
  ICellRendererParams,
  IDatasource,
  IGetRowsParams
} from "ag-grid-community";
@Component({
  selector: "app-ctm-library",
  templateUrl: "./ctm-library.component.html",
  styleUrls: ["./ctm-library.component.css"]
})
export class CtmLibraryComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit() {}
  addCTM() {
    this.router.navigate(["/ctmlibrary"]);
  }
}
