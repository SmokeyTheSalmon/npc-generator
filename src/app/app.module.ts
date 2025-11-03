import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { App } from './app';

@NgModule({
  imports: [BrowserModule, MatButtonModule, App],
})
export class AppModule {}
