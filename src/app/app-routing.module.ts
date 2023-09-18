import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';

const routes: Routes = [
  { path: '', redirectTo: '/splash', pathMatch: 'full' },
  { path: 'splash', component: SplashScreenComponent },
  { path: 'home', component: HomeComponent },
  { path: 'item/:id', component: DetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
