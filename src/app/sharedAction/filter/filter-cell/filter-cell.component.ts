import { Component, ViewChild, ViewContainerRef } from "@angular/core";

import {
  IAfterGuiAttachedParams,
  IDoesFilterPassParams,
  IFilterParams,
  RowNode
} from "ag-grid-community";
import { IFilterAngularComp } from "ag-grid-angular";
@Component({
  selector: "app-filter-cell",
  templateUrl: "./filter-cell.component.html",
  styleUrls: ["./filter-cell.component.css"]
})
export class FilterCellComponent {
  private params: IFilterParams;
  private valueGetter: (rowNode: RowNode) => any;
  public text: string = "";

  @ViewChild("input", { read: ViewContainerRef })
  public input;
  constructor() {}
  ngOnInit() {}
  agInit(params: IFilterParams): void {
    console.log("agInit");
    this.params = params;
    this.valueGetter = params.valueGetter;
  }

  isFilterActive(): boolean {
    console.log("isFilterActive");
    return this.text !== null && this.text !== undefined && this.text !== "";
  }

  doesFilterPass(params: IDoesFilterPassParams): boolean {
    console.log("doesFilterPass");
    return this.text
      .toLowerCase()
      .split(" ")
      .every(filterWord => {
        return (
          this.valueGetter(params.node)
            .toString()
            .toLowerCase()
            .indexOf(filterWord) >= 0
        );
      });
  }

  getModel(): any {
    console.log("getModel");
    return { value: this.text };
  }

  setModel(model: any): void {
    console.log("setModel");
    this.text = model ? model.value : "";
  }

  ngAfterViewInit(params: IAfterGuiAttachedParams): void {
    console.log("ngAfterViewInit");
    setTimeout(() => {
      this.input.element.nativeElement.focus();
    });
  }

  // noinspection JSMethodCanBeStatic
  componentMethod(message: string): void {
    console.log("componentMethod");
    alert(`Alert from PartialMatchFilterComponent ${message}`);
  }

  onChange(newValue): void {
    console.log("onChange");
    if (this.text !== newValue) {
      this.text = newValue;
      this.params.filterChangedCallback();
    }
  }
}
