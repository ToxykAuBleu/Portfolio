import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@components/header/header.component';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { faClock, faClose, faToolbox } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FontAwesomeModule],
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
  }
}
