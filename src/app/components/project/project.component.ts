import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Project } from '@models/project.model';
import { IconTechComponent } from '../ui/icon-tech/icon-tech.component';
import { MatDividerModule } from '@angular/material/divider';
import { Technology } from '@models/technology.model';

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
export class ProjectComponent implements OnInit {
  @Input() project!: Project;

  get shortDescription(): string {
    return this.project.Description.split('.').slice(0, 1) + '.';
  }

  ngOnInit() {
    if (this.project.Technologies.length >= 9) {
      const tempTechs = this.project.Technologies.slice(0, 8);
      tempTechs.push(new Technology('...', '', '', ''));
      this.project = this.project.setTechnologies(tempTechs);
    }
  }
}
