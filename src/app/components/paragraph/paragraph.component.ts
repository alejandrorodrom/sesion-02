import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.css']
})
export class ParagraphComponent implements OnInit {

  @Input() size = 1.6;
  @Input() padding = '1rem 0';

  constructor() { }

  ngOnInit(): void {
  }

}
