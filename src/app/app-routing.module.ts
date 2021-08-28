import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GuardGuard } from './guard/guard.guard';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'courses',
    canActivate:[GuardGuard],
    loadChildren: () => import('./courses/courses.module').then( m => m.CoursesPageModule)
  },
  {
    path: 'date/:id/:name',
    canActivate:[GuardGuard],
    loadChildren: () => import('./date/date.module').then( m => m.DatePageModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('./landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'hometeacher',
    loadChildren: () => import('./hometeacher/hometeacher.module').then( m => m.HometeacherPageModule)
  },
  {
    path: 'tabs',
    canActivate:[GuardGuard],
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'listadoalumnos/:id/:name',
    canActivate:[GuardGuard],
    loadChildren: () => import('./listadoalumnos/listadoalumnos.module').then( m => m.ListadoalumnosPageModule)
  },
  {
    path: 'viewassist/:id/:name',
    canActivate:[GuardGuard],
    loadChildren: () => import('./viewassist/viewassist.module').then( m => m.ViewassistPageModule)
  },
  {
    path: 'viewstudents/:id/:name',
    canActivate:[GuardGuard],
    loadChildren: () => import('./viewstudents/viewstudents.module').then( m => m.ViewstudentsPageModule)
  }





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
