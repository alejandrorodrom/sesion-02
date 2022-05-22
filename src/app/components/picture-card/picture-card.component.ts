import { Component, Input } from '@angular/core';
import { PictureCard } from './picture-card.interface';

@Component({
  selector: 'app-picture-card',
  templateUrl: './picture-card.component.html',
  styleUrls: ['./picture-card.component.css']
})
export class PictureCardComponent implements PictureCard {

  @Input() src!: string;
  @Input() alt!: string;
  @Input() name!: string;

  constructor() { }

}
