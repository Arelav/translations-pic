import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { MainModule } from './main/main.module';
import { NoContentModule } from './no-content/no-content.module';
import { LanguageSwitcherComponent } from './language-switcher/language-switcher.component';
import { LocalStLoader } from './local-storage-loader';

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
