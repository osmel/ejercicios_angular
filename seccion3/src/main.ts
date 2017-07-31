import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
}

//min 11 Indica que angular puede correr en cualquier plataforma (dinamicas)
// arranca por el Modulo
//(archivo q no vamos a tocar)

platformBrowserDynamic().bootstrapModule(AppModule);
