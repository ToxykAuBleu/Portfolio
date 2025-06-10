import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { MatDividerModule } from "@angular/material/divider";
import { MatTooltipModule } from "@angular/material/tooltip";
import { BreakpointObserver } from "@angular/cdk/layout";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { Experience } from "@models/experience.model";
import { ExperienceService } from "@services/experience.service";
import { ImageLoaderComponent } from "@components/ui/image-loader/image-loader.component";

@Component({
  selector: "app-experiences",
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatTooltipModule,
    MatDividerModule,
    ImageLoaderComponent,
  ],
  templateUrl: "./experiences.component.html",
  styleUrl: "./experiences.component.scss",
})
export class ExperiencesComponent implements OnInit {
  experiences: Experience[] = [];
  /**
   * Indique l'ordre du tri des expériences.
   * True si plus récent d'abord, false sinon.
   */
  sortOrder: boolean = true;
  isMdOrLower = false;

  constructor(
    private experiencesService: ExperienceService,
    private breakpointObserver: BreakpointObserver,
  ) {}

  ngOnInit(): void {
    this.experiences = this.experiencesService.getAllExperiences();
    // Sort experiences by starting date.
    this.sortExperiences(this.sortOrder);

    // Observe screen size to determine if it's medium or lower.
    // 48rem is the breakpoint for medium screen size (ref: TailWindCSS).
    this.breakpointObserver
      .observe(["(max-width: 48rem)"])
      .subscribe((result) => {
        this.isMdOrLower = result.matches;
      });
  }

  toggleSortExperiences() {
    this.sortOrder = !this.sortOrder;
    this.sortExperiences(this.sortOrder);
  }

  private sortExperiences(recentFirst: boolean) {
    if (recentFirst) {
      this.experiences.sort(
        (a, b) =>
          (b.StartingDate?.Value.getTime() || 0) -
          (a.StartingDate?.Value.getTime() || 0),
      );
    } else {
      this.experiences.sort(
        (a, b) =>
          (a.StartingDate?.Value.getTime() || 0) -
          (b.StartingDate?.Value.getTime() || 0),
      );
    }
  }
}
