import { Component, OnInit } from '@angular/core';
import { PictureCard } from '../../components/picture-card/picture-card.interface';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

  readonly coffees: PictureCard[] = [
    {
      src: 'assets/images/menu-1.png',
      alt: 'menu-1',
      name: 'love you coffee'
    },
    {
      src: 'assets/images/menu-2.png',
      alt: 'menu-2',
      name: 'cappuccino'
    },
    {
      src: 'assets/images/menu-3.png',
      alt: 'menu-3',
      name: 'mocha coffee'
    },
    {
      src: 'assets/images/menu-4.png',
      alt: 'menu-4',
      name: 'frappuccino'
    },
    {
      src: 'assets/images/menu-5.png',
      alt: 'menu-5',
      name: 'black coffee'
    },
    {
      src: 'assets/images/menu-6.png',
      alt: 'menu-6',
      name: 'love heart coffee'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
