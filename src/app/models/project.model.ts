import { Technology } from './technology.model';

export class Project {
  /**
   * Nom du projet.
   */
  name: string;
  /**
   * Description du projet.
   */
  shortDescription: string;
  /**
   * Date de début du projet.
   */
  startDate: Date;
  /**
   * Date de fin du projet.
   */
  endDate?: Date;
  /**
   * Liste des technologies utilisées pour le projet.
   */
  technologies: Technology[];

  constructor(
    name: string,
    shortDescription: string,
    startDate: Date,
    endDate: Date,
    technologies: Technology[]
  ) {
    this.name = name;
    this.shortDescription = shortDescription;
    this.startDate = startDate;
    this.endDate = endDate;
    this.technologies = technologies;
  }
}
