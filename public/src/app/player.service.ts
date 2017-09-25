import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PlayerService {

  constructor(private _http: Http) { }

  retrievePlayers(callback) {
    this._http.get('/players').subscribe(
      (response) => {
        callback(response.json());
      },
      (err) => {
        console.log(err);
      }
    );
  }

  create(player) {
    return this._http.post(`/players`, player)
    .map( data => data.json() )
    .toPromise();
  }

  findOne(id, callback) {
    this._http.get('/players/' + id).subscribe(
      (response) => {
        callback(response.json());
      },
      (err) => {
        console.log('ERROR');
      }
    );
  }

  update(id, player, callback) {
    return this._http.put(`/players/${id}`, player)
    .subscribe (
      (response) => {
        console.log('Successful response from the server');
        callback(response.json());
      },
      (err) => {
        console.log(err);
      }
    );
  }

  delete(id, callback) {
    this._http.delete('/players/' + id).subscribe(
      (response) => {
        callback(response.json());
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
