import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ng2CompleterModule } from './../../node_modules/ng2-completer/ng2-completer.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import {NgAutoCompleteModule} from 'ng-auto-complete';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Ng2CompleterModule,
    FormsModule,
    InfiniteScrollModule,
    NgAutoCompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
