import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sup = [
    {
      nombre: "Luis",
      apellido: "Llanos",
      carrera: "Ing. Sistemas"
    },
    {
      nombre: "Jose",
      apellido: "Perez",
      carrera: "Ing. Redes"
    },
    {
      nombre: "Pepe",
      apellido: "Lopez",
      carrera: "Ing. Electrónico"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
