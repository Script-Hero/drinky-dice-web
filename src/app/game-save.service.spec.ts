import { TestBed } from '@angular/core/testing';

import { GameSaveService } from './game-save.service';

describe('GameSaveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GameSaveService = TestBed.get(GameSaveService);
    expect(service).toBeTruthy();
  });
});
