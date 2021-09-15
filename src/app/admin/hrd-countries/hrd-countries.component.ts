import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Component, ErrorHandler, Input, OnInit, Output, TemplateRef, ViewChild} from '@angular/core';
import { Observable, OperatorFunction } from 'rxjs';
import { ProposalService } from 'src/app/proposal.service';
//import { EditHrdComponentRenderer } from './editHrdCountry.component';
import { ICellRendererParams } from "ag-grid-community";
import * as EventEmitter from 'events';
import { catchError, debounceTime, distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';
import { noop, Observer, of } from 'rxjs';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead';
import { AdminService } from '../admin.service';
import { Identifiers } from '@angular/compiler';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'editHrd-component',
  template: `<span>
                  <button type="button" class="btn btn-sm" (click)="editClicked()" style="border:2px;margin-right:10px;color:#433163"><i class="fas fa-edit"></i>  Edit</button>
                  <button type="button" class="btn btn-outline-secondary btn-sm" (click)="deleteClicked()" style="border:2px;"><i class="fas fa-times"></i>    Delete</button>

            </span>`
})
export class EditHrdComponentRenderer {
  private objHrdCountriesComponent: HrdCountriesComponent;
  constructor(private objhrdCountriesComponent: HrdCountriesComponent, private adminService: AdminService,private toastr:ToastrService) {
    this.objHrdCountriesComponent = objhrdCountriesComponent;
  }
  @Output() rowToEdit = new EventEmitter();
  public cellValue: string;
  params: ICellRendererParams;
  rowDataSelected: CountryData;
  agInit(params: ICellRendererParams): void {
    this.cellValue = params.value;
    this.params = params;
  }
  editClicked() {
    console.log(this.params.data);
    this.rowToEdit.emit(this.params.data);
    this.objHrdCountriesComponent.setHRDEditDiv(this.params.data);
  }
  deleteClicked() {
    console.log("delete clicked");
    this.rowDataSelected = Object.assign(new CountryData(), this.params.data);
    var obj = {
      "Id": this.rowDataSelected.id,
      "Name": this.rowDataSelected.name,
      "IsActive": this.rowDataSelected.isActive,
      "IsHRD": false,
      "IsSirius": this.rowDataSelected.isSirius,
      "IsPricing": this.rowDataSelected.isPricing,
      "Discount": this.rowDataSelected.discount,
      "DealAmount": this.rowDataSelected.dealAmount,
      "HRDDAmendments": this.rowDataSelected.hrddAmendments,
      "HRDDCondition": this.rowDataSelected.hrddCondition,
      "ModifiedBy": "v-nagarjunaa",
      "Action": "Delete"

    }
    this.adminService.saveHRDCountry(obj).subscribe(result => {
      this.toastr.success("Country "+ this.rowDataSelected.name+ " deleted successfully!");
      this.objHrdCountriesComponent.loadGrid();
    });
  }

}

@Component({
  selector: 'app-hrd-countries',
  templateUrl: './hrd-countries.component.html',
  styleUrls: ['./hrd-countries.component.css']
})

export class HrdCountriesComponent implements OnInit {
  showdiv: boolean;
  showAddDiv: boolean;

  search: string;
  addHRDsearch: string;
  suggestions$: Observable<string[]>;
  addHRDSuggestions$: Observable<string[]>;
  errorMessage: string;
  showModalBox:boolean=false;
  constructor(private proposalService: ProposalService, private adminService: AdminService, private http: HttpClient, private toastr: ToastrService, private modalService: NgbModal) { }

  rowData: CountryData[];
  rowDataSelected: CountryData;
  ictryData: ICountryData;
  editCountryData: any;
  public selectedCell: ICellRendererParams;

  //Edit HRD Model fields
  name: string;
  dealAmount: number;
  discount: number;
  hrddAmendmentArray: string[];
  trigger: string;
  countries: CountryData[];
  countryName: string;
  //public model: any;
  result: any;
  selected: string;

