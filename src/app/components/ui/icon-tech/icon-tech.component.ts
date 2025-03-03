import { Component, Input } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Technology } from '@models/technology.model';
import { ImageLoaderComponent } from '../image-loader/image-loader.component';

@Component({
  selector: 'app-icon-tech',
  imports: [ImageLoaderComponent, MatTooltipModule],
  templateUrl: './icon-tech.component.html',
  styleUrl: './icon-tech.component.scss',
})
export class IconTechComponent {
  @Input() tech!: Technology;
  @Input() size = 'lg';
}
