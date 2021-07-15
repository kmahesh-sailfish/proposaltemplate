import { Injectable } from "@angular/core";
import { environment } from "../environments/environment";
import { catchError } from "rxjs/internal/operators";

import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { map } from "rxjs/operators";
import { ParamMap } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class ProposalService {
  constructor(private http: HttpClient) {}
  // proposal overview .................................
  createProposal(obj) {
    return this.http
      .post(environment.API_URL + "Proposal/CreateProposal", obj)
      .pipe(
        map((res: any) => {
          return res["_sourceObject"];
        })
      );
  }
  getProposal(obj) {
    return this.http
      .get(environment.API_URL + "Proposal/" + "GetProposalById", {
        params: obj
      })
      .pipe(
        map((res: any) => {
          return res["result"]["_sourceObject"];
        })
      );
  }
  getProposalCopy(Id) {
    var obj = {};
    // params.set("createdByAlias", "V2Alias");
    // params.set("isSuperUser", "true");
    // params.set("id", Id);
    obj["createdByAlias"] = "V2Alias";
    obj["isSuperUser"] = "true";
    obj["id"] = Id;

    return this.http
      .get(environment.API_URL + "Proposal/" + "GetProposalById", {
        params: obj
      })
      .pipe(
        map((res: any) => {
          return res["result"]["_sourceObject"];
        })
      );
  }
  updateProposal(obj) {
    return this.http
      .post(environment.API_URL + "Proposal/" + "UpdateProposal", obj)
      .pipe(
        map((res: any) => {
          return res["result"];
        })
      );
  }
  deleteAmendate(obj) {
    return this.http
      .post(environment.API_URL + "Proposal/" + "DeleteAmendment", obj)
      .pipe(
        map((res: any) => {
          return res["result"];
        })
      );
  }
  saveMetadata(obj) {
    return this.http
      .post(environment.API_URL + "Amendment/" + "SaveAmendments", obj)
      .pipe(
        map((res: any) => {
          return res["result"];
        })
      );
  }
  //-------------------- CTM FooterCode
  getCTMFootercode() {
    return this.http
      .get(environment.API_URL + "Proposal/" + "GetCTMCategories")
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
  getLanguage() {
    return this.http
      .get(environment.API_URL + "Proposal/" + "GetLanguages")
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
  getLrdCountries() {
    return this.http
      .get(
        "https://amendmentappdevapi.azurewebsites.net/api/App/GetLrdCountries"
      )
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
  searchAmendement(searchTerm) {
    return this.http
      .get(
        environment.API_URL +
          "Amendment/" +
          "GetVlDocAmendmentData/" +
          searchTerm
      )
      .pipe(
        map((res: any) => {
          return res["result"];
        })
      );
  }
  //--------------------------------------------

  // create proposal ---------------
  proposalExist(Id) {
    return this.http
      .get(environment.API_URL + "Proposal/" + "IsProposalExists/" + Id)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
  getPricingCountry() {
    return this.http
      .get(environment.API_URL + "App/" + "GetPricingCountries")
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
  getHrdCountries() {
    return this.http.get(environment.API_URL + "App/" + "GetHrdCountries").pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  saveShareProposal(obj) {
    return this.http
      .post(environment.API_URL + "Proposal/" + "ShareProposal", obj)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
  saveDelegationProposal(obj) {
    return this.http
      .post(environment.API_URL + "Proposal/" + "SaveProposalDelegate", obj)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  //Active proposal
  getActiveProposal() {
    return this.http
      .get(environment.API_URL + "Proposal/" + "GetProposals")
      .pipe(
        map((res: any) => {
          return res["result"];
        })
      );
  }

  actionProposal(obj, message) {
    if (message == "Delete") {
      return this.http
        .post(environment.API_URL + "Proposal/" + "DeleteProposal", obj)
        .pipe(
          map((res: any) => {
            return res["result"];
          })
        );
    } else {
      return this.http
        .post(environment.API_URL + "Proposal/" + "ArchiveProposal", obj)
        .pipe(
          map((res: any) => {
            return res["result"];
          })
        );
    }
  }

  replicateProposal(obj) {
    return this.http
      .post(environment.API_URL + "App/" + "CloneProposal", obj)
      .pipe(
        map((res: any) => {
          return res["result"];
        })
      );
  }
  getamendmentstaticInfo(): any {
    return this.http
      .get(environment.API_URL + "Amendment/" + "GetAmendmentsInfoStaticData")
      .pipe(
        map((res: any) => {
          return res["result"];
        })
      );
  }
  isPricingCountry(lrdCountries, pricingCountry): any {
    if (lrdCountries.length > 0) {
      var result = lrdCountries.filter(function(d) {
        return d == pricingCountry;
      });
      return result && result.length > 0;
    }
    return false;
  }
  updatePricingCountry() {}

  isHRDDCountry(hrddCountries, pricingCountry) {
    if (hrddCountries.length > 0) {
      var result = hrddCountries.filter(function(d) {
        return d == pricingCountry;
      });
      return result && result.length > 0;
    }
    return false;
  }
  hasHRDDAmendments(hrddAmendments, amendments) {
    if (hrddAmendments != undefined && hrddAmendments.length > 0) {
      var result = amendments.filter(function(am) {
        return hrddAmendments.indexOf(am.Code) > -1;
      });
      return result && result.length > 0;
    }
    return false;
  }
  getArchivePage(startRow, endRow) {
    return this.http
      .get(
        environment.API_URL +
          "Proposal/GetProposalsByCount/true/" +
          startRow +
          "/" +
          endRow
      )
      .pipe(
        map((res: any) => {
          return res.result;
        })
      );
  }
  getPagenation(startRow, endRow) {
    return this.http
      .get(
        environment.API_URL +
          "Proposal/GetProposalsByCount/false/" +
          startRow +
          "/" +
          endRow
      )
      .pipe(
        map((res: any) => {
          return res.result;
        })
      );
  }
  getMetadata(id) {
    return this.http
      .get(environment.API_URL + "Amendment/GetVlDocAmendmentData/" + id)
      .pipe(
        map((res: any) => {
          return res.result;
        })
      );
  }
}
