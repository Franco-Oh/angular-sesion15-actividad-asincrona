import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Variables de formulario
  nombre1!:string;
  apellido1!:string;
  carrera1!:string;
  agregarDatos!:any;

  msgAgregado = false;
  msgEliminado = false;

  // Base de datos
  registrados = [
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
  ];

  // data = Object.values(this.people.indexOf);
  
  // Funcion para agregar personas a base de datos
  insertarDatos(){ 
    this.agregarDatos = {
      nombre: this.nombre1,
      apellido: this.apellido1,
      carrera: this.carrera1
    }
    console.log(this.agregarDatos);
    this.registrados.push(this.agregarDatos);
    console.log(this.registrados);

    // Mensaje de exito
    this.msgAgregado = true;
    setTimeout(() => {
      this.msgAgregado = false;
    }, 3000)
  }

  // Funcion para eliminar dato especifico
  eliminar(dato:any){
    if(confirm('Seguro que desea eliminar este dato?')){
      var indice = this.registrados.indexOf(dato);
      console.log(indice);
      this.registrados.splice(indice, 1);

      // Mensaje de exito
      this.msgEliminado = true;
      setTimeout(() => {
        this.msgEliminado = false;
      }, 2000)
    }
  }

  constructor() {  }

  ngOnInit(): void {
  }

}
