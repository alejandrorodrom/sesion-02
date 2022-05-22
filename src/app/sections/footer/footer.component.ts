import { Component, OnInit } from '@angular/core';
import { IconCard } from '../../components/icon-card/icon-card.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  readonly information: IconCard[] = [
    {
      icon: 'fa-solid fa-envelope',
      title: 'Our Email',
      content: [
        'test@test.com',
        'test@test.com'
      ]
    },
    {
      icon: 'fa-solid fa-clock',
      title: 'Opening Hours',
      content: [
        '07:00am To 09:00pm',
      ]
    },
    {
      icon: 'fa-solid fa-location-dot',
      title: 'Shop Location',
      content: [
        'Mumbai, India - 400104',
      ]
    },
    {
      icon: 'fa-solid fa-phone',
      title: 'Our Number',
      content: [
        '+123-456-7890',
        '+111-222-3333',
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
