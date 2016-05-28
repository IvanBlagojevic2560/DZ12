System.register(['angular2/common', 'angular2/http', 'rxjs/Rx', 'angular2/router', 'angular2/core'], function(exports_1, context_1) {
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
    var common_1, http_1, router_1, core_1;
    var FormComponent2;
    return {
        setters:[
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FormComponent2 = (function () {
                function FormComponent2(builder, http, router) {
                    this.http = http;
                    this.router = router;
                    this.loginForm = builder.group({
                        korisnickoIme: ["", common_1.Validators.none],
                        sifra: ["", common_1.Validators.none],
                    });
                    if (localStorage.getItem('token') != null) {
                        this.router.parent.navigate(['MainPage']);
                    }
                }
                FormComponent2.prototype.onLogin = function () {
                    var _this = this;
                    var data = "korisnickoIme=" + this.loginForm.value.korisnickoIme + "&sifra=" + this.loginForm.value.sifra;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    this.http.post('http://localhost/it255/php/loginservice.php', data, { headers: headers })
                        .map(function (res) { return res; })
                        .subscribe(function (data) { return _this.postResponse = data; }, function (err) { return alert(JSON.stringify(err)); }, function () {
                        if (_this.postResponse._body.indexOf("error") === -1) {
                            var obj = JSON.parse(_this.postResponse._body);
                            localStorage.setItem('token', obj.token);
                            _this.router.parent.navigate(['./MainPage']);
                        }
                        else {
                            var obj = JSON.parse(_this.postResponse._body);
                            document.getElementsByClassName("alert")[0].style.display = "block";
                            document.getElementsByClassName("alert")[0].innerHTML =
                                obj.error.split("\\r\\n").join("<br/>").split("\"").join("");
                        }
                    });
                };
                FormComponent2 = __decorate([
                    core_1.Component({
                        selector: 'FormPage2',
                        templateUrl: 'app/form2/form2.html',
                        directives: [common_1.FORM_DIRECTIVES],
                        viewBindings: [common_1.FORM_BINDINGS]
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof common_1.FormBuilder !== 'undefined' && common_1.FormBuilder) === 'function' && _a) || Object, (typeof (_b = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _b) || Object, (typeof (_c = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _c) || Object])
                ], FormComponent2);
                return FormComponent2;
                var _a, _b, _c;
            }());
            exports_1("FormComponent2", FormComponent2);
        }
    }
});
//# sourceMappingURL=form2.component.js.map