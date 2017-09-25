webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__status_game_game_component__ = __webpack_require__("../../../../../src/app/status/game/game.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__status_status_component__ = __webpack_require__("../../../../../src/app/status/status.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__manage_addplayer_addplayer_component__ = __webpack_require__("../../../../../src/app/manage/addplayer/addplayer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__manage_list_list_component__ = __webpack_require__("../../../../../src/app/manage/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__manage_manage_component__ = __webpack_require__("../../../../../src/app/manage/manage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'players/list' },
    { path: 'players', component: __WEBPACK_IMPORTED_MODULE_4__manage_manage_component__["a" /* ManageComponent */], children: [
            { path: 'list', component: __WEBPACK_IMPORTED_MODULE_3__manage_list_list_component__["a" /* ListComponent */] },
            { path: 'addplayer', component: __WEBPACK_IMPORTED_MODULE_2__manage_addplayer_addplayer_component__["a" /* AddplayerComponent */] }
        ] },
    { path: 'status', component: __WEBPACK_IMPORTED_MODULE_1__status_status_component__["a" /* StatusComponent */], children: [
            { path: 'game/:id', component: __WEBPACK_IMPORTED_MODULE_0__status_game_game_component__["a" /* GameComponent */] }
        ] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".links{\r\n  font-size: 24pt;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"links\">\n  <a [routerLink]=\"['']\">Manage Players</a> | <a [routerLink]=\"['status','game','1']\">Players Status</a>\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__status_game_game_component__ = __webpack_require__("../../../../../src/app/status/game/game.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__player_service__ = __webpack_require__("../../../../../src/app/player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__manage_manage_component__ = __webpack_require__("../../../../../src/app/manage/manage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__manage_list_list_component__ = __webpack_require__("../../../../../src/app/manage/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__manage_addplayer_addplayer_component__ = __webpack_require__("../../../../../src/app/manage/addplayer/addplayer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__status_status_component__ = __webpack_require__("../../../../../src/app/status/status.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__manage_manage_component__["a" /* ManageComponent */],
            __WEBPACK_IMPORTED_MODULE_9__manage_list_list_component__["a" /* ListComponent */],
            __WEBPACK_IMPORTED_MODULE_10__manage_addplayer_addplayer_component__["a" /* AddplayerComponent */],
            __WEBPACK_IMPORTED_MODULE_11__status_status_component__["a" /* StatusComponent */],
            __WEBPACK_IMPORTED_MODULE_0__status_game_game_component__["a" /* GameComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_1__player_service__["a" /* PlayerService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/manage/addplayer/addplayer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".red{\r\n  color: red;\r\n}\r\n\r\n#container{\r\n  margin-top: 70px;\r\n  border: 1px solid black;\r\n  height: auto;\r\n  min-height: 300px;\r\n  padding: 30px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manage/addplayer/addplayer.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n  <h1>Add Player</h1>\n  <form (submit)='onSubmit()'\n  #formData = 'ngForm'>\n    <p>\n      Name:\n      <input type=\"text\"\n      name='name'\n      [(ngModel)]='player.name'\n      required\n      minlength=\"2\"\n      #name = 'ngModel'/>\n      <br>\n    </p>\n    <p class='red' *ngIf='!name.valid'>Name must be at least 2 chars long.</p>\n    <p>\n      Preferred Position:\n      <input type=\"text\"\n      name='position'\n      [(ngModel)] = 'player.position'\n      #position = 'ngModel'/>\n      <br>\n    </p>\n    <input type=\"submit\" [disabled]='!formData.valid' value=\"Add Player\">\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/manage/addplayer/addplayer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddplayerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__player_service__ = __webpack_require__("../../../../../src/app/player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__player__ = __webpack_require__("../../../../../src/app/player.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddplayerComponent = (function () {
    function AddplayerComponent(_playerService, _router) {
        this._playerService = _playerService;
        this._router = _router;
        this.player = new __WEBPACK_IMPORTED_MODULE_2__player__["a" /* Player */]();
    }
    AddplayerComponent.prototype.ngOnInit = function () {
    };
    AddplayerComponent.prototype.onSubmit = function () {
        this._playerService.create(this.player);
        this.player = new __WEBPACK_IMPORTED_MODULE_2__player__["a" /* Player */]();
        this._router.navigateByUrl('players/list');
    };
    return AddplayerComponent;
}());
AddplayerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["o" /* Component */])({
        selector: 'app-addplayer',
        template: __webpack_require__("../../../../../src/app/manage/addplayer/addplayer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/manage/addplayer/addplayer.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__player_service__["a" /* PlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__player_service__["a" /* PlayerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AddplayerComponent);

var _a, _b;
//# sourceMappingURL=addplayer.component.js.map

/***/ }),

/***/ "../../../../../src/app/manage/list/list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manage/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<table>\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Position</th>\n      <th>Action</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor='let player of players'>\n      <td>{{player.name}}</td>\n      <td>{{player.position}}</td>\n      <td><button class='red' (click)='delete(player._id)'>Delete</button></td>\n    </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/manage/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__player_service__ = __webpack_require__("../../../../../src/app/player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListComponent = (function () {
    function ListComponent(_playerService) {
        this._playerService = _playerService;
        this.getPlayers();
    }
    ListComponent.prototype.ngOnInit = function () {
    };
    ListComponent.prototype.getPlayers = function () {
        var _this = this;
        this._playerService.retrievePlayers(function (players) {
            _this.players = players;
        });
    };
    ListComponent.prototype.delete = function (id) {
        var _this = this;
        this._playerService.delete(id, function (players) {
            _this.players = players;
        });
    };
    return ListComponent;
}());
ListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-list',
        template: __webpack_require__("../../../../../src/app/manage/list/list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/manage/list/list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__player_service__["a" /* PlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__player_service__["a" /* PlayerService */]) === "function" && _a || Object])
], ListComponent);

var _a;
//# sourceMappingURL=list.component.js.map

/***/ }),

/***/ "../../../../../src/app/manage/manage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".links{\r\n  font-size: 20pt;\r\n}\r\n\r\n#container{\r\n  margin-top: 70px;\r\n  border: 1px solid black;\r\n  height: auto;\r\n  min-height: 470px;\r\n  padding: 30px;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manage/manage.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n  <div class=\"links\">\n    <a [routerLink]=\"['']\">List</a> | <a [routerLink]=\"['addplayer']\">Add Player</a>\n  </div>\n  <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/manage/manage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ManageComponent = (function () {
    function ManageComponent() {
    }
    ManageComponent.prototype.ngOnInit = function () {
    };
    return ManageComponent;
}());
ManageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-manage',
        template: __webpack_require__("../../../../../src/app/manage/manage.component.html"),
        styles: [__webpack_require__("../../../../../src/app/manage/manage.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ManageComponent);

//# sourceMappingURL=manage.component.js.map

/***/ }),

