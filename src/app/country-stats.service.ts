import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class CountryStatsService {
  url = "https://corona.lmao.ninja/countries/";
  constructor(private http: HttpClient) {}

  getCountryData(country) {
    return this.http.get(this.url + country);
  }
}
