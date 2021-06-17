import { Component, Input, OnInit } from '@angular/core';
import { MothershipCard } from '../types';

@Component({
  selector: 'ufs-mothership',
  templateUrl: './mothership.component.html',
  styleUrls: ['./mothership.component.scss']
})
export class MothershipComponent implements OnInit {
  @Input() data: MothershipCard | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
