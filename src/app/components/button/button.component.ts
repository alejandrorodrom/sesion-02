import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @Output() clicked = new EventEmitter<string>();

  constructor() { }

  emitEvent(): void {
    console.log('Se emitio evento');
    this.clicked.emit(`Se hizo click - ${new Date()}`);
  }

}
