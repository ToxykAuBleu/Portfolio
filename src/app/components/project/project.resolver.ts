import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot,
} from "@angular/router";
import { Project } from "@models/project.model";
import { ProjectService } from "@services/project.service";

@Injectable({
  providedIn: "root",
})
export class ProjectResolver implements Resolve<Project> {
  constructor(
    private projectService: ProjectService,
    private router: Router,
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return new Promise<Project>((resolve, reject) => {
      const project = this.projectService.getProject(route.params["name"]);
      if (project) {
        resolve(project);
      } else {
        this.router.navigate(["/not-found"]);
        reject("Project not found");
      }
    });
  }
}
