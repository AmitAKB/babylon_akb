import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
// import { Scene, Engine } from 'babylonjs';
import { Game } from './game';
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];

    constructor() {
    }

    ngOnInit() {}

        
    title = 'app';

    ngAfterViewInit() {
      let game = new Game('renderCanvas');
      game.createScene();
  
      game.animate();
    }    
}
