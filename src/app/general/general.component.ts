import { Component, OnInit } from "@angular/core";
import { GeneralStatsService } from "../general-stats.service";

@Component({
  selector: "app-general",
  templateUrl: "./general.component.html",
  styleUrls: ["./general.component.css"],
})
export class GeneralComponent implements OnInit {
  data: any;
  constructor(private generaData: GeneralStatsService) {}

  ngOnInit() {
    this.showData();
  }

  showData() {
    this.generaData.getGeneralStats().subscribe((data) => {
      this.data = data;
      console.log(this.data);
    });
  }
}