  //Add HRD Model fields
  addHRDSelectedCountry: string;
  addHRDDealAmount: number;
  addHRDDiscount: number;
  addHRDAmendmentArray: string[] = [];
  addCtryValidation: boolean = false;
  addHRDTrigger: string;
  isDisabled: boolean = true;
  popupMsg: string;
  myForm: FormGroup;
  myEditForm: FormGroup;
  ngOnInit(): void {
    this.showdiv = false;
    this.showAddDiv = false;
    this.loadGrid();
    this.myForm = new FormGroup({
      'formCountry': new FormControl(null, Validators.required),
      'formDealAmount': new FormControl({ value: '', disabled: false }),
      'formDiscount': new FormControl({ value: '', disabled: false }),
      'formAmendments': new FormControl({ value: '', disabled: false }),
      'formTrigger': new FormControl({ value: '', disabled: false })
    });
    this.myEditForm = new FormGroup({
      'formEditCountry': new FormControl({ value: '', disabled: false }),
      'formEditDealAmount': new FormControl({ value: '', disabled: false }),
      'formEditDiscount': new FormControl({ value: '', disabled: false }),
      'formEditAmendments': new FormControl({ value: '', disabled: false }),
      'formEditTrigger': new FormControl({ value: '', disabled: false })
    });
    this.suggestions$ = new Observable((observer: Observer<string>) => {
      observer.next(this.search);
    }).pipe(
      switchMap((query: string) => {
        if (query) {
          console.log(query);
              return this.adminService.getAmendmentByCode( query).pipe(
              map((data: any) => data.result),
              tap(() => noop, err => {
                // in case of http error
                this.errorMessage = err && err.message || 'Something goes wrong';
              })
            );
        }
        return of([]);
      })
    );

    this.addHRDSuggestions$ = new Observable((observer: Observer<string>) => {
      observer.next(this.addHRDsearch);
    }).pipe(
      switchMap((query: string) => {
        if (query) {
          return this.adminService.getAmendmentByCode( query).pipe(
              map((data: any) => data.result),
              tap(() => noop, err => {
                // in case of http error
                this.errorMessage = err && err.message || 'Something goes wrong';
              })
            );
        }
        return of([]);
      })
    );
    this.getCountries();

  }

  columnDefs = [
    { headerName: "Country Name", field: 'name', sortable: true, filter: true, resizable: true, width: 200 },
    { headerName: "Action", field: 'id', cellRenderer: 'editHrdCountry', resizable: true, width: 225 }
  ];
  frameworkComponents = {
    editHrdCountry: EditHrdComponentRenderer
  };

  @ViewChild('content1') templateRef: TemplateRef<any>;
  

  getAmendments(search) {
    return this.adminService.getAmendment(search).subscribe(data => console.log(data));
  }
  getCountries() {
    this.adminService.getCountries().subscribe((data: CountryData[]) => {
      this.countries = data.filter(a => a.isHRD == false);
    });
  }

  onSelect(event: TypeaheadMatch): void {
    console.log(this.hrddAmendmentArray.push(event.item));
  }

  addHRDOnSelect(event: TypeaheadMatch): void {
    console.log(this.addHRDAmendmentArray.push(event.item));
  }

  loadGrid() {
    var da = this.proposalService.getHrdCountries().subscribe((result: any) => {
      this.rowData = result as CountryData[];
    })
  }

  
  setHRDEditDiv(selectedRow) {
    this.modalService.open(this.templateRef, {
      ariaLabelledBy: 'modal-edit-basic-title'
    }).result.then((result) => {
    });
    this.myEditForm.reset();
    this.isDisabled = true;
    if (selectedRow != null || selectedRow != "undefined") {
      this.rowDataSelected = Object.assign(new CountryData(), selectedRow);
      this.name = this.rowDataSelected.name;
      this.dealAmount = this.rowDataSelected.dealAmount;
      this.discount = this.rowDataSelected.discount;
      this.search = "";
      this.hrddAmendmentArray = this.rowDataSelected.hrddAmendments.split(",");
      this.trigger = this.rowDataSelected.hrddCondition;
      
    } 
    console.log(this.rowDataSelected.hrddCondition);
    this.popupMsg = "Edit HRD Country Info";
    console.log("discount:"+this.discount);
  }

