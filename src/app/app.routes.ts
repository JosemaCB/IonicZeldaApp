import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full',
  },
  {
    path: 'tabs',
    loadComponent: () => import('./pages/tabs/tabs.page').then( m => m.TabsPage),
    children: [
      {
        path: 'paw',
        loadComponent: () => import('./pages/paw/paw.page').then( m => m.PawPage)
      },
      {
        path: 'materials',
        loadComponent: () => import('./pages/materials/materials.page').then( m => m.MaterialsPage)
      },
      {
        path: 'equipment',
        loadComponent: () => import('./pages/equipment/equipment.page').then( m => m.EquipmentPage)
      },
    ]
  },
];
