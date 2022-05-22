import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-picture-card',
  templateUrl: './picture-card.component.html',
  styleUrls: ['./picture-card.component.css']
})
export class PictureCardComponent implements OnInit {

  @Input() src!: string;
  @Input() alt!: string;
  @Input() name!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
