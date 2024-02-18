import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HeroesService } from '@aghs-arsenal/heroes';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, ],
  providers: [
    HeroesService
  ],
  selector: 'aghs-arsenal-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'workshop';

  constructor(private heroesService: HeroesService) {
    this.heroesService.getHeroes().subscribe(heroes => console.log(heroes));
  }
}
