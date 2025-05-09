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
    library.addIcons(faUserClock);
    library.addIcons(faGears);
    library.addIcons(faPeopleGroup);
    library.addIcons(faEarListen);
    library.addIcons(faHandshakeAngle);
    library.addIcons(faChevronUp);
    library.addIcons(faChevronDown);
    library.addIcons(faObjectGroup);
    library.addIcons(faArrowPointer);
    library.addIcons(faDownload);
    library.addIcons(faHouseUser);
    library.addIcons(faVial);
    library.addIcons(faFolderOpen);
    library.addIcons(faCircleQuestion);
    library.addIcons(faLinkedin);
    library.addIcons(faDiscord);
    library.addIcons(faSteam);
    library.addIcons(faLeaf);
    library.addIcons(faQuoteLeft);
    library.addIcons(faQuoteRight);
    library.addIcons(faCircleXmark);
    library.addIcons(faCircleInfo);
    library.addIcons(faFileCode);
    library.addIcons(faAnglesDown);
    library.addIcons(faSeedling);
    library.addIcons(faArrowUp19);
    library.addIcons(faArrowDown19);
    library.addIcons(faAt);
    library.addIcons(faEnvelope);
  }
}
