import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Technology } from "@models/technology.model";
import { TechnologyService } from "@services/technology.service";
import { MatTooltipModule } from "@angular/material/tooltip";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ProjectService } from "@services/project.service";
import { Project } from "@models/project.model";
import { IconTechComponent } from "@components/ui/icon-tech/icon-tech.component";
import { ProjectComponent } from "@components/project/project.component";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatDividerModule } from "@angular/material/divider";

@Component({
  selector: "app-projects",
  imports: [
    CommonModule,
    IconTechComponent,
    MatTooltipModule,
    FontAwesomeModule,
    ProjectComponent,
    MatExpansionModule,
    MatDividerModule,
  ],
  templateUrl: "./projects.component.html",
  styleUrl: "./projects.component.scss",
})
export class ProjectsComponent implements OnInit {
  technologies: Technology[] = [];
  selectedTechnologies: Technology[] = [];
  hoveredTechnology: Technology | null = null;

  projects: Project[] = [];
  displayedProjects: Project[] = [];

  constructor(
    private technologyService: TechnologyService,
    private projectService: ProjectService,
  ) {}

  ngOnInit(): void {
    this.technologies = this.technologyService.getTechnologies();
    this.projects = this.projectService.getProjects();
    this.displayedProjects = this.projects;
  }

  toggleTech(technology: Technology): void {
    if (this.selectedTechnologies.includes(technology)) {
      this.selectedTechnologies = this.selectedTechnologies.filter(
        (tech) => tech !== technology,
      );
    } else {
      this.selectedTechnologies.push(technology);
    }
    this.filterProjects();
  }

  isSelected(technology: Technology): boolean {
    return this.selectedTechnologies.includes(technology);
  }

  deselectAll(): void {
    this.selectedTechnologies = [];
    this.filterProjects();
  }

  setHoveredTechnology(technology: Technology | null): void {
    this.hoveredTechnology = technology;
  }

  filterProjects(): void {
    if (this.selectedTechnologies.length === 0) {
      this.displayedProjects = this.projects;
    } else {
      this.displayedProjects = this.projects.filter((project) =>
        project.Technologies.some((tech) =>
          this.selectedTechnologies.includes(tech),
        ),
      );
    }
  }
}
