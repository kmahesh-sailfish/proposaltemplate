import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
  providedIn: "root"
})

export class AdminService {
  constructor(private http: HttpClient) {

  }
  getAmendment(amendcode) {
    return this.http.get<Observable<string>>(environment.API_URL + "Amendment/" + "GetAmendments/" + amendcode);
  }
  getAmendmentByCode(amendcode) {
    return this.http.get<any>(environment.API_URL + "Amendment/" + "GetAmendments/" + amendcode);
  }
  saveHRDCountry(obj) {
    return this.http.post(environment.API_URL + "Proposal/" + "UpdateCountry", obj);
  }
  getCountries() {
    return this.http.get<any>(environment.API_URL + "App/" + "GetCountries");
  }

  getAmendmentInfo() {
    return this.http.get(environment.API_URL + "Amendment/" + "GetAmendmentsInfo");
  }
  addAmendmentInfo(obj) {
    return this.http.post(environment.API_URL + "Amendment/" + "AddAmendmentInfo", obj);
  }
  updateAmendmentInfo(obj) {
    return this.http.post(environment.API_URL + "Amendment/" + "UpdateAmendmentInfo", obj);
  }
  getAmendmentBucketInfo(){
    return this.http.get(environment.API_URL + "Amendment/" +"GetAmendmentBucketsInfo");
  }
  updateSiriusCountry(obj) {
    return this.http.post(environment.API_URL + "Proposal/" + "UpdateCountry", obj);
  }


}
