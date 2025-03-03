import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-loader',
  imports: [CommonModule],
  templateUrl: './image-loader.component.html',
  styleUrl: './image-loader.component.scss',
})
export class ImageLoaderComponent {
  @Input() image!: string;
  @Input() alt!: string;
  @Input() imageClass!: string;

  isLoading = false;

  constructor() {
    this.isLoading = true;
  }

  hideLoader(): void {
    // this.isLoading = false;
  }
}
