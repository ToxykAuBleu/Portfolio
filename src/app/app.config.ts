import {
  ApplicationConfig,
  LOCALE_ID,
  provideZoneChangeDetection,
} from "@angular/core";
import { provideRouter, withInMemoryScrolling } from "@angular/router";
import localeFr from "@angular/common/locales/fr";
import { registerLocaleData } from "@angular/common";
registerLocaleData(localeFr);

import { routes } from "./app.routes";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withInMemoryScrolling({ scrollPositionRestoration: "enabled" }),
    ),
    provideAnimationsAsync(),
    { provide: LOCALE_ID, useValue: "fr-FR" },
  ],
};