  removeCountryAmendment(c, a) {
    this.hrddAmendmentArray = this.hrddAmendmentArray.filter(item => item !== a);
  }
 
  saveHRD() {
    console.log("edit save started")
    var obj = {
      "Id": this.rowDataSelected.id,
      "Name": this.rowDataSelected.name,
      "IsActive": this.rowDataSelected.isActive,
      "IsHRD": this.rowDataSelected.isHRD,
      "IsSirius": this.rowDataSelected.isSirius,
      "IsPricing": this.rowDataSelected.isPricing,
      "Discount": this.discount,
      "DealAmount": this.dealAmount,
      "HRDDAmendments": this.hrddAmendmentArray.join(","),
      "HRDDCondition": this.trigger,
      "ModifiedBy": "v-nagarjunaa",
      "Action": "Update"
    }
    console.log(obj);
    this.adminService.saveHRDCountry(obj).subscribe(result => {
      this.loadGrid();
      this.toastr.success("Edited HRD country "+this.rowDataSelected.name+" successfully!");
      //this.showdiv = false;
      this.modalService.dismissAll();
      (error) => this.toastr.error("Edited HRD country "+this.rowDataSelected.name+" failed!");
    });
  }

  saveAddHRD() {
    var countryId = this.myForm.get('formCountry').value;
    var selctdCtry = this.countries.filter(a => a.id == countryId)[0] as ICountryData;
      if (countryId != null) {
      this.addCtryValidation = false;
      var obj = {
        "Id": countryId,
        "Name": selctdCtry.name,
        "IsActive": true,
        "IsHRD": true,
        "IsSirius": selctdCtry.isSirius,
        "IsPricing": selctdCtry.isPricing,
        "Discount": this.myForm.get('formDiscount').value,
        "DealAmount": this.myForm.get('formDealAmount').value,
        "HRDDAmendments": this.addHRDAmendmentArray.join(","),
        "HRDDCondition": this.myForm.get('formTrigger').value,
        "ModifiedBy": "v-nagarjunaa",
        "Action": "Add"
      }
      this.adminService.saveHRDCountry(obj).subscribe(result => {
        this.loadGrid();
        this.toastr.success("HRD country "+selctdCtry.name+" added successfully!");
        this.modalService.dismissAll();
        (error) => {
          this.toastr.error("HRD country "+selctdCtry.name+" failed to add!");
          this.modalService.dismissAll();
        }
      });
    }
    else {
      this.addCtryValidation = true;
    }
  }

 
  addHRDCtry(content) {
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title'
    }).result.then((result) => {
      console.log("Closed");
    })
    this.isDisabled = false;
    this.popupMsg = "Add New HRD Country";
    this.myForm.reset();
    this.addHRDDealAmount = 0;
    this.addHRDDiscount = 0;
    this.addHRDAmendmentArray = [];
    //this.addCtryValidation: boolean = false;
    this.addHRDTrigger = "";
    this.addHRDsearch = "";
  }  

}


export class CountryData {
  createdBy: string;
  dateCreated: string;
  dateModified: Date;

  dealAmount: number;
  discount: number;
  hrddAmendments: string;

  hrddCondition: string;
  id: string;
  isActive: boolean;

  isHRD: boolean;
  isPricing: boolean;
  isSirius: boolean;

  modifiedBy: string;
  name: string;
}
export interface ICountryData {
  createdBy: string;
  dateCreated: string;
  dateModified: Date;

  dealAmount: number;
  discount: number;
  hrddAmendments: string;

  hrddCondition: string;
  id: string;
  isActive: boolean;

  isHRD: boolean;
  isPricing: boolean;
  isSirius: boolean;

  modifiedBy: string;
  name: string;
}
