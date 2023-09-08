import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.page.html',
  styleUrls: ['./pagina1.page.scss'],
})
export class Pagina1Page implements OnInit {

  usuarioRecibido: string = "";
  edadRecibida: number = 0;
  variableStorage: string | null = "";

  constructor(private router: Router, private activedRouter: ActivatedRoute ) { 
    this.activedRouter.queryParams.subscribe(param =>{
      if(this.router.getCurrentNavigation()?.extras.state){
        this.edadRecibida = this.router.getCurrentNavigation()?.extras?.state?.['edadEnviada'];
        this.usuarioRecibido = this.router.getCurrentNavigation()?.extras?.state?.['usuario'];
      }
    })
  }

  ngOnInit() {
    this.variableStorage = localStorage.getItem('token');
  }

}
