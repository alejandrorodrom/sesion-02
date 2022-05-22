import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() type: 'text' | 'number' = 'text';
  @Input() placeholder = '';

  constructor() { }

  ngOnInit(): void {
  }

}
