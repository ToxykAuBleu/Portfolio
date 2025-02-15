import { Injectable } from '@angular/core';
import { CustomDate, Experience } from '@models/experience.model';
import { Experiences } from '@data/experiences';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  private parsedExperience: Experience[] = [];

  constructor() {
    Experiences.forEach((exp) => {
      this.parsedExperience.push(
        new Experience()
          .setName(exp.name)
          .setTitle(exp.title)
          .setLocation(exp.location)
          .setPreviewImage(exp.previewImage)
          .setDescription(exp.description)
          .setStartDate(
            exp.startingDate
              ? typeof exp.startingDate === 'string'
                ? new CustomDate(exp.startingDate)
                : new CustomDate(
                    exp.startingDate.Value,
                    exp.startingDate.Format
                  )
              : undefined
          )
          .setEndDate(
            exp.endingDate
              ? typeof exp.endingDate === 'string'
                ? new CustomDate(exp.endingDate)
                : new CustomDate(exp.endingDate.Value, exp.endingDate.Format)
              : undefined
          )
          .setIsCurrent(exp.isCurrent)
          .setIsCourse(exp.isCourse)
      );
    });
  }

  getAllExperiences(): Experience[] {
    return this.parsedExperience;
  }

  getExperiences(): Experience[] {
    return this.parsedExperience.filter((exp) => !exp.IsCourse);
  }

  getCourses(): Experience[] {
    return this.parsedExperience.filter((exp) => exp.IsCourse);
  }

  getExperience(name: string): Experience | undefined {
    return this.parsedExperience.find((exp) => exp.Name === name);
  }
}
