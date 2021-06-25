import { Component, OnInit } from "@angular/core";
import { NgForm, FormGroup, FormControl, Validators } from "@angular/forms";

import { Router } from "@angular/router";
import {
  
  NgbActiveModal
} from "@ng-bootstrap/ng-bootstrap";
@Component({
  selector: "app-share-proposal",
  templateUrl: "./share-proposal.component.html",
  styleUrls: ["./share-proposal.component.css"]
})
export class ShareProposalComponent implements OnInit {
  myForm: FormGroup;
  emailErrorMessage:any
  constructor(private router: Router,
   private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.loadForm();
  }
  checkField(){
    if(this.myForm.get('flexRadioDefault').value == 'microsoft' && 
    this.myForm.get('userEmail').value =="" ){
      this.emailErrorMessage="'Please provide user's alias without \"@microsoft.com\'";
    }else{
      this.emailErrorMessage="It looks like Microsoft User. Please change user type";
    }
  }
  handleChange(event) {
    console.log("thi", this.myForm.get("flexRadioDefault").value);
    // if(this.myForm.get("flexRadioDefault").value){

    // }else{

    // }
  }
  onSubmit() {
   // this.router.navigate(["activeproposal/"]);
    this.activeModal.close();
  }
  loadForm() {
    let patter = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'
    this.myForm = new FormGroup({
      flexRadioDefault: new FormControl("microsoft", Validators.required),
      userEmail: new FormControl("", [Validators.required,Validators.pattern(patter)])
    });
  }
}
