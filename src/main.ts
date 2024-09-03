import { bootstrapApplication } from '@angular/platform-browser';
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
