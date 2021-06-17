import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Side, SkyCard, SkyFieldEventType } from '../types';
import { faSpaceShuttle, faChevronLeft, faChevronRight, faSnowplow, faMeteor } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'ufs-sky',
  templateUrl: './sky.component.html',
  styleUrls: ['./sky.component.scss']
})
export class SkyComponent implements OnInit {
  @Input() data: SkyCard[] | undefined;
  @ViewChild('emptyTpl') emptyTpl!: TemplateRef<HTMLElement>;
  @ViewChild('moveTpl') moveTpl!: TemplateRef<HTMLElement>;
  @ViewChild('mothershipTpl') mothershipTpl!: TemplateRef<HTMLElement>;
  @ViewChild('explosionTpl') explosionTpl!: TemplateRef<HTMLElement>;
  @ViewChild('damageTpl') damageTpl!: TemplateRef<HTMLElement>;

  Side = Side;
  SkyFieldEventType: typeof SkyFieldEventType = SkyFieldEventType;
  faSpaceShuttle = faSpaceShuttle;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  faMeteor = faMeteor;
  faSnowplow = faSnowplow;

  constructor() { }

  ngOnInit(): void {
  }

  getTemplateName(eventType: SkyFieldEventType) {
    switch(eventType) {
      case SkyFieldEventType.MOVE:
        return this.moveTpl;
        break;
      case SkyFieldEventType.MOTHERSHIP:
        return this.mothershipTpl;
        break;
      case SkyFieldEventType.EXPLOSION:
        return this.explosionTpl;
        break;
    };
    return this.emptyTpl;
  }
}
