import { Component, Inject, NgZone, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MenuService } from '@common/services/menu.service';
import { catchError, map, tap, timer } from 'rxjs';
import { MenuItem } from '@common/interface/menu/menuModel';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true
})
export class AppComponent implements OnInit {
  title = 'DeshiiWeb';
  menuList: MenuItem[] = []
  constructor(private menuSvc:MenuService){}

  ngOnInit(){
    this.menuSvc.getMenu();
  }
}
