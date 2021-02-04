import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PandemicGameComponent } from './components/pandemic-game/pandemic-game.component';

const routes: Routes = [{ path: '', component: PandemicGameComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
