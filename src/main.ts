import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import {provideRouter, Routes} from '@angular/router';
import {MainPage} from './app/main-page/main-page';
import {PageNotFound} from './app/page-not-found/page-not-found';
import {ProjectList} from './app/project-list/project-list';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: MainPage},    // eagerly loaded
  {path: 'projects', component: ProjectList},
  {path: 'about',     // lazy loaded
    loadComponent: () =>
      import('./app/about-page/about-page').then(m => m.AboutPage)},
  {path: 'contact',
    loadComponent: () =>
      import('./app/contact-page/contact-page').then(m => m.ContactPage)},
  {path: '**', // Wildcard route
    loadComponent: () =>
      import('./app/page-not-found/page-not-found').then(m => m.PageNotFound)}
];

bootstrapApplication(App, {
  providers: [provideRouter(routes)]
}).then(r => console.log("Bootstrap successful"))
  .catch((err) => console.error(err));
