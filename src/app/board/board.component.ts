import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { GameBoardService } from '../game-board.service';
import { Board, CityCard, MothershipCard, SkyCard } from '../types';

@Component({
  selector: 'ufs-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  board!: Board;
  mothership!: MothershipCard;
  sky!: SkyCard[];
  city!: CityCard[];

  constructor(
    private gameBoardService: GameBoardService,
    private cdr: ChangeDetectorRef
    ) {
  }
  
  ngOnInit(): void {
    this.board = this.gameBoardService.getBoard();
    this.mothership = this.board.mothership;
    this.sky = this.board.sky;
    this.city = this.board.city;
    this.cdr.detectChanges(); // bez sensu, że to potrzebne - w przyłości pewnie store
  }

}
