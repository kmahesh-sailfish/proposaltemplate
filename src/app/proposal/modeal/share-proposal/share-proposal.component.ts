import { Component, OnInit } from "@angular/core";
import { NgForm, FormGroup, FormControl, Validators } from "@angular/forms";

import { Router } from "@angular/router";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
@Component({
  selector: "app-share-proposal",
  templateUrl: "./share-proposal.component.html",
  styleUrls: ["./share-proposal.component.css"]
})
export class ShareProposalComponent implements OnInit {
  IsValidShareForm: boolean = false;
  myForm: FormGroup;
  shareProposalValidationMessage: any;
  constructor(private router: Router, private activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    this.loadForm();
  }
  checkField() {
    var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;

    if (this.myForm.get("flexRadioDefault").value == "microsoft") {
      if (
        this.myForm.get("userEmail").value != "" &&
        this.myForm.get("userEmail").value.indexOf("@") == -1
      ) {
        this.IsValidShareForm = true;
        this.shareProposalValidationMessage = "";
      } else if (this.myForm.get("userEmail").value == "") {
        this.IsValidShareForm = false;
        this.shareProposalValidationMessage = "";
      } else {
        this.IsValidShareForm = false;
        this.shareProposalValidationMessage =
          'Please provide user\'s alias without "@microsoft.com"';
      }
    } else {
      if (pattern.test(this.myForm.get("userEmail").value)) {
        if (
          this.myForm.get("userEmail").value.indexOf("@microsoft.com") == -1
        ) {
          this.shareProposalValidationMessage = "";
          this.IsValidShareForm = true;
        } else {
          this.IsValidShareForm = false;
          this.shareProposalValidationMessage =
            "It looks like Microsoft User. Please change user type.";
        }
      } else if (this.myForm.get("userEmail").value == "") {
        this.IsValidShareForm = false;
        this.shareProposalValidationMessage = "";
      } else {
        this.IsValidShareForm = false;
        this.shareProposalValidationMessage =
          "Please provide user's complete email address";
      }
    }
  }
  handleChange(event) {
    this.checkField();
  }
  onSubmit() {
    this.activeModal.close();
  }
  closeCross() {
    this.activeModal.close();
  }
  loadForm() {
    let patter = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
    this.myForm = new FormGroup({
      flexRadioDefault: new FormControl("microsoft", Validators.required),
      userEmail: new FormControl("", [Validators.required])
    });
  }
}
