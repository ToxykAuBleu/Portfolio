import { CommonModule, isPlatformBrowser } from "@angular/common";
import {
  Component,
  ElementRef,
  HostListener,
  Inject,
  OnInit,
  PLATFORM_ID,
  ViewChild,
} from "@angular/core";
import { MatTooltipModule } from "@angular/material/tooltip";
import { RouterModule } from "@angular/router";
import { ProjectComponent } from "@components/project/project.component";
import { IconTechComponent } from "@components/ui/icon-tech/icon-tech.component";
import { ImageLoaderComponent } from "@components/ui/image-loader/image-loader.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { Project } from "@models/project.model";
import { Technology } from "@models/technology.model";
import { ProjectService } from "@services/project.service";
import { TechnologyService } from "@services/technology.service";

interface AboutItem {
  title: string;
  icon: string;
  content: string;
}

@Component({
  selector: "app-home",
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    ProjectComponent,
    ImageLoaderComponent,
    IconTechComponent,
    MatTooltipModule,
  ],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent {
  @ViewChild("hero") heroContainer!: ElementRef;
  scrollIndicatorDisabled = false;
  hasScrollEnough = false;
  readonly aboutItems: AboutItem[] = [
    {
      title: "Autonomie",
      icon: "user-clock",
      content: `Capacité à travailler de manière indépendante et à gérer mon temps efficacement.`,
    },
    {
      title: "Logique",
      icon: "gears",
      content: `Aptitude à résoudre des problèmes complexes grâce à une pensée analytique.`,
    },
    {
      title: "Adaptabilité",
      icon: "globe",
      content: `Capacité à s'adapter et à travailler dans des environnements diversifiés.`,
    },
    {
      title: "Travail d'équipe",
      icon: "people-group",
      content: `Compétence à collaborer efficacement avec les autres pour atteindre des objectifs communs.`,
    },
    {
      title: "L'écoute",
      icon: "ear-listen",
      content: `Habilité à comprendre et à prendre en compte les points de vue des autres.`,
    },
    {
      title: "L'entraide",
      icon: "handshake-angle",
      content: `Disposition à soutenir et à aider les collègues dans leurs tâches.`,
    },
  ];

  readonly recentTechs: string[] = [
    "Bun",
    "Angular",
    "NestJS",
    "Node.js",
    "Express",
    "Tailwind CSS",
    "TypeScript",
    "Docker",
    "MySQL",
    "Linux",
    "Git",
    "GitHub",
  ];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private projectService: ProjectService,
    private techService: TechnologyService,
  ) {}

  getProject(name: string): Project | undefined {
    return this.projectService.getProject(name);
  }

  getTech(name: string): Technology | undefined {
    return this.techService.getTechnology(name);
  }

  @HostListener("window:resize")
  disableIndicatorOnResize() {
    this.heroContainer.nativeElement.offsetHeight > 620
      ? (this.scrollIndicatorDisabled = false)
      : (this.scrollIndicatorDisabled = true);
  }

  @HostListener("window:scroll")
  disableIndicatorOnScroll() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.scrollIndicatorDisabled)
        window.pageYOffset > 350
          ? (this.hasScrollEnough = true)
          : (this.hasScrollEnough = false);
    }
  }
}
