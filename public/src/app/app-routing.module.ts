import { GameComponent } from './status/game/game.component';

import { StatusComponent } from './status/status.component';
import { AddplayerComponent } from './manage/addplayer/addplayer.component';
import { ListComponent } from './manage/list/list.component';
import { ManageComponent } from './manage/manage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'players/list' },
  { path: 'players', component: ManageComponent, children: [
    {path: 'list', component: ListComponent},
    {path: 'addplayer', component: AddplayerComponent }
  ]},
  {path: 'status', component: StatusComponent, children: [
    {path: 'game/:id', component: GameComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
