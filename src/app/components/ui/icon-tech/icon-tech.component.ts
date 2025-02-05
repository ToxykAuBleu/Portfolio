import { Component, Input } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Technology } from '@models/technology.model';

@Component({
  selector: 'app-icon-tech',
  imports: [MatTooltipModule],
  templateUrl: './icon-tech.component.html',
  styleUrl: './icon-tech.component.scss',
})
export class IconTechComponent {
  @Input() tech!: Technology;
  @Input() size = 'lg';
}
