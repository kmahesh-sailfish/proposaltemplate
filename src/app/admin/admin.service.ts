import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
//import { UUID } from 'angular2-uuid';

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

  getAlerts() {
    return this.http
    .get(environment.API_URL + "Admin/" + "GetAlerts")    
  }
  addAlert(obj) {
    return this.http.post(environment.API_URL + "Admin/" + "AddOrUpdateAlert", obj);
  }
  getApprovers() {
    // console.log("external users");
    // var result = this.getExternalUsers();
    // console.log("Ext Users:"+result.result._sourceObject);
    return this.http
    .get(environment.API_URL + "Admin/" + "GetApprovers")    
  }
  addApprover(obj) {
    return this.http.post(environment.API_URL + "Admin/" + "AddApproverInfo", obj);
  }
  
  deleteApprover(uniqueId){
    console.log(uniqueId,'uniqueId')
//     const opts = { params: new HttpParams({fromString: "uniqueId="+uniqueId,}) };
// console.log(opts);
var obj={
  "uniqueId": uniqueId
  }
   // console.log("input   "+uniqueId.UUID());
    return this.http.post(environment.API_URL + "Admin/" + "DeleteApprover", obj);
  }

  getExternalUsers() 
  {
    console.log("getting external users");    
   const opts = { params: new HttpParams({fromString: "isExternal="+true}) };
    return this.http
    .get(environment.API_URL + "Admin/" + "GetUsers", opts)    
  }
}
