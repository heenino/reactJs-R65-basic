"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
//khai bao class
var Person = /** @class */ (function () {
    function Person() {
    }
    //khai bao function
    //function goVTI()   
    Person.prototype.goVTI = function (params) {
        console.log("toi dang di hoc");
    };
    return Person;
}());
exports.Person = Person;
