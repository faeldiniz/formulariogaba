import { bootstrapApplication } from '@angular/platform-browser';
<<<<<<< HEAD
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(BrowserModule, FormsModule, ReactiveFormsModule)
  ]
}).catch(err => console.error(err));
=======
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { AppModule } from './app/app.module';
import { routes } from './app/app.routes';
import { provideRouter } from '@angular/router';

//platformBrowserDynamic().bootstrapModule(AppModule)
  //.catch((err) => console.error(err));

  bootstrapApplication(AppComponent, {
    providers: [
      provideRouter(routes)
    ]
  }).catch(err => console.error(err));
>>>>>>> 1ff193256465b222410b73878f9af831bfe302a1
