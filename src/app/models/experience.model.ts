export class CustomDate {
  public Value: Date;
  public Format: string;
  constructor(date: Date, format?: string) {
    this.Value = date;
    this.Format = format || 'dd/MM/yyyy';
  }
}

export class Experience {
  /**
   * Nom de l'expérience, pour la retrouver dans une liste.
   */
  private name: string;
  /**
   * Titre de l'expérience.
   */
  private title: string;
  /**
   * Description du projet. Peut contenir du HTML.
   */
  private description: string;
  /**
   * Lieu du projet.
   */
  private location: string;
  /**
   * Image de prévisualisation du projet.
   */
  private previewImage?: string;
  /**
   * Date de début de l'expérience.
   */
  private startingDate?: CustomDate;
  /**
   * Date de fin de l'expérience.
   */
  private endingDate?: CustomDate;
  /**
   * Indique si l'expérience est toujours d'actualité.
   */
  private isCurrent: boolean;
  /**
   * Indique si l'expérience est une formation.
   */
  private isCourse: boolean;

  constructor(experience?: Experience) {
    this.name = experience?.name || '';
    this.title = experience?.title || '';
    this.location = experience?.location || 'En ligne';
    this.description = experience?.description || '';
    this.previewImage = experience?.previewImage;
    this.startingDate = experience?.startingDate
      ? new CustomDate(
          experience.startingDate.Value,
          experience.startingDate.Format
        )
      : undefined;
    this.endingDate = experience?.endingDate
      ? new CustomDate(
          experience.endingDate.Value,
          experience.endingDate.Format
        )
      : undefined;
    this.isCurrent = experience?.isCurrent || false;
    this.isCourse = experience?.isCourse || false;
  }

  get Name(): string {
    return this.name;
  }
  setName(name: string): Experience {
    this.name = name;
    return this;
  }

  get Title(): string {
    return this.title;
  }
  setTitle(name: string): Experience {
    this.title = name;
    return this;
  }

  get Location(): string {
    return this.location;
  }
  setLocation(location: string): Experience {
    this.location = location;
    return this;
  }

  get Description(): string {
    return this.description;
  }
  setDescription(description: string): Experience {
    this.description = description;
    return this;
  }

  get PreviewImage(): string | undefined {
    return this.previewImage;
  }
  setPreviewImage(previewImage: string): Experience {
    this.previewImage = previewImage;
    return this;
  }

  get StartingDate(): CustomDate | undefined {
    return this.startingDate;
  }
  setStartDate(startDate?: CustomDate): Experience {
    this.startingDate = startDate;
    return this;
  }

  get EndingDate(): CustomDate | undefined {
    return this.endingDate;
  }
  setEndDate(endDate?: CustomDate): Experience {
    this.endingDate = endDate;
    return this;
  }

  get IsCurrent(): boolean {
    return this.isCurrent;
  }
  setIsCurrent(isCurrent: boolean): Experience {
    this.isCurrent = isCurrent;
    return this;
  }

  get IsCourse(): boolean {
    return this.isCourse;
  }
  setIsCourse(isCourse: boolean): Experience {
    this.isCourse = isCourse;
    return this;
  }

  isOnline(): boolean {
    return /^https?:\/\//.test(this.location);
  }
}
