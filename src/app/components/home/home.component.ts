import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { IconTechComponent } from "@components/ui/icon-tech/icon-tech.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { Project } from "@models/project.model";
import { Technology } from "@models/technology.model";
import { ProjectService } from "@services/project.service";
import { TechnologyService } from "@services/technology.service";
import { RouterModule } from "@angular/router";
import { ProjectComponent } from "@components/project/project.component";
import { ImageLoaderComponent } from "@components/ui/image-loader/image-loader.component";

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
  ],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent implements OnInit {
  aboutItems: AboutItem[] = [
    {
      title: "Autonomie",
      icon: "user-clock",
      content: `lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.`,
    },
    {
      title: "Logique",
      icon: "gears",
      content: `lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.`,
    },
    {
      title: "Travail d'équipe",
      icon: "people-group",
      content: `lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.`,
    },
    {
      title: "L'écoute",
      icon: "ear-listen",
      content: `lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.`,
    },
    {
      title: "L'entraide",
      icon: "handshake-angle",
      content: `lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.`,
    },
    {
      title: "Lorem ipsum",
      icon: "globe",
      content: `lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.`,
    },
  ];
  technologies: Technology[] = [];

  constructor(
    private projectService: ProjectService,
    private technologyService: TechnologyService,
  ) {}

  ngOnInit(): void {
    this.technologies = this.technologyService.getTechnologies();
    // this.technologies.push(...this.technologyService.getTechnologies());
  }

  getProject(name: string): Project | undefined {
    return this.projectService.getProject(name);
  }
}
