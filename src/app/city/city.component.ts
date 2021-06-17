import { Component, Input, OnInit } from '@angular/core';
import { CityCard } from '../types';

@Component({
  selector: 'ufs-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {
  @Input() data: CityCard[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
