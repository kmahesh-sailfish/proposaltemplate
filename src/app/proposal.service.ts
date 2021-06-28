import { Injectable } from "@angular/core";
import { environment } from "../environments/environment";
import { catchError } from "rxjs/internal/operators";

import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ProposalService {
  constructor(private http: HttpClient) {}
  // proposal overview .................................
  createProposal(obj) {
    return this.http.post(environment.API_URL + "Proposal/CreateProposal", obj);
  }
  getProposal(obj) {
    return this.http.get(
      environment.API_URL + "Proposal/" + "GetProposalById",
      { params: obj }
    );
  }
  updateProposal(obj) {
    return this.http.post(
      environment.API_URL + "Proposal/" + "UpdateProposal",
      obj
    );
  }
  deleteAmendate(obj) {
    
    return this.http.get(
      environment.API_URL + "Proposal/" + "DeleteAmendment/", obj
    );
  }
  saveMetadata(obj) {
     return this.http.post(
      environment.API_URL + "Amendment/" + "SaveAmendments", obj
    );
  }
  //-------------------- CTM FooterCode
  getCTMFootercode() {
    return this.http.get(
      environment.API_URL + "Proposal/" + "GetCTMCategories"
    );
  }
  getLanguage() {
    return this.http.get(environment.API_URL + "Proposal/" + "GetLanguages");
  }
  getLrdCountries() {
    
    return this.http.get("https://amendmentappdevapi.azurewebsites.net/api/App/GetLrdCountries");
  }
  searchAmendement(searchTerm) {
    return this.http.get(
      environment.API_URL + "Amendment/" + "GetVlDocAmendmentData/" + searchTerm
    );
  }
  //--------------------------------------------

  // create proposal ---------------
  proposalExist(Id) {
    return this.http.get(
      environment.API_URL + "Proposal/" + "IsProposalExists/" + Id
    );
  }
  getPricingCountry() {
    return this.http.get(environment.API_URL + "App/" + "GetPricingCountries");
  }
  getHrdCountries() {
    return this.http.get(environment.API_URL + "App/" + "GetHrdCountries");
  }
}
