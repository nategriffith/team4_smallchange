// @ts-nocheck
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.scss'],
})
export class JavascriptComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const hamburgerIcon = document.getElementById('hamburger-icon');

    hamburgerIcon.addEventListener('click', () => {
      console.log('Clicked!');
      const x = document.getElementById('myTopnav');
      if (x.className === 'nav') {
        x.className += '-responsive';
      } else {
        x.className = 'nav';
      }
    });
  }
  
}
