import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BreakpointObserver } from '@angular/cdk/layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Experience } from '@models/experience.model';
import { ExperienceService } from '@services/experience.service';

@Component({
  selector: 'app-experiences',
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatTooltipModule,
    MatDividerModule,
  ],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent implements OnInit {
  experiences: Experience[] = [];
  isMdOrLower = false;

  constructor(
    private experiencesService: ExperienceService,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.experiences = this.experiencesService.getAllExperiences();
    // Sort experiences by starting date.
    this.experiences.sort(
      (a, b) =>
        (b.StartingDate?.Value.getTime() || 0) -
        (a.StartingDate?.Value.getTime() || 0)
    );

    // Observe screen size to determine if it's medium or lower.
    // 48rem is the breakpoint for medium screen size (ref: TailWindCSS).
    this.breakpointObserver
      .observe(['(max-width: 48rem)'])
      .subscribe((result) => {
        this.isMdOrLower = result.matches;
      });
  }
}
