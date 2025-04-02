import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ImageLoaderComponent } from "@components/ui/image-loader/image-loader.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@Component({
  selector: "app-about",
  imports: [ImageLoaderComponent, FontAwesomeModule, RouterModule],
  templateUrl: "./about.component.html",
  styleUrl: "./about.component.scss",
})
export class AboutComponent {}
