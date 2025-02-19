import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
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

  constructor(private experiencesService: ExperienceService) {}

  ngOnInit(): void {
    const experiences = this.experiencesService.getAllExperiences();
    // Sort experiences by starting date.
    experiences.sort(
      (a, b) =>
        (b.StartingDate?.Value.getTime() || 0) -
        (a.StartingDate?.Value.getTime() || 0)
    );

    // Add empty experiences to fill the grid.
    for (let i = 0; i < experiences.length; i++) {
      this.experiences.push(experiences[i]);
      if (i % 2 === 0) {
        this.experiences.push(new Experience());
        this.experiences.push(new Experience());
      }
    }
    console.log(this.experiences);
  }
}
