import { Component, OnInit } from "@angular/core";
import { NgForm, FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-share-proposal",
  templateUrl: "./share-proposal.component.html",
  styleUrls: ["./share-proposal.component.css"]
})
export class ShareProposalComponent implements OnInit {
  myForm: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.loadForm();
  }
  handleChange(event) {
    console.log("thi", this.myForm.get("flexRadioDefault").value);
  }
  loadForm() {
    this.myForm = new FormGroup({
      flexRadioDefault: new FormControl("microsoft", Validators.required),
      userEmail: new FormControl("", Validators.required)
    });
  }
}
