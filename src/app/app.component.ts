import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import {
  faClock,
  faClose,
  faEllipsis,
  faFilterCircleXmark,
  faFlagCheckered,
  faGlobe,
  faList,
  faMapLocationDot,
  faToolbox,
  faUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FontAwesomeModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'Portfolio';

  constructor(library: FaIconLibrary) {
    library.addIcons(faClose);
    library.addIcons(faClock);
    library.addIcons(faToolbox);
    library.addIcons(faEllipsis);
    library.addIcons(faList);
    library.addIcons(faFilterCircleXmark);
    library.addIcons(faGithub);
    library.addIcons(faMapLocationDot);
    library.addIcons(faGlobe);
    library.addIcons(faFlagCheckered);
    library.addIcons(faUpRightFromSquare);
  }
}
