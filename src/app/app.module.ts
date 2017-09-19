import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { MainModule } from './main/main.module';
import { NoContentModule } from './no-content/no-content.module';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { LanguageSwitcherComponent } from './language-switcher/language-switcher.component';

export class LocalStLoader implements TranslateLoader {
  constructor(private http: HttpClient, public prefix: string = '/i18n/', public suffix: string = '.json') {
    console.log('constructor');
  }

  public getTranslation(lang: string): Observable<Object> {
    const localTranslations = localStorage.getItem(`translations-${lang}`);
    const $aggregatedTranslations = new Subject();

    if (localTranslations) {
      return Observable.of(JSON.parse(localTranslations));
    } else {
      const $tranlations = this.http.get(`${this.prefix}${lang}${this.suffix}`);

      $tranlations.subscribe(translations => {
        localStorage.setItem(`translations-${lang}`, JSON.stringify(translations));
        $aggregatedTranslations.next(translations);
      });

      return $aggregatedTranslations;
    }
  }
}

@NgModule({
  declarations: [
    AppComponent,
    LanguageSwitcherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: LocalStLoader,
        deps: [HttpClient],
      },
      isolate: false,
    }),
    NoContentModule // Must be a last import to handle unknown routes
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
