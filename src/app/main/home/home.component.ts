import { Component, inject, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { MenuService } from '../../common/services/menu.service';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { MenuItem } from '../../common/interface/menuModel';
import { CommonModule } from '@angular/common';
import { PageComponent } from '../page/page.component';


@Component({
  selector: 'app-home',
  imports: [RouterOutlet,MatMenuModule,MatButtonModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true
})
export class HomeComponent implements OnInit {
  router = inject(Router);
  constructor(private menuSvc: MenuService) { }
  menuList:MenuItem[] = []
  ngOnInit() {
    this.menuSvc.MenuList().subscribe(data => {
      this.menuList = data || [];
    });
  }

  navigateTo(path: string) {
    if (path) {
      this.router.navigateByUrl(path);
    }
  }
  titleNavigateTo(item:MenuItem){
    if(item.child.length === 0){
      this.router.navigateByUrl(`/home${item.url}`);
    }
  }
}

