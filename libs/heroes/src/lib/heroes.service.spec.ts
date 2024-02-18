import { HeroesService } from './heroes.service';
import { SpectatorHttp, SpectatorService } from '@ngneat/spectator';
import { createHttpFactory, createServiceFactory } from '@ngneat/spectator/jest';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('HeroesService', () => {
  let spectator: SpectatorHttp<HeroesService>;
  let service: HeroesService;
  let httpMock: HttpTestingController;

  const createHttp = createHttpFactory(HeroesService);


  beforeEach(() => {
    spectator = createHttp();

    service = spectator.service
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return heroes', () => {
    // Make the HttpClient return a response
    spectator.service.getHeroes().subscribe();
    spectator.expectOne('api/todos', HttpMethod.GET);
    expect(service.getHeroes()).toEqual([{ id: 1, name: 'test' }]);
  });
});
