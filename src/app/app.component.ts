import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import {
  FaIconLibrary,
  FontAwesomeModule,
} from "@fortawesome/angular-fontawesome";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, FontAwesomeModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "Portfolio";

  constructor(library: FaIconLibrary) {
    library.addIcons();
  }
}
