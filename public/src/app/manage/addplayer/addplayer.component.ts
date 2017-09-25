import { Router } from '@angular/router';
import { PlayerService } from '../../player.service';
import { Player } from '../../player';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addplayer',
  templateUrl: './addplayer.component.html',
  styleUrls: ['./addplayer.component.css']
})
export class AddplayerComponent implements OnInit {
  player: Player = new Player();

  constructor(private _playerService: PlayerService, private _router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this._playerService.create(this.player);
    this.player = new Player();
    this._router.navigateByUrl('players/list');
  }
}
