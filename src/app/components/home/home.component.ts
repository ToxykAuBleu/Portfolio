import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { MatTooltipModule } from "@angular/material/tooltip";
import { RouterModule } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@Component({
  selector: "app-home",
  imports: [CommonModule, FontAwesomeModule, RouterModule, MatTooltipModule],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent {}
