import { Injectable } from '@angular/core';
import { EasyCityLower, EasyCityUpper, MothershipEasy, SkyCard0Easy } from './game-board.mock';
import { Board } from './types';

@Injectable({
  providedIn: 'root'
})
export class GameBoardService {

  board: Board;

  constructor() {
    this.board = {
      mothership: MothershipEasy,
      sky: [ SkyCard0Easy ],
      city: [ EasyCityUpper, EasyCityLower ]
    };
  }

  getBoard(): Board {
    return this.board;
  }
}