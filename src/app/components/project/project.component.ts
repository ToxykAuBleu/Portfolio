import { CommonModule } from "@angular/common";
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";
import { MatTooltipModule } from "@angular/material/tooltip";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { Project } from "@models/project.model";
import { IconTechComponent } from "../ui/icon-tech/icon-tech.component";
import { MatDividerModule } from "@angular/material/divider";
import { Technology } from "@models/technology.model";
import { debounceTime, fromEvent, Subscription } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import { ImageLoaderComponent } from "@components/ui/image-loader/image-loader.component";

@Component({
  selector: "app-project",
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatTooltipModule,
    IconTechComponent,
    MatDividerModule,
    ImageLoaderComponent,
  ],
  templateUrl: "./project.component.html",
  styleUrl: "./project.component.scss",
})
export class ProjectComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild("techContainer") techContainer!: ElementRef;
  @Input() project!: Project;
  @Input() opened: boolean = false;
  slicedTechs: Technology[] = [];
  overflowCount = 0;
  resizeSubscription!: Subscription;

  get shortDescription(): string {
    return this.project.Description.split(".").slice(0, 1) + ".";
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    // Fetching data from resolver.
    const projectData = this.route.snapshot.data["project"];
    if (projectData) {
      this.opened = true;
      this.project = projectData;
    }

    this.slicedTechs = this.project.Technologies;

    // Subscribe to window resize events to check if the technologies overflow the container.
    this.resizeSubscription = fromEvent(window, "resize")
      .pipe(debounceTime(50))
      .subscribe(() => this.checkOverflow());
  }

  ngOnDestroy(): void {
    this.resizeSubscription.unsubscribe();
  }

  ngAfterViewInit() {
    this.checkOverflow();
  }

  /**
   * Check if the technologies overflow the container and slice them if necessary.
   */
  checkOverflow() {
    const container = this.techContainer.nativeElement;
    const children = container.children;
    let numChildren = children.length;
    let totalWidth = 0;
    if (this.overflowCount > 0) {
      numChildren += this.overflowCount;
    } else {
      numChildren++;
    }

    this.overflowCount = 0;

    for (let i = 0; i < numChildren; i++) {
      totalWidth += children[1].offsetWidth + 13;
      if (totalWidth > container.offsetWidth) {
        this.overflowCount = numChildren - i;
        break;
      }
    }

    this.slicedTechs = this.project.Technologies.slice(
      0,
      Math.max(1, this.project.Technologies.length - this.overflowCount),
    );
    if (this.overflowCount > 0) {
      this.slicedTechs.push(new Technology("...", "", "", ""));
    }
    this.cdr.detectChanges();
  }

  openProject() {
    this.router.navigate(["projects", this.project.Name]);
  }

  closeProject() {
    this.router.navigateByUrl("projects");
  }
}
