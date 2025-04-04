import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { EventType, Router, RouterModule } from "@angular/router";
import { ImageLoaderComponent } from "@components/ui/image-loader/image-loader.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@Component({
  selector: "app-header",
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    ImageLoaderComponent,
  ],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
})
export class HeaderComponent {}
