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
import { NgxSpinnerService } from "ngx-spinner";
@Injectable({
  providedIn: "root"
})
export class ProposalService {
  constructor(private http: HttpClient, private spiner: NgxSpinnerService) {}
  // proposal overview .................................
  createProposal(obj) {
    this.spiner.show();
    return this.http
      .post(environment.API_URL + "Proposal/CreateProposal", obj)
      .pipe(
        map((res: any) => {
          this.spiner.hide();
          return res["_sourceObject"];
        })
      );
  }
  getProposal(obj) {
    this.spiner.show();
    return this.http
      .get(environment.API_URL + "Proposal/" + "GetProposalById", {
        params: obj
      })
      .pipe(
        map((res: any) => {
          this.spiner.hide();
          return res["result"]["_sourceObject"];
        })
      );
  }
  getProposalCopy(Id) {
    var obj = {};
    // params.set("createdByAlias", "V2Alias");
    // params.set("isSuperUser", "true");
    // params.set("id", Id);
    obj["createdByAlias"] = localStorage.getItem("userAlias");
    obj["isSuperUser"] = "true";
    obj["id"] = Id;
    // this.spiner.show();
    return this.http
      .get(environment.API_URL + "Proposal/" + "GetProposalById", {
        params: obj
      })
      .pipe(
        map((res: any) => {
          //  this.spiner.hide();
          return res["result"]["_sourceObject"];
        })
      );
  }
  updateProposal(obj) {
    return this.http
      .post(environment.API_URL + "Proposal/" + "UpdateProposal", obj)
      .pipe(
        map((res: any) => {
          return res["result"]["_sourceObject"];
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
          return res["result"]["_sourceObject"];
        })
      );
  }
  //-------------------- CTM FooterCode
  getCTMFootercode() {
    return this.http
      .get(environment.API_URL + "Ctm/" + "GetCTMCategories")
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
  getLanguage() {
    return this.http.get(environment.API_URL + "Ctm/" + "GetLanguages").pipe(
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
  searchAmendement(searchTerm, obj?) {
    let params;
    if (obj) {
      params = new HttpParams().set("language", obj);
    } else {
      params = "";
    }

    return this.http
      .get(
        environment.API_URL +
          "Amendment/" +
          "GetVlDocAmendmentData/" +
          searchTerm,
        {
          params: params
        }
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
  multipledocProposal(obj) {
    this.spiner.show();
    return this.http
      .post(environment.API_URL + "Proposal/" + "LinkProposal", obj)
      .pipe(
        map((res: any) => {
          this.spiner.hide();
          return res["result"]["_sourceObject"];
        })
      );
  }
  updatemopetDetails(obj) {
   // this.spiner.show();
    return this.http
      .post(environment.API_URL + "Proposal/" + "UpdateProposalSubmission", obj)
      .pipe(
        map((res: any) => {
        //  this.spiner.hide();
          return res["result"]["_sourceObject"];
        })
      );
  }
  replicateProposal(obj) {
    this.spiner.show();
    return this.http
      .post(environment.API_URL + "Proposal/" + "CloneProposal", obj)
      .pipe(
        map((res: any) => {
          this.spiner.hide();
          return res["_sourceObject"];
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
      var result = lrdCountries.filter(d => {
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
    this.spiner.show();
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
          this.spiner.hide();
          return res.result;
        })
      );
  }

  getcustomeSearch(obj) {
    this.spiner.show();
    return this.http
      .get(environment.API_URL + "Proposal/SearchProposalsByPaging", {
        params: obj
      })
      .pipe(
        map((res: any) => {
          this.spiner.hide();
          return res.result;
        })
      );
  }
  getPagenation(startRow, endRow) {
    this.spiner.show();
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
          this.spiner.hide();
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
  generateDocFile(obj) {
    return this.http
      .get(environment.API_URL + "Amendment/DownloadDocumentById", {
        params: obj
      })
      .pipe(
        map((res: any) => {
          return res.result;
        })
      );
  }
  isDiscountedAmendment(dicountAmendment, amendment) {
    if (dicountAmendment.length > 0) {
      var result = dicountAmendment.filter(function(d) {
        return d.Code == amendment;
      });
      return result;
    }
    return false;
  }
  // getpublicCtmList() {
  //   this.spiner.show();
  //   return this.http.get(environment.API_URL + "Ctm/getPublicCTMFiles").pipe(
  //     map((res: any) => {
  //       this.spiner.hide();
  //       return res.result;
  //     })
  //   );
  // }

  // getprivateCtmList(obj) {
  //   this.spiner.show();
  //   return this.http
  //     .get(environment.API_URL + "/Ctm/getPrivateCTMFiles", {
  //       params: obj
  //     })
  //     .pipe(
  //       map((res: any) => {
  //         this.spiner.hide();
  //         return res.result;
  //       })
  //     );
  // }
  getpublicCtmList(startRow, endRow) {
    this.spiner.show();
    return this.http
      .get(
        environment.API_URL +
          "Ctm/getPublicCTMFiles?pageSize=" +
          endRow +
          "&pageNum=" +
          startRow
      )
      .pipe(
        map((res: any) => {
          this.spiner.hide();
          return res.result;
        })
      );
  }

  getprivateCtmList(startRow, endRow) {
    this.spiner.show();
    return this.http
      .get(
        environment.API_URL +
          "Ctm/getPrivateCTMFiles?pageSize=" +
          endRow +
          "&pageNum=" +
          startRow +
          "&alias=" +
          localStorage.getItem("userAlias")
      )
      .pipe(
        map((res: any) => {
          this.spiner.hide();
          return res.result;
        })
      );
  }

  updateCTMShare(obj) {
    return this.http.put(environment.API_URL + "Ctm/UpdateCtmShare", obj).pipe(
      map((res: any) => {
        return res.result;
      })
    );
  }
  deleteCTM(obj) {
    return this.http
      .get(environment.API_URL + "Ctm/DeleteCTMLibraryFile", {
        params: obj
      })
      .pipe(
        map((res: any) => {
          return res.result;
        })
      );
  }
  downLoadCTM(id) {
    return this.http
      .get(environment.API_URL + "Ctm/DownloadCTMLibraryFile/" + id)
      .pipe(
        map((res: any) => {
          return res.result;
        })
      );
  }
  domainConetent() {
    return this.http.get(environment.API_URL + "App/GetDomainData").pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  updatedomainConetent(obj) {
    return this.http
      .post(environment.API_URL + "App/UpdateUserPreference", obj)
      .pipe(
        map((res: any) => {
          return res["_sourceObject"];
        })
      );
  }
  dashboardDetails(obj) {
    this.spiner.show();
    //URL: api/Proposal/GetRecentProposals?userAlias=v-skarukonda&isSuperUser=true &noOfRecords=20
    return this.http
      .get(environment.API_URL + "Proposal/GetRecentProposals", {
        params: obj
      })
      .pipe(
        map((res: any) => {
          this.spiner.hide();
          return res.result;
        })
      );
  }

  dashboardSearch(searchObj, obj) {
    this.spiner.show();

    return this.http
      .get(
        environment.API_URL + "Proposal/SearchRecentProposals/" + searchObj,
        {
          params: obj
        }
      )
      .pipe(
        map((res: any) => {
          this.spiner.hide();
          return res.result;
        })
      );
  }
  getUserPreferences(userId) {
    return this.http
      .get(environment.API_URL + "App/GetUserPreference/" + userId)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
  getUserDetails(userId) {
    //api/App/GetUserDetails/
    return this.http
      .get(environment.API_URL + "App/GetUserDetails/" + userId)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  deleteMultipleProposals(obj) {
    return this.http
      .post(environment.API_URL + "Proposal/DeleteMultipleProposals", obj)
      .pipe(
        map((res: any) => {
          return res["_sourceObject"];
        })
      );
  }

  archiveMultipleProposals(obj) {
    return this.http
      .post(environment.API_URL + "Proposal/ArchiveMultipleProposals", obj)
      .pipe(
        map((res: any) => {
          return res["_sourceObject"];
        })
      );
  }
  addMopetDetails(obj) {
    return this.http
      .post(environment.API_URL + "Mopet/SubmitToMopet", obj)
      .pipe(
        map((res: any) => {
          return res["_sourceObject"];
        })
      );
  }

  getAllAdvanceDelegations(userId) {
    this.spiner.show();
    return this.http
      .get(
        environment.API_URL + "Delegation/GetAllAdvanceDelegations/" + userId
      )
      .pipe(
        map((res: any) => {
          this.spiner.hide();
          return res.result;
        })
      );
  }

  deleteProposalDelegation(proposalId) {
    return this.http
      .post(
        environment.API_URL +
          "Delegation/DeleteProposalDelegation/" +
          proposalId,
        proposalId
      )
      .pipe(
        map((res: any) => {
          return res["result"];
        })
      );
  }

  deleteDateDelegation(delegationId) {
    return this.http
      .delete(
        environment.API_URL + "Delegation/DeleteDateDelegation/" + delegationId,
        delegationId
      )
      .pipe(
        map((res: any) => {
          return res["result"];
        })
      );
  }

  addDelegation(obj) {
    return this.http
      .post(environment.API_URL + "Delegation/AddDelegation", obj)
      .pipe(
        map((res: any) => {
          return res["_sourceObject"];
        })
      );
  }
  saveCtmtoLib(obj) {
    return this.http.post(environment.API_URL + "Ctm/SaveCTMToLib", obj).pipe(
      map((res: any) => {
        return res["_sourceObject"];
      })
    );
  }
  saveAmendment(obj) {
    return this.http
      .post(environment.API_URL + "Amendment/SaveAmendment", obj)
      .pipe(
        map((res: any) => {
          return res["_sourceObject"];
        })
      );
  }
  
deleteDocument(obj,flag?){
return obj;
}
}

//---------------------------------------------
