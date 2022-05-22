import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  @Input() level: '1' | '2' | '3' | '4' = '1';

  constructor() { }

  ngOnInit(): void {
  }

}
