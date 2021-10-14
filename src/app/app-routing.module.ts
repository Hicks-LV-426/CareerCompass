import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompassListComponent } from './compass/compass-list/compass-list.component';
import { CompassViewComponent } from './compass/compass-view/compass-view.component';

const routes: Routes = [
  { path: 'home', component: CompassListComponent },
  { path: 'compass/:compassFileName', component: CompassViewComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
