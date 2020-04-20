import { Component, OnInit } from "@angular/core";
import { CountryStatsService } from "../country-stats.service";
import { CountryInformationService } from "../country-information.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class SearchComponent implements OnInit {
  country: any;
  constructor(
    private countryRequest: CountryStatsService,
    private countryInfo: CountryInformationService
  ) {}

  ngOnInit() {}

  getCountryData() {
    this.countryRequest.getCountryData(this.country).subscribe((data) => {
      this.updateCountryInformation(data);
    });
  }

  updateCountryInformation(data) {
    this.countryInfo.getCountryData(data);
  }
}
