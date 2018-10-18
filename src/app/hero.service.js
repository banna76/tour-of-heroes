"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
var httpOptions = {
    headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
};
var HeroService = /** @class */ (function () {
    function HeroService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.heroesUrl = 'api/heroes'; // URL to web api
    }
    /** getHeroes with RxJs 'of()'
  
    getHeroes(): Observable<Hero[]> {
      this.messageService.add('HeroService: fetched heroes');
      return of(HEROES);
    }
    */
    /** GET heroes from the server */
    HeroService.prototype.getHeroes = function () {
        var _this = this;
        return this.http.get(this.heroesUrl)
            .pipe(operators_1.tap(function (heroes) { return _this.log('fetched heroes'); }), operators_1.catchError(this.handleError('getHeroes', [])));
    };
    /** GET hero by id. Will 404 if id not found */
    HeroService.prototype.getHero = function (id) {
        var _this = this;
        var url = this.heroesUrl + "/" + id;
        return this.http.get(url)
            .pipe(operators_1.tap(function (_) { return _this.log("fetched hero id=" + id); }), operators_1.catchError(this.handleError("getHero id=" + id)));
    };
    /** PUT: update the hero on the server */
    HeroService.prototype.updateHero = function (hero) {
        var _this = this;
        return this.http.put(this.heroesUrl, hero, httpOptions)
            .pipe(operators_1.tap(function (_) { return _this.log("updated hero id=" + hero.id); }), operators_1.catchError(this.handleError('updateHero')));
    };
    /** POST: add a new hero to the server */
    HeroService.prototype.addHero = function (hero) {
        var _this = this;
        return this.http.post(this.heroesUrl, hero, httpOptions)
            .pipe(operators_1.tap(function (hero) { return _this.log("added hero w/ id=" + hero.id); }), operators_1.catchError(this.handleError('addHero')));
    };
    /** DELETE: delete the hero from the server */
    HeroService.prototype.deleteHero = function (hero) {
        var _this = this;
        var id = typeof hero === 'number' ? hero : hero.id;
        var url = this.heroesUrl + "/" + id;
        return this.http["delete"](url, httpOptions)
            .pipe(operators_1.tap(function (_) { return _this.log("deleted hero id=" + id); }), operators_1.catchError(this.handleError('deleteHero')));
    };
    /* GET heroes whose name contains search term */
    HeroService.prototype.searchHeroes = function (term) {
        var _this = this;
        if (!term.trim()) {
            // if not search term, return empty hero array.
            return rxjs_1.of([]);
        }
        return this.http.get(this.heroesUrl + "/?name=" + term)
            .pipe(operators_1.tap(function (_) { return _this.log("found heroes matching \"" + term + "\""); }), operators_1.catchError(this.handleError('searchHeroes', [])));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    HeroService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return rxjs_1.of(result);
        };
    };
    /** Log a HeroService message with the MessageService */
    HeroService.prototype.log = function (message) {
        this.messageService.add("HeroService: " + message);
    };
    HeroService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], HeroService);
    return HeroService;
}());
exports.HeroService = HeroService;
