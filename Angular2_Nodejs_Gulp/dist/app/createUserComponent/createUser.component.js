"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var CreateUserComponent = (function () {
    function CreateUserComponent(_http) {
        this._http = _http;
    }
    CreateUserComponent.prototype.onSubmit = function () {
        var body = {
            name: 'fewf',
            password: 'fewfwe',
            email: 'fwefwe'
        };
        this._http.post('http://localhost:3000/create-user', body, {});
    };
    CreateUserComponent = __decorate([
        core_1.Injectable(),
        core_1.Component({
            moduleId: module.id,
            selector: 'create-user',
            templateUrl: 'create_user.html'
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CreateUserComponent);
    return CreateUserComponent;
}());
exports.CreateUserComponent = CreateUserComponent;

//# sourceMappingURL=createUser.component.js.map
