import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

/**
 * ******************
 * *** IMPORTANT! ***
 * ******************
 *
 * In Angular-only applications it is correct to use this app.module.ts file to build out the NgModule
 * config so that declared components become aware of each other, and the necessary imports are wired in.
 *
 * However, SmallChange is an Angular application WITH Storybook. The way Storybook works is that every story
 * told in Storybook is its own mini-app with its own NgModule definition.
 *
 * Meaning, if you add declarations and imports here in this file, your stories will not be affected! Instead,
 * you need to go to the appropriate src\stories\**\*.stories.ts file and edit the moduleMetadata config.
 */

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
