import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-conformation',
  templateUrl: './conformation.component.html',
  styleUrls: ['./conformation.component.css']
})
export class ConformationComponent implements OnInit {
  public rowObj:any;
  constructor(
    public activeModal: NgbActiveModal,
  ) { }

  ngOnInit(): void {
  }
  submitConfirm(){
    if (this.rowObj["labelMessage"] == "Share"){
      console.log(this.rowObj);
    }else if(this.rowObj["labelMessage"] == "Delete"){
      console.log(this.rowObj,'deleted')
    }else{
      console.log(this.rowObj,'stopsahre');
    }
  }
  
}
