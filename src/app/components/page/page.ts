import { Component } from '@angular/core';
import { AppMode } from '../../model/app-mode';
import { NpcGeneratorComponent } from '../npc-generator/npc-generator.component';

@Component({
  selector: 'app-page',
  templateUrl: './page.html',
  styleUrl: './page.scss',
  imports: [NpcGeneratorComponent],
})
export class Page {
  appMode = AppMode.STUDENT;
  appModes = AppMode;

  switchMode() {
    switch (this.appMode) {
      case AppMode.STUDENT:
        this.appMode = AppMode.COMMONER;
        break;
      case AppMode.COMMONER:
        this.appMode = AppMode.STUDENT;
        break;
    }
  }
}
