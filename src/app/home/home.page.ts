import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  nombreUsuario:string = "Renato";
  edadUsuario: number = 25;

  constructor(private router: Router) {
    localStorage.setItem('token', this.nombreUsuario);
  }

  ngOnInit(){

  }

  array: any = [
    {
      nombre: "Renato1",
      edad: 4
    },
    {
      nombre: "Renato",
      edad: 5
    }
  ]



  irPagina1(){
    let navigationExtra: NavigationExtras = {
      state:{ 
        usuario: this.nombreUsuario,
        edadEnviada: this.edadUsuario
      }    
    }
    this.router.navigate(['/pagina1'], navigationExtra);
  }
}
