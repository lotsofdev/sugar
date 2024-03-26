"use strict";
module.exports = (__methodExists) => {
    class MyClass {
        constructor(name) {
            this._settings = {
                hello: 'world'
            };
            this._name = name;
        }
        testing(value) {
            this._plop = value;
        }
        plop(user) { }
    }
    const myInstance = new MyClass('coffeekraken');
    myInstance.testing('hello');
    describe('sugar.js.class.methodExists', () => {
        it('Should return true if all the passed methods exists', () => {
            expect(__methodExists(myInstance, 'testing', 'plop')).toBe(true);
        });
        it('Should return an array of missing methods if some passed methods does not exists', () => {
            expect(__methodExists(myInstance, 'testing', 'plop', 'coco')).toEqual([
                'coco'
            ]);
        });
    });
};
//# sourceMappingURL=methodExists.js.map