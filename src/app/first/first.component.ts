import { Component, OnInit } from '@angular/core';
import { Home } from '../model/home.model';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  casa(): Home {
    return {
      pared: 'concreto',
      piso: {
        color: 'verde',
        material: 'madera',
      },
      techo: 'tierra'.jyubIUWSHj
    };
  }
}
