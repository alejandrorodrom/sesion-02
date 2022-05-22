import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  readonly images: string[] = [
    'assets/images/gallery-1.webp',
    'assets/images/gallery-2.webp',
    'assets/images/gallery-3.webp',
    'assets/images/gallery-4.webp',
    'assets/images/gallery-5.webp',
    'assets/images/gallery-6.webp',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
