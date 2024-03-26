import __deepMap from './deepMap.js';
import __set from './set.js';
/**
 * @name                    toJson
 * @namespace               shared.object
 * @type                    Function
 * @platform                js
 * @platform                node
 * @status                  stable
 *
 * Convert class instances to plain JSON object
 *
 * @param       {Any}           object      The object to convert
 * @return      {Any}                       The converted object
 *
 * @snippet         __toJson($1)
 *
 * @example         js
 * import { __toJson } from '@coffeekraken/sugar/object.js';
 * class MyClass {
 *      hello = 'world';
 *      something() {}
 * }
 * __toJson(new MyClass()); // => { hello: 'world' }
 *
 * @since       2.0.0
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */
export default function __toJson(object) {
    const newObj = {};
    __deepMap(object, ({ value, path }) => {
        __set(newObj, path, value);
        return value;
    }, {
        privateProps: false,
        classInstances: true,
    });
    return newObj;
}
//# sourceMappingURL=toJson.js.map