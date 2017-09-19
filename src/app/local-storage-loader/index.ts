import { TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/forkJoin';

export class LocalStLoader implements TranslateLoader {
  private translatedModules = ['app', 'main', 'nav', 'lazy'];
  private requests: Array<Observable<any>> = [];

  constructor(private http: HttpClient, public prefix: string = '/i18n/', public suffix: string = '.json') {
  }

  public getTranslation(lang: string): Observable<Object> {
    const localTranslations = localStorage.getItem(`translations-${lang}`);

    // TODO: Handle translation versions
    if (localTranslations) {
      return Observable.of(JSON.parse(localTranslations));
    } else {
      return this.getTranslationFiles(lang);
    }
  }

  private getTranslationFiles(lang: string): Observable<Object> {
    const $aggregatedTranslations = new Subject();

    this.translatedModules.forEach(name => {
      this.requests.push(this.http.get(`${this.prefix}${name}/${lang}${this.suffix}`));
    });

    Observable.forkJoin(this.requests)
      .subscribe(modulesTranslations => {
        let translations = {};
        modulesTranslations.forEach(translation => {
          translations = {...translations, ...translation};
        });

        localStorage.setItem(`translations-${lang}`, JSON.stringify(translations));
        $aggregatedTranslations.next(translations);
      });

    return $aggregatedTranslations;
  }
}
