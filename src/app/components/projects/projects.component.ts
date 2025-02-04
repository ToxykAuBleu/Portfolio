import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Technology } from '@models/technology.model';
import { TechnologyService } from '@services/technology.service';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  technologies: Technology[] = [];
  selectedTechnologies: Technology[] = [];

  constructor(private technologyService: TechnologyService) {}

  ngOnInit(): void {
    this.technologies = this.technologyService.getTechnologies();
  }

  toggleTech(technology: Technology): void {
    if (this.selectedTechnologies.includes(technology)) {
      this.selectedTechnologies = this.selectedTechnologies.filter(
        (tech) => tech !== technology
      );
    } else {
      this.selectedTechnologies.push(technology);
    }
  }

  isSelected(technology: Technology): boolean {
    return this.selectedTechnologies.includes(technology);
  }

  deselectAll(): void {
    this.selectedTechnologies = [];
  }
}
