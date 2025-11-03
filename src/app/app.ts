import { Component, signal } from '@angular/core';
import { NpcGeneratorComponent } from './components/npc-generator/npc-generator.component';
import { AppMode } from './model/app-mode';
import { Page } from './components/page/page';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [Page],
})
export class App {
  protected readonly title = signal('WhoTheFuckIsThisStrixhavenStudent');
}
