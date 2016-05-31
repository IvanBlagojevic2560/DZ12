System.register(['angular2/core', 'angular2/http', 'angular2/router', 'rxjs/Rx', '../pipe/search', '../pipe/search2'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, router_1, search_1, search2_1;
    var Sobe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (_1) {},
            function (search_1_1) {
                search_1 = search_1_1;
            },
            function (search2_1_1) {
                search2_1 = search2_1_1;
            }],
        execute: function() {
            Sobe = (function () {
                function Sobe(http, router) {
                    var _this = this;
                    this.brojKreveta = "";
                    this.kvadrata = "";
                    this.http = http;
                    this.router = router;
                    var headers = new http_1.Headers();
                    http.get('http://localhost/it255/php/get.php', { headers: headers })
                        .map(function (res) { return res.json(); })
                        .subscribe(function (soba) {
                        _this.soba = soba.soba;
                    });
                }
                Sobe = __decorate([
                    core_1.Component({
                        selector: 'Sobe',
                        templateUrl: 'app/sobe/sobe.html',
                        pipes: [search_1.SearchPipe, search2_1.SearchPipe2]
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object])
                ], Sobe);
                return Sobe;
                var _a, _b;
            }());
            exports_1("Sobe", Sobe);
        }
    }
});
//# sourceMappingURL=sobe.component.js.map