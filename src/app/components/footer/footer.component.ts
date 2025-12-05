import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ImageLoaderComponent } from "@components/ui/image-loader/image-loader.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@Component({
  selector: "app-footer",
  imports: [FontAwesomeModule, RouterModule, ImageLoaderComponent],
  templateUrl: "./footer.component.html",
  styleUrl: "./footer.component.scss",
})
export class FooterComponent {
  emailAddress: string = "contact@toxykaubleu.fr";
}
