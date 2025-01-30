export class Technology {
  /**
   * Nom de la technologie.
   */
  name: string;
  /**
   * Chemin où se trouve l'icone de la technologie.
   * Il se trouve dans le dossier public/icons.
   */
  iconPath: string;
  /**
   * Description de la technologie.
   */
  description: string;
  /**
   * URL pour plus de détails sur la technologie.
   */
  url: string;

  constructor(name: string, icon: string, description: string, url: string) {
    this.name = name;
    this.iconPath = icon;
    this.description = description;
    this.url = url;
  }
}
