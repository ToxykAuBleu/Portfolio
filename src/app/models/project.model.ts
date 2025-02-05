import { Technology } from './technology.model';

export class Project {
  /**
   * Nom du projet.
   */
  private name: string;
  /**
   * Description du projet. Peut contenir du HTML.
   */
  private description: string;
  /**
   * Image de prévisualisation du projet.
   */
  private previewImage?: string;
  /**
   * Date de début du projet.
   */
  private startingDate: Date;
  /**
   * Date de fin du projet.
   */
  private endingDate?: Date;
  /**
   * Liste des technologies utilisées pour le projet.
   */
  private technologies: Technology[];

  constructor() {
    this.name = '';
    this.description = '';
    this.startingDate = new Date();
    this.technologies = [];
  }

  get Name(): string {
    return this.name;
  }
  setName(name: string): Project {
    this.name = name;
    return this;
  }

  get Description(): string {
    return this.description;
  }
  setDescription(description: string): Project {
    this.description = description;
    return this;
  }

  get PreviewImage(): string | undefined {
    return this.previewImage;
  }
  setPreviewImage(previewImage: string): Project {
    this.previewImage = previewImage;
    return this;
  }

  get StartingDate(): Date {
    return this.startingDate;
  }
  setStartDate(startDate: Date): Project {
    this.startingDate = startDate;
    return this;
  }

  get EndingDate(): Date | undefined {
    return this.endingDate;
  }
  setEndDate(endDate?: Date): Project {
    this.endingDate = endDate;
    return this;
  }

  get Technologies(): Technology[] {
    return this.technologies;
  }
  setTechnologies(technologies: Technology[]): Project {
    this.technologies = technologies;
    return this;
  }
}
