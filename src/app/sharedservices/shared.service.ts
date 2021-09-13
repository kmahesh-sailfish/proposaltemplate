import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SharedService {
  private proposalObs$: BehaviorSubject<any> = new BehaviorSubject(null);
  private lardCountries$:BehaviorSubject<any> = new BehaviorSubject(null);
  constructor() {}

  getproposalObs(): Observable<any> {
    return this.proposalObs$.asObservable();
  }

  setproposalObs(data: any) {
    this.proposalObs$.next(data);
  }
  setLardCountries(data:any){
    this.lardCountries$.next(data);
  }
  getLardCountries():Observable<any>{
    return this.lardCountries$.asObservable();
  }
}
