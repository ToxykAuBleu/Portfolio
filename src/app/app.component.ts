import { Component, ViewEncapsulation } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "@components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import {
  FaIconLibrary,
  FontAwesomeModule,
} from "@fortawesome/angular-fontawesome";
import {
  faAnglesDown,
  faArrowDown19,
  faArrowPointer,
  faArrowUp19,
  faAt,
  faChevronDown,
  faChevronUp,
  faCircleInfo,
  faCircleQuestion,
  faCircleXmark,
  faClock,
  faClockRotateLeft,
  faClose,
  faDownload,
  faEarListen,
  faEllipsis,
  faEnvelope,
  faFileCode,
  faFilterCircleXmark,
  faFlagCheckered,
  faFolderOpen,
  faGears,
  faGlobe,
  faHandshakeAngle,
  faHouseUser,
  faLeaf,
  faList,
  faMapLocationDot,
  faObjectGroup,
  faPeopleGroup,
  faQuoteLeft,
  faQuoteRight,
  faSeedling,
  faToolbox,
  faUpRightFromSquare,
  faUserClock,
  faVial,
} from "@fortawesome/free-solid-svg-icons";
import {
  faDiscord,
  faGithub,
  faLinkedin,
  faSteam,
} from "@fortawesome/free-brands-svg-icons";
import { faXmarkCircle } from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, HeaderComponent, FontAwesomeModule, FooterComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = "Portfolio";

  constructor(library: FaIconLibrary) {
    library.addIcons(
      faClose,
      faClock,
      faToolbox,
      faEllipsis,
      faList,
      faFilterCircleXmark,
      faGithub,
      faMapLocationDot,
      faGlobe,
      faFlagCheckered,
      faUpRightFromSquare,
      faUserClock,
      faGears,
      faPeopleGroup,
      faEarListen,
      faHandshakeAngle,
      faChevronUp,
      faChevronDown,
      faObjectGroup,
      faArrowPointer,
      faDownload,
      faHouseUser,
      faVial,
      faFolderOpen,
      faCircleQuestion,
      faLinkedin,
      faDiscord,
      faSteam,
      faLeaf,
      faQuoteLeft,
      faQuoteRight,
      faCircleXmark,
      faCircleInfo,
      faFileCode,
      faAnglesDown,
      faSeedling,
      faArrowUp19,
      faArrowDown19,
      faAt,
      faEnvelope,
      faXmarkCircle,
      faClockRotateLeft,
    );
  }
}
