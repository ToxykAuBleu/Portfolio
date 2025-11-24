import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { NavigationEnd, Router, RouterModule } from "@angular/router";
import { ImageLoaderComponent } from "@components/ui/image-loader/image-loader.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { environment } from "../../../../environment";

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
export class HeaderComponent {
  currentRoute: string = "";
  showCVButton: boolean = environment.showCV;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }

  scrollToFooter() {
    window.scrollTo(0, document.body.scrollHeight);
  }
}
