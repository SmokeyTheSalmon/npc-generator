import { Component, effect, input } from '@angular/core';
import { Npc, NpcValues } from '../../model/npc';
import { MatButtonModule } from '@angular/material/button';
import { ConfigService } from '../../services/config-service/config-service';
import { AppMode } from '../../model/app-mode';

@Component({
  selector: 'npc-generator',
  templateUrl: './npc-generator.component.html',
  styleUrls: ['./npc-generator.component.scss'],
  imports: [MatButtonModule],
})
export class NpcGeneratorComponent {
  appMode = input(AppMode.COMMONER);
  data!: NpcValues;
  currentNpc: Npc = {
    adjective: '',
    species: '',
    category: '',
    location: '',
    backstory: '',
  };

  constructor(private readonly configService: ConfigService) {
    effect(() => {
    this.loadData(this.appMode());
  });
  }

  generateNpc() {
    this.currentNpc = {
      adjective: this.generateAdjective(this.data.adjective),
      species: this.generateAttribute(this.data.species),
      category: this.generateCategory(this.data.category),
      location: this.generateAttribute(this.data.location),
      backstory: this.generateAttribute(this.data.backstory),
    };
  }

  private loadData(appMode: AppMode) {
    this.configService.getAsset(appMode).subscribe((values: any) => {
      this.data = values;
      this.generateNpc();
    });
  }

  private generateAttribute(options: string[]) {
    const index = Math.floor(Math.random() * options.length);
    return options[index];
  }

  private generateCategory(options: string[]) {
    console.log(this.appMode());
    if (this.appMode() === AppMode.COMMONER) {
      return this.generateAttribute(options).toLowerCase();
    }
    return this.generateAttribute(options);
  }

  private generateAdjective(adjectives: string[]) {
    const adjective = this.generateAttribute(adjectives);
    return adjective.match(/^[e|a|u|o|i]/) ? `An ${adjective}` : `A ${adjective}`;
  }
}
