import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-active-conformation',
  templateUrl: './active-conformation.component.html',
  styleUrls: ['./active-conformation.component.css']
})
export class ActiveConformationComponent implements OnInit {
  public labelMessage: any;
  
  constructor( public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }
  close(){
    this.activeModal.close(false);
  }
  submitConfirm(){
    this.activeModal.close(true);
  }
}
