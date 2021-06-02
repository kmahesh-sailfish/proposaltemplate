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
  updateProposal(obj){   
    return this.http.post(environment.API_URL + "Proposal/"+"UpdateProposal",obj);

  }
  //-------------------- CTM FooterCode
  getCTMFootercode(){
    
    return this.http.get(environment.API_URL + "Proposal/"+"GetCTMCategories");
  }
  getLanguage(){
    return this.http.get(environment.API_URL + "Proposal/"+"GetCTMCategories");
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
  getHrdCountries(){
    return this.http.get(environment.API_URL + "App/" + "GetHrdCountries");
  }
}
