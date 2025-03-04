import { Injectable } from "@angular/core";
import { Projects } from "@data/projects";
import { Project } from "@models/project.model";
import { TechnologyService } from "./technology.service";

@Injectable({
  providedIn: "root",
})
export class ProjectService {
  private parsedProjects: Project[] = [];

  constructor(private technologyService: TechnologyService) {
    Projects.forEach((project) => {
      const techs = project.technologies.map((tech: string) => {
        return this.technologyService.getTechnology(tech);
      });

      this.parsedProjects.push(
        new Project()
          .setName(project.name)
          .setTitle(project.title ? project.title : project.name)
          .setPreviewImage(project.previewImage)
          .setDescription(project.description)
          .setStartDate(new Date(project.startingDate))
          .setEndDate(
            project.endingDate ? new Date(project.endingDate) : undefined,
          )
          .setTechnologies(techs),
      );
    });
  }

  getProjects(): Project[] {
    return this.parsedProjects;
  }

  getProject(name: string): Project | undefined {
    return this.parsedProjects.find((project) => project.Name === name);
  }
}
