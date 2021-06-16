import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { ProposalService } from 'src/app/proposal.service';
//import { EditHrdComponentRenderer } from './editHrdCountry.component';
import {ICellRendererParams} from "ag-grid-community";
import * as EventEmitter from 'events';

@Component({
  selector:'editHrd-component',
  template:`<span>
                  <button (click)="editClicked()" style="border:2px"> Edit</button>
                  <button (click)="deleteClicked()" style="border:2px;padding-left:5px"> Delete</button>

            </span>`
})
export class EditHrdComponentRenderer{
  private objHrdCountriesComponent:HrdCountriesComponent;
  constructor(private objhrdCountriesComponent:HrdCountriesComponent){
    this.objHrdCountriesComponent=objhrdCountriesComponent;
  }
  @Output() rowToEdit=new EventEmitter();
  public cellValue:string;
  params:ICellRendererParams;
  agInit(params:ICellRendererParams):void{
    this.cellValue=params.value;
    this.params=params;
  }
  editClicked(){
    console.log(this.params.data);
    this.rowToEdit.emit(this.params.data);
this.objHrdCountriesComponent.setHRDEditDiv(this.params.data);
  }
  deleteClicked(){
    alert("delete clicked");
  }

}

@Component({
  selector: 'app-hrd-countries',
  templateUrl: './hrd-countries.component.html',
  styleUrls: ['./hrd-countries.component.css']
})
export class HrdCountriesComponent implements OnInit {
  @Input() showdiv:boolean;

  constructor(private proposalService:ProposalService,private http:HttpClient) { }
  //rowData!:Observable<Object>;
  rowData: CountryData[];
  public selectedCell:ICellRendererParams;
  // hello:string="Naga";

    ngOnInit(): void {
        this.showdiv=true;
      //this.rowData2 = this.http.get<any[]>('https://www.ag-grid.com/example-assets/small-row-data.json');
        var da= this.proposalService.getHrdCountries().subscribe((result:any)=>{
        console.log(result);
        this.rowData=result as CountryData[];

        })
    }
    columnDefs=[
      // { field: 'createdBy' },
      // { field: 'dateCreated' },
      // { field: 'dateModified' },
      // { field: 'dealAmount' },
      // { field: 'discount' },
      // { field: 'hrddAmendments' },
      // { field: 'hrddCondition' },
      // { field: 'id' },
      // { field: 'isActive' },
      // { field: 'isHRD' },
      // { field: 'isPricing' },
      // { field: 'isSirius' },
      // { field: 'modifiedBy' },
      { headerName:"Country Name", field: 'name',sortable: true, filter: true },
      { headerName: "Action",field:'id', cellRenderer:'editHrdCountry'}
    ];
     frameworkComponents={
      editHrdCountry:EditHrdComponentRenderer
     };

     setHRDEditDiv(obj){
       this.selectedCell=obj[0];
        console.log("inside sethr",this.selectedCell);
     }

}


export class CountryData{
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

  modifiedBy:string;
  name:string;
}
