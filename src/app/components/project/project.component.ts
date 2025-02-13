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
  slicedTechs: Technology[] = [];

  readonly maxTechs = 9;

  get shortDescription(): string {
    return this.project.Description.split('.').slice(0, 1) + '.';
  }

  get numberOfOtherTechs(): number {
    return this.project.Technologies.length - (this.maxTechs - 1);
  }

  ngOnInit() {
    this.slicedTechs = this.project.Technologies.slice(0, this.maxTechs - 1);
    if (this.project.Technologies.length >= this.maxTechs) {
      this.slicedTechs.push(new Technology('...', '', '', ''));
    }
  }
}
