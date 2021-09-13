import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AgRendererComponent } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { ToastrService } from 'ngx-toastr';
import { ProposalService } from 'src/app/proposal.service';
import { AdminService } from '../admin.service';


@Component({
  selector: 'addAmendCode-component',
  template: `<span>
                  <button type="button" class="btn btn-sm" (click)="editClicked()" style="border:2px;margin-right:10px;color:#433163"><i class="fas fa-times"></i>  Delete</button>
            </span>`
})

export class EditSiriusRenderer implements AgRendererComponent {

  public params: ICellRendererParams;
  agInit(params: ICellRendererParams) {
    this.params = params;
  }
  editClicked() {
    console.log(this.params.data);
    this.params.context.componentParent.deleteSirius(this.params.data);
  }
  refresh(): boolean {
    return false;
  }
}

@Component({
  selector: 'app-sirius-countries',
  templateUrl: './sirius-countries.component.html',
  styleUrls: ['./sirius-countries.component.css']
})
export class SiriusCountriesComponent implements OnInit {

  siriusCountriesData: CountryData[];

  nonSirius: any[];
  context: any;
  AddNewForm: boolean;
  // myForm2: FormGroup;
  addSiriusSelectedCountry: string;
  selectedCtry: CountryData;
  errVal: boolean;
  columnDefs = [
    { headerName: "Country Name", field: 'name', sortable: true, filter: true, resizable: true, width: 200 },
    { headerName: "Action", field: 'id', cellRenderer: 'editSiriusCountry', resizable: true, width: 220 }
  ];
  frameworkComponents = {
    editSiriusCountry: EditSiriusRenderer
  };

  constructor(private proposalService: ProposalService, private adminService: AdminService, private toastr: ToastrService, private modalService: NgbModal) {
    this.context = { componentParent: this };
  }

  ngOnInit(): void {
    this.loadGrid();
    this.loadSiriusCountries()
    // this.myForm2 = new FormGroup({
    //   'formCountry': new FormControl(null, Validators.required)
    // });


  }
  loadSiriusCountries() {
    var data = this.proposalService.getHrdCountries().subscribe((result: any) => {
      //console.log((result as CountryData[]).filter(a => a.isSirius == true));
      this.nonSirius = (result as CountryData[]).filter(a => a.isSirius == false);
      //console.log("non siri", this.nonSirius);

      //console.log(this.myForm2);
    });
  }

  addSiriusCountry() {


    // this.myForm2.setValue(
    //   {
    //     formCountry: 2,
    //   }
    // )

    this.AddNewForm = true;
    // this.modalService.open(content, {
    //   ariaLabelledBy: 'modal-basic-title'
    // }).result.then((result) => {
    //   console.log("Closed");
    // })
  }


  loadGrid() {
    var da = this.proposalService.getHrdCountries().subscribe((result: any) => {
      //console.log((result as CountryData[]).filter(a => a.isSirius == true));
      this.siriusCountriesData = (result as CountryData[]).filter(a => a.isSirius == true);
    })
  }
  deleteSirius(selectedCtry) {
    var deleteSiriusObj = {
      "Id": selectedCtry.id,
      "Name": selectedCtry.name,
      "IsActive": selectedCtry.isActive,
      "IsHRD": selectedCtry.isHRD,
      "IsSirius": false,
      "IsPricing": selectedCtry.isPricing,
      "Discount": selectedCtry.discount,
      "DealAmount": selectedCtry.dealAmount,
      "HRDDAmendments": selectedCtry.hrddAmendments,
      "HRDDCondition": selectedCtry.hrddCondition,
      "ModifiedBy": "v-nagarjunaa",
      "Action": "Delete"
    }
    //console.log("inside delete sirius", selectedCtry);
    this.adminService.saveHRDCountry(deleteSiriusObj).subscribe(result => {
     // console.log(result)
      this.toastr.success("Sirius Country " + selectedCtry.name + " deleted successfully!");
      this.loadGrid();
      this.loadSiriusCountries();
    });
  }
  countrySelected(event) {
    if (event) {
      this.errVal = false;
    } else {
      this.errVal = true;
    }
    //console.log(event);
  }

  addNewSiriusCountry() {
    //var v = this.myForm2.get('formCountry').value;
    //console.log("addNewSiriusCountry:", this.addSiriusSelectedCountry);
    this.selectedCtry = this.nonSirius.filter(a => a.id == this.addSiriusSelectedCountry)[0];
    //console.log(this.selectedCtry);
    if (this.selectedCtry) {
      this.errVal = false;
      var addNewSiriusObj = {
        "Id": this.selectedCtry.id,
        "Name": this.selectedCtry.name,
        "IsActive": this.selectedCtry.isActive,
        "IsHRD": this.selectedCtry.isHRD,
        "IsSirius": true,
        "IsPricing": this.selectedCtry.isPricing,
        "Discount": this.selectedCtry.discount,
        "DealAmount": this.selectedCtry.dealAmount,
        "HRDDAmendments": this.selectedCtry.hrddAmendments,
        "HRDDCondition": this.selectedCtry.hrddCondition,
        "ModifiedBy": "v-nagarjunaa",
        "Action": "Delete"
      }
      this.adminService.updateSiriusCountry(addNewSiriusObj).subscribe((data: any) => {
        this.modalService.dismissAll();
        this.toastr.success("Sirius country " + this.selectedCtry.name + " added successfully!");
        this.loadGrid();
        this.loadSiriusCountries();
        this.addSiriusSelectedCountry = "";
      });
    }
    else {
      this.errVal = true;
    }
  }
  btnCancelClick() {
    this.AddNewForm = false;
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
