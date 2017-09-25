import { ActivatedRoute } from '@angular/router';
import { PlayerService } from '../../player.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  players;
  constructor(private _playerService: PlayerService) {
    this.getPlayers();
  }

  ngOnInit() {
  }

  getPlayers() {
    this._playerService.retrievePlayers((players) => {
      this.players = players;
    });
  }

  delete(id) {
    this._playerService.delete(id, (players) => {
      this.players = players;
    });
  }
}
