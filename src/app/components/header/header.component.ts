import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EventType, Router, RouterModule } from '@angular/router';
import { ImageLoaderComponent } from '@components/ui/image-loader/image-loader.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule, FontAwesomeModule, ImageLoaderComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    // Scrolls to the top when navigating to a new page.
    this.router.events.subscribe((event) => {
      if (event.type === EventType.NavigationStart) {
        window.scrollTo(0, 0);
      }
    });
  }
}
