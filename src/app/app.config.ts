import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Routes, } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch, } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


const initialRoutes: Routes = [];

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),
    //provideHttpClient(withInterceptors([BaseUrlInterceptor])),
    provideRouter(routes), provideAnimationsAsync(),
  ]
};
