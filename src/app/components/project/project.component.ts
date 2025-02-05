import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Project } from '@models/project.model';
import { IconTechComponent } from '../ui/icon-tech/icon-tech.component';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-project',
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatTooltipModule,
    IconTechComponent,
    MatDividerModule,
  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent {
  @Input() project!: Project;

  get shortDescription(): string {
    return this.project.Description.split('.').slice(0, 1) + '.';
  }
}
