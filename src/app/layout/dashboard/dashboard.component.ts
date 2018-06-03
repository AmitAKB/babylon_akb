import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
// import { Scene, Engine } from 'babylonjs';
import { Example1 } from './example1';
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
      let game = new Example1('renderCanvas');
      game.createScene();
  
      game.animate();
    }    
}
