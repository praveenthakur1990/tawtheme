import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  // {
  //   path: 'folder/:id',
  //   loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  // },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'myaccount',
    loadChildren: () => import('./pages/myaccount/myaccount.module').then( m => m.MyaccountPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./pages/notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'forgetpassword',
    loadChildren: () => import('./pages/forgetpassword/forgetpassword.module').then( m => m.ForgetpasswordPageModule)
  },
  {
    path: 'wordpresslist',
    loadChildren: () => import('./pages/wordpresstemplate/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'wordpressdetail',
    loadChildren: () => import('./pages/wordpresstemplate/detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'projectdetail',
    loadChildren: () => import('./pages/project/detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'projectlist',
    loadChildren: () => import('./pages/project/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'supportdetail',
    loadChildren: () => import('./pages/support/detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'supportlist',
    loadChildren: () => import('./pages/support/list/list.module').then( m => m.ListPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
