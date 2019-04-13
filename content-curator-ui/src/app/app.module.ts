import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './home/home.component'
import { LayoutComponent } from './layout/layout.component';
import { FeedComponent } from './feed/feed.component';
import { TrainComponent } from './train/train.component';
import { SettingsComponent } from './settings/settings.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    FeedComponent,
    TrainComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
