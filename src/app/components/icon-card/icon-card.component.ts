import { Component, Input } from '@angular/core';
import { IconCard } from './icon-card.interface';

@Component({
  selector: 'app-icon-card',
  templateUrl: './icon-card.component.html',
  styleUrls: ['./icon-card.component.css']
})
export class IconCardComponent implements IconCard {

  @Input() icon!: string;
  @Input() title!: string;
  @Input() content!: string[];

  constructor() { }

}
