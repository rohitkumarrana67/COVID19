import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { GeneralComponent } from "./general/general.component";
import { SearchComponent } from "./search/search.component";
import { CountryComponent } from "./country/country.component";
import { GeneralStatsService } from "./general-stats.service";
import { CountryStatsService } from "./country-stats.service";
import { CountryInformationService } from "./country-information.service";

@NgModule({
  declarations: [
    AppComponent,
    GeneralComponent,
    SearchComponent,
    CountryComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [
    GeneralStatsService,
    CountryStatsService,
    CountryInformationService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
