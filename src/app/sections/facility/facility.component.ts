import { Component, OnInit } from '@angular/core';
import { Card } from '../../components/card/card.interface';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {

  readonly ourFacilities: Card[] = [
    {
      src: 'assets/images/icon-1.png',
      alt: 'coffee',
      title: 'varieties of coffees',
      text: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Saepe, Adipisci!'
    },
    {
      src: 'assets/images/icon-2.png',
      alt: 'coffee',
      title: 'coffee beans',
      text: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Saepe, Adipisci!'
    },
    {
      src: 'assets/images/icon-3.png',
      alt: 'coffee',
      title: 'breakfast and sweets',
      text: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Saepe, Adipisci!'
    },
    {
      src: 'assets/images/icon-4.png',
      alt: 'coffee',
      title: 'read to go coffee',
      text: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Saepe, Adipisci!'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
