import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { AboutComponent } from "./components/about/about.component";
import { ExperiencesComponent } from "./components/experiences/experiences.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { ProjectComponent } from "@components/project/project.component";
import { ProjectResolver } from "@components/project/project.resolver";
import { ForbiddenComponent } from "@components/forbidden/forbidden.component";

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "projects",
    component: ProjectsComponent,
  },
  {
    path: "projects/:name",
    component: ProjectComponent,
    resolve: {
      project: ProjectResolver,
    },
  },
  {
    path: "experiences",
    component: ExperiencesComponent,
  },
  {
    path: "about-me",
    component: AboutComponent,
  },
  {
    path: "forbidden",
    component: ForbiddenComponent,
  },
  {
    path: "**",
    component: NotFoundComponent,
  },
];
