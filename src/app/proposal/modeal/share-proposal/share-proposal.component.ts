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
  constructor(private router: Router,
   private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.loadForm();
  }
  handleChange(event) {
    console.log("thi", this.myForm.get("flexRadioDefault").value);
  }
  onSubmit() {
    this.router.navigate(["activeproposal/"]);
    this.activeModal.close();
  }
  loadForm() {
    this.myForm = new FormGroup({
      flexRadioDefault: new FormControl("microsoft", Validators.required),
      userEmail: new FormControl("", Validators.required)
    });
  }
}
