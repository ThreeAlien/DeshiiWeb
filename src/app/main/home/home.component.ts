import { Component, inject, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { MenuService } from '../../common/services/menu.service';
import { filter } from 'rxjs';
import { MenuItem } from '../../common/interface/Menu/menuModel';


@Component({
  selector: 'app-home',
  imports: [RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true
})
export class HomeComponent implements OnInit {
  router = inject(Router);
  constructor(private menuSvc: MenuService) { }
  menuList:MenuItem[] = []
  ngOnInit() {
    this.menuSvc.MenuList().subscribe(data => this.menuList = data);
  }

  navigateTo(path: string) {
    console.log(this.menuList);
    this.router.navigateByUrl(path);
  }
}
