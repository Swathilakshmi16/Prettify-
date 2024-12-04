import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WhyChooseComponent } from './why-choose/why-choose.component';
import { HowItsWorkComponent } from './how-its-work/how-its-work.component';
import { LearnComponent } from './learn/learn.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    WhyChooseComponent,
    HowItsWorkComponent,
    LearnComponent,
    FooterComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
