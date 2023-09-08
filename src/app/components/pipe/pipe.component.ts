import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss'],
})
export class PipeComponent  implements OnInit {

  hoy = new Date();
  constructor() { }

  ngOnInit() {}

}
