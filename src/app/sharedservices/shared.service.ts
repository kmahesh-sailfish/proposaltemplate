import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SharedService {
  private proposalObs$: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor() {}

  getproposalObs(): Observable<any> {
    return this.proposalObs$.asObservable();
  }

  setproposalObs(data: any) {
    this.proposalObs$.next(data);
  }
}
