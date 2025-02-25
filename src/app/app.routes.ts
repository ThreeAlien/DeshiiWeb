import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => import('./main/home/home.component').then(mod => mod.HomeComponent),
    data: { title: "首頁" }
  },
  {
    path: "home",
    loadComponent: () => import('./main/home/home.component').then(mod => mod.HomeComponent),
    data: { title: "首頁" },
    children: [
      {
        path: "**",
        loadComponent: () => import('./main/page/page.component').then(mod => mod.PageComponent),
      }
    ]
  },
  {
    path: "**",
    loadComponent: () => import('./common/component/not-found/not-found.component').then(mod=>mod.NotFoundComponent)
  }
];

