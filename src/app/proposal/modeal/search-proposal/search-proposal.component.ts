import { AfterViewInit, Component, OnInit } from "@angular/core";
import { NgbModalConfig, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { PriceProposalComponent } from "../price-proposal/price-proposal.component";
@Component({
  selector: "app-search-proposal",
  templateUrl: "./search-proposal.component.html",
  styleUrls: ["./search-proposal.component.css"]
})
export class SearchProposalComponent implements OnInit {
  public searchAmendList: any;
  dtOptions: DataTables.Settings = {};
  public columnDefs: any;
  public rowData: any;
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
    this.dtOptions = {
      paging: false,
      searching: false
    };
    this.loadDatatable();
  }

  loadDatatable() {
    this.columnDefs = [
      { field: "Code", sortable: true, filter: true },
      { field: "FileName" },
      { field: "Language", sortable: true, filter: true },
      { field: "Action" }
    ];

    this.rowData = [
      {
        retrivalCount: 15,
        PId: 0,
        Id: 3322,
        Code: "M426",
        CTMAmendmentCode: null,
        Language: "JPN",
        Empowerment: "Blue",
        DocumentId: 65269,
        IsCTM: false,
        Stream: "",
        FileName: "(M426)EnrAmend(5YearEnrollment)(WW)(JPN)(Apr2020)(IU).docx",
        CTMFooterCode: null,
        BlobStoragePath: null,
        Order: 1,
        FileVersion: "Apr2020",
        Loc: "WW",
        DI: "",
        IsEdited: false,
        IsConsolidated: false,
        Type: 0,
        CTMCode: null,
        Link: null,
        IsPricingAmendment: false,
        IsCTMPricing: false,
        FooterCode: null,
        IsEditField: false,
        IsCTMAmendment: false,
        HasEditableTable: false,
        Discount: null,
        DealSize: null,
        BeginDate: null,
        EndDate: null,
        CommitToConsume: null,
        CurrencyCode: null,
        CTMFooterId: null
      },
      {
        retrivalCount: 15,
        PId: 0,
        Id: 3321,
        Code: "M455",
        CTMAmendmentCode: null,
        Language: "ENG",
        Empowerment: "Blue",
        DocumentId: 67099,
        IsCTM: false,
        Stream: "",
        FileName:
          "(M455)EnrAmend(AzureMonetaryCommitmentAdjustment)(WW)(ENG)(Nov2020)(IU).docx",
        CTMFooterCode: null,
        BlobStoragePath: null,
        Order: 2,
        FileVersion: "Nov2020",
        Loc: "WW",
        DI: "",
        IsEdited: false,
        IsConsolidated: false,
        Type: 0,
        CTMCode: null,
        Link: null,
        IsPricingAmendment: false,
        IsCTMPricing: false,
        FooterCode: null,
        IsEditField: false,
        IsCTMAmendment: false,
        HasEditableTable: false,
        Discount: null,
        DealSize: null,
        BeginDate: null,
        EndDate: null,
        CommitToConsume: null,
        CurrencyCode: null,
        CTMFooterId: null
      },
      {
        retrivalCount: 15,
        PId: 0,
        Id: 3330,
        Code: "M59",
        CTMAmendmentCode: null,
        Language: "ENG",
        Empowerment: "Green",
        DocumentId: 45588,
        IsCTM: false,
        Stream: "",
        FileName:
          "(M59)EnrAmend(CustomPaymentOptionsOnEnterpriseEnrollment)(WW)(ENG)(Aug2017)(IU).docx",
        CTMFooterCode: null,
        BlobStoragePath: null,
        Order: 3,
        FileVersion: "Aug2017",
        Loc: "WW",
        DI: "",
        IsEdited: false,
        IsConsolidated: false,
        Type: 0,
        CTMCode: null,
        Link: null,
        IsPricingAmendment: false,
        IsCTMPricing: false,
        FooterCode: null,
        IsEditField: false,
        IsCTMAmendment: false,
        HasEditableTable: false,
        Discount: null,
        DealSize: null,
        BeginDate: null,
        EndDate: null,
        CommitToConsume: null,
        CurrencyCode: null,
        CTMFooterId: null
      },
      {
        retrivalCount: 15,
        PId: 0,
        Id: 3331,
        Code: "M414",
        CTMAmendmentCode: null,
        Language: "PTB",
        Empowerment: "Blue",
        DocumentId: 67709,
        IsCTM: false,
        Stream: "",
        FileName:
          "(M414)EnrAmend(NonOLSDownloadCorrection)(WW)(PTB)(Jan2021)(IU).docx",
        CTMFooterCode: null,
        BlobStoragePath: null,
        Order: 4,
        FileVersion: "Jan2021",
        Loc: "WW",
        DI: "",
        IsEdited: false,
        IsConsolidated: false,
        Type: 0,
        CTMCode: null,
        Link: null,
        IsPricingAmendment: false,
        IsCTMPricing: false,
        FooterCode: null,
        IsEditField: false,
        IsCTMAmendment: false,
        HasEditableTable: true,
        Discount: null,
        DealSize: null,
        BeginDate: null,
        EndDate: null,
        CommitToConsume: null,
        CurrencyCode: null,
        CTMFooterId: null
      },
      {
        retrivalCount: 15,
        PId: 0,
        Id: 3335,
        Code: "M405",
        CTMAmendmentCode: null,
        Language: "PTE",
        Empowerment: "Blue",
        DocumentId: 52898,
        IsCTM: false,
        Stream: "",
        FileName:
          "(M405)EnrAmend(SQLServerCompetitiveMigrationOffer)(WW)(PTE)(Jan2018)(IU).docx",
        CTMFooterCode: null,
        BlobStoragePath: null,
        Order: 5,
        FileVersion: "Jan2018",
        Loc: "WW",
        DI: "",
        IsEdited: false,
        IsConsolidated: false,
        Type: 0,
        CTMCode: null,
        Link: null,
        IsPricingAmendment: false,
        IsCTMPricing: false,
        FooterCode: null,
        IsEditField: false,
        IsCTMAmendment: false,
        HasEditableTable: true,
        Discount: null,
        DealSize: null,
        BeginDate: null,
        EndDate: null,
        CommitToConsume: null,
        CurrencyCode: null,
        CTMFooterId: null
      }
    ];
  }
  loadData() {
    this.modalService.open(PriceProposalComponent, {
      // backdrop: "static",
      // keyboard: false,
      size: "lg"
    });
  }
//Ag grid code
  


var gridOptions = {
  rowData: getRowData(),

  columnDefs: [
    {
      headerName: 'Set Filter Column',
      field: 'col1',
      filter: 'agSetColumnFilter',
      editable: true,
      flex: 1,
    },
  ],
  sideBar: ['filters'],
  onFirstDataRendered: onFirstDataRendered,
};

function getRowData() {
  return [
    { col1: 'A' },
    { col1: 'A' },
    { col1: 'D' },
    { col1: 'B' },
    { col1: 'C' },
    { col1: 'C' },
  ];
}


function updateFirstRow() {
  var firstRow = gridOptions.api.getDisplayedRowAtIndex(0);
  console.document.add(firstRow);
  if (firstRow) {
    var firstRowData = firstRow.data;
    firstRowData['col1'] += 'X';
     console.document.add(firstRow);
    gridOptions.api.applyTransaction({ update: [firstRowData] });
  }
}

function addDRow() {
  gridOptions.api.applyTransaction({ add: [{ col1: 'D' }] });
}

function reset() {
  gridOptions.api.setRowData(getRowData());
}

function onFirstDataRendered(params) {
  params.api.getToolPanelInstance('filters').expandFilters();
}

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', function () {
  var gridDiv = document.querySelector('#myGrid');
  new agGrid.Grid(gridDiv, gridOptions);
});

//Ag grid code end
}
