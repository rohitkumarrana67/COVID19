import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CountryInformationService {
  private content = new BehaviorSubject<any>([]);
  public shareData = this.content.asObservable();
  constructor() {}

  getCountryData(data) {
    this.content.next(data);
  }
}
