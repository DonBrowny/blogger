import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoemListComponent } from './poem-list/poem-list.component';
import { StoryListComponent } from './story-list/story-list.component';
import { RatingComponent } from './rating/rating.component';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomNavComponent } from './custom-nav/custom-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    PoemListComponent,
    StoryListComponent,
    RatingComponent,
    CustomNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
