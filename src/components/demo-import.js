var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Person = /** @class */ (function () {
    function Person() {
        this.energy = 0;
    }
    Person.prototype.walk = function () {
    };
    Person.prototype.eat = function (quantity, time) {
    };
    Person.prototype.wakeUp = function () {
        this.energy = 1;
    };
    Person = __decorate([
        logg
    ], Person);
    return Person;
}());
function logg(target) {
    console.log("hola");
    return target;
}
new Person().walk();
// function autoChain(target : any){
//     for (const property in target) {
//         if (target.hasOwnProperty(property)&&target.) {
//         }
//     }    
// }
var returnNull = function (fn) { return fn() === undefined; };
function log(target) {
    var _loop_1 = function (propertyName) {
        var propertyValue = target.prototype[propertyName];
        var isMethod = propertyValue instanceof Function;
        if (!isMethod)
            return "continue";
        var descriptor = getMethodDescriptor(propertyName);
        var originalMethod = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            console.log("estto es log");
            var result = originalMethod.apply(this, args);
            if (result === undefined) {
                return target;
            }
            return result;
        };
        Object.defineProperty(target.prototype, propertyName, descriptor);
    };
    for (var propertyName in target.prototype) {
        _loop_1(propertyName);
    }
    function getMethodDescriptor(propertyName) {
        var newDescriptor = {
            configurable: true,
            enumerable: true,
            writable: true,
            value: target.prototype[propertyName]
        };
        if (target.prototype.hasOwnProperty(propertyName))
            return Object.getOwnPropertyDescriptor(target.prototype, propertyName) || newDescriptor;
        // create a new property descriptor for the base class' method 
        return newDescriptor;
    }
}
new Person();
