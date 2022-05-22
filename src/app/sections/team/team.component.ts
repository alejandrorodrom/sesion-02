import { Component, OnInit } from '@angular/core';
import { PictureCard } from '../../components/picture-card/picture-card.interface';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  readonly members: PictureCard[] = [
    {
      src: 'assets/images/our-team-1.jpg',
      alt: 'jose',
      name: 'Jose'
    },
    {
      src: 'assets/images/our-team-2.jpg',
      alt: 'luis',
      name: 'Luis'
    },
    {
      src: 'assets/images/our-team-3.jpg',
      alt: 'martin',
      name: 'Martin'
    },
    {
      src: 'assets/images/our-team-4.jpg',
      alt: 'pedro',
      name: 'Pedro'
    },
    {
      src: 'assets/images/our-team-5.jpg',
      alt: 'alex',
      name: 'Alex'
    },
    {
      src: 'assets/images/our-team-6.jpg',
      alt: 'miguel',
      name: 'Miguel'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
