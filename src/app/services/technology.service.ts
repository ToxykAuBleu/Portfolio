import { Injectable } from "@angular/core";

import { Technology } from "../models/technology.model";
import { Technologies } from "@data/tech/index";

@Injectable({
  providedIn: "root",
})
export class TechnologyService {
  constructor() {}

  getTechnologies(): Technology[] {
    return Technologies;
  }

  getTechnology(name: string): Technology | undefined {
    return Technologies.find((tech) => tech.name === name);
  }
}
