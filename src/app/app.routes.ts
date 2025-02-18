import { Routes } from '@angular/router';
import { PageComponent } from './main/page/page.component';

export const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    loadComponent: () =>import('./main/home/home.component').then((mod) => mod.HomeComponent),
    data: { title: "首頁" }
  },
  {
    path: "notFound",
    loadComponent: () =>import('./common/component/not-found/not-found.component').then((mod) => mod.NotFoundComponent),
    data: { title: "首頁" }
  },
  /**萬用路徑，路由沒有比對到，永遠會執行*/
  {
    path: "**",
    component: PageComponent
  },
];