/***/ "../../../../../src/app/player.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlayerService = (function () {
    function PlayerService(_http) {
        this._http = _http;
    }
    PlayerService.prototype.retrievePlayers = function (callback) {
        this._http.get('/players').subscribe(function (response) {
            callback(response.json());
        }, function (err) {
            console.log(err);
        });
    };
    PlayerService.prototype.create = function (player) {
        return this._http.post("/players", player)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    PlayerService.prototype.findOne = function (id, callback) {
        this._http.get('/players/' + id).subscribe(function (response) {
            callback(response.json());
        }, function (err) {
            console.log('ERROR');
        });
    };
    PlayerService.prototype.update = function (id, player, callback) {
        return this._http.put("/players/" + id, player)
            .subscribe(function (response) {
            console.log('Successful response from the server');
            callback(response.json());
        }, function (err) {
            console.log(err);
        });
    };
    PlayerService.prototype.delete = function (id, callback) {
        this._http.delete('/players/' + id).subscribe(function (response) {
            callback(response.json());
        }, function (err) {
            console.log(err);
        });
    };
    return PlayerService;
}());
PlayerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]) === "function" && _a || Object])
], PlayerService);

var _a;
//# sourceMappingURL=player.service.js.map

/***/ }),

/***/ "../../../../../src/app/player.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Player; });
var Player = (function () {
    function Player(name, position, game1, game2, game3) {
        if (name === void 0) { name = ''; }
        if (position === void 0) { position = ''; }
        if (game1 === void 0) { game1 = null; }
        if (game2 === void 0) { game2 = null; }
        if (game3 === void 0) { game3 = null; }
        this.name = name;
        this.position = position;
        this.game1 = game1;
        this.game2 = game2;
        this.game3 = game3;
    }
    return Player;
}());

//# sourceMappingURL=player.js.map

/***/ }),

