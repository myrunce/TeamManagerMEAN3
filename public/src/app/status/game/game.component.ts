import { PlayerService } from '../../player.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  gameNum;
  players = [];
  player;
  constructor(private _route: ActivatedRoute, private _playerService: PlayerService) {
    this._route.paramMap.subscribe((params) => {
      this.gameNum = Number(params.get('id'));
      this.getPlayers();
    });
  }

  ngOnInit() {
  }

  getPlayers() {
    this._playerService.retrievePlayers((players) => {
      this.players = players;
    });
  }


  playing(id, gameNum) {
    this._playerService.findOne(id, (thePlayer) => {
      this.player = thePlayer;
      this.player['game' + String(gameNum)] = true;
      console.log('HERE IS THE CHANGE');
      console.log(this.player);
      this._playerService.update(id, this.player, (players) => {
        this.players = players;
        });
      this.player = null;
    });
  }

  notplaying(id, gameNum) {
    this._playerService.findOne(id, (thePlayer) => {
      this.player = thePlayer;
      this.player['game' + String(gameNum)] = false;
      console.log('HERE IS THE CHANGE');
      console.log(this.player);
      this._playerService.update(id, this.player, (players) => {
        this.players = players;
        });
      this.player = null;
    });
  }

  undecided(id, gameNum) {
    this._playerService.findOne(id, (thePlayer) => {
      this.player = thePlayer;
      this.player['game' + String(gameNum)] = null;
      console.log('HERE IS THE CHANGE');
      console.log(this.player);
      this._playerService.update(id, this.player, (players) => {
        this.players = players;
        });
      this.player = null;
    });
  }
}
