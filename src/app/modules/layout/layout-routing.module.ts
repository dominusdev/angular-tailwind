import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: LayoutComponent,
    loadChildren: () => import('../dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'invoices',
    component: LayoutComponent,
    loadChildren: () => import('../invoices/invoices.module').then((m) => m.InvoicesModule),
  },
  {
    path: 'customers',
    component: LayoutComponent,
    loadChildren: () => import('../customer/customer.module').then((m) => m.CustomerModule),
  },
  {
    path: 'products',
    component: LayoutComponent,
    loadChildren: () => import('../product/product.module').then((m) => m.ProductModule),
  },
  {
    path: 'components',
    component: LayoutComponent,
    loadChildren: () => import('../uikit/uikit.module').then((m) => m.UikitModule),
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'error/404' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
