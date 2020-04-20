import { Component, OnInit } from "@angular/core";
import { CountryInformationService } from "../country-information.service";

@Component({
  selector: "app-country",
  templateUrl: "./country.component.html",
  styleUrls: ["./country.component.css"],
})
export class CountryComponent implements OnInit {
  countryData: any;
  constructor(private countryInfo: CountryInformationService) {}

  ngOnInit() {
    this.countryInfo.shareData.subscribe((x) => (this.countryData = x));
    console.log(this.countryData);
  }
}