/***/ "../../../../../src/app/status/game/game.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".red{\r\n  background-color: red;\r\n}\r\n\r\n.green{\r\n  background-color: green;\r\n}\r\n\r\n.yellow{\r\n  background-color: yellow;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/status/game/game.component.html":
/***/ (function(module, exports) {

module.exports = "<table>\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Position</th>\n      <th>Actions</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor = 'let player of players'>\n      <td>{{player.name}}</td>\n      <td>{{player.position}}</td>\n      <td>\n        <span *ngIf= 'gameNum == 1'>\n          <button (click)  = 'playing(player._id, gameNum)' [ngClass]=\"{green: player.game1===true}\">Playing</button>\n          <button (click) = 'notplaying(player._id, gameNum)' [ngClass]=\"{red: player.game1===false}\">Not Playing</button>\n          <button (click) = 'undecided(player._id, gameNum)' [ngClass]=\"{yellow: player.game1===null}\">Undecided</button>\n        </span>\n        <span *ngIf= 'gameNum == 2'>\n            <button (click)  = 'playing(player._id, gameNum)' [ngClass]=\"{green: player.game2===true}\">Playing</button>\n            <button (click) = 'notplaying(player._id, gameNum)' [ngClass]=\"{red: player.game2===false}\">Not Playing</button>\n            <button (click) = 'undecided(player._id, gameNum)' [ngClass]=\"{yellow: player.game2===null}\">Undecided</button>\n        </span>\n        <span *ngIf= 'gameNum == 3'>\n          <button (click)  = 'playing(player._id, gameNum)' [ngClass]=\"{green: player.game3===true}\">Playing</button>\n          <button (click) = 'notplaying(player._id, gameNum)' [ngClass]=\"{red: player.game3===false}\">Not Playing</button>\n          <button (click) = 'undecided(player._id, gameNum)' [ngClass]=\"{yellow: player.game3===null}\">Undecided</button>\n        </span>\n      </td>\n    </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/status/game/game.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__player_service__ = __webpack_require__("../../../../../src/app/player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GameComponent = (function () {
    function GameComponent(_route, _playerService) {
        var _this = this;
        this._route = _route;
        this._playerService = _playerService;
        this.players = [];
        this._route.paramMap.subscribe(function (params) {
            _this.gameNum = Number(params.get('id'));
            _this.getPlayers();
        });
    }
    GameComponent.prototype.ngOnInit = function () {
    };
    GameComponent.prototype.getPlayers = function () {
        var _this = this;
        this._playerService.retrievePlayers(function (players) {
            _this.players = players;
        });
    };
    GameComponent.prototype.playing = function (id, gameNum) {
        var _this = this;
        this._playerService.findOne(id, function (thePlayer) {
            _this.player = thePlayer;
            _this.player['game' + String(gameNum)] = true;
            console.log('HERE IS THE CHANGE');
            console.log(_this.player);
            _this._playerService.update(id, _this.player, function (players) {
                _this.players = players;
            });
            _this.player = null;
        });
    };
    GameComponent.prototype.notplaying = function (id, gameNum) {
        var _this = this;
        this._playerService.findOne(id, function (thePlayer) {
            _this.player = thePlayer;
            _this.player['game' + String(gameNum)] = false;
            console.log('HERE IS THE CHANGE');
            console.log(_this.player);
            _this._playerService.update(id, _this.player, function (players) {
                _this.players = players;
            });
            _this.player = null;
        });
    };
    GameComponent.prototype.undecided = function (id, gameNum) {
        var _this = this;
        this._playerService.findOne(id, function (thePlayer) {
            _this.player = thePlayer;
            _this.player['game' + String(gameNum)] = null;
            console.log('HERE IS THE CHANGE');
            console.log(_this.player);
            _this._playerService.update(id, _this.player, function (players) {
                _this.players = players;
            });
            _this.player = null;
        });
    };
    return GameComponent;
}());
GameComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
        selector: 'app-game',
        template: __webpack_require__("../../../../../src/app/status/game/game.component.html"),
        styles: [__webpack_require__("../../../../../src/app/status/game/game.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__player_service__["a" /* PlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__player_service__["a" /* PlayerService */]) === "function" && _b || Object])
], GameComponent);

var _a, _b;
//# sourceMappingURL=game.component.js.map

/***/ }),

/***/ "../../../../../src/app/status/status.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".links{\r\n  font-size: 20pt;\r\n  text-align: center;\r\n}\r\n\r\n#container{\r\n  margin-top: 70px;\r\n  border: 1px solid black;\r\n  height: auto;\r\n  min-height: 470px;\r\n  padding: 30px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/status/status.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n    <h1>Player Status - Game {{ gameNum }}</h1>\n    <br>\n    <div class=\"links\">\n      <a [routerLink]=\"['game', '1']\" (click)='setGameNum(1)'>Game 1</a> | <a [routerLink]=\"['game', '2']\" (click)='setGameNum(2)'>Game 2</a> | <a [routerLink]=\"['game', '3']\" (click)='setGameNum(3)'>Game 3</a>\n     </div>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/status/status.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StatusComponent = (function () {
    function StatusComponent() {
        this.gameNum = 1;
    }
    StatusComponent.prototype.ngOnInit = function () {
    };
    StatusComponent.prototype.setGameNum = function (num) {
        this.gameNum = num;
    };
    return StatusComponent;
}());
StatusComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-status',
        template: __webpack_require__("../../../../../src/app/status/status.component.html"),
        styles: [__webpack_require__("../../../../../src/app/status/status.component.css")]
    }),
    __metadata("design:paramtypes", [])
], StatusComponent);

//# sourceMappingURL=status.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map