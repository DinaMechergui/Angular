import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Layout/header/header.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { HomeComponent } from './Layout/home/home.component';
import { NotFoundComponent } from './Layout/not-found/not-found.component';
import { ListEventComponent } from './Layout/list-event/list-event.component';
import { FormsModule } from '@angular/forms';
import { FilterEventPipe } from './pipes/filter-event.pipe';
import { CardComponent } from './card/card.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NotFoundComponent,
    ListEventComponent,
    FilterEventPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    CardComponent,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }