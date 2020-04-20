import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class GeneralStatsService {
  url = "https://corona-virus-stats.herokuapp.com/api/v1/cases/general-stats";
  constructor(private http: HttpClient) {}

  getGeneralStats() {
    return this.http.get(this.url);
  }
}
