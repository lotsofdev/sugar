/**
 * @name                        filterObject
 * @namespace                   shared.object
 * @type                        Function
 * @platform                    js
 * @platform                    node
 * @status                      stable
 *
 * Allow to filter an object using a function. It works the same as the filter method on the Array object type.
 * The passed filter function will have as parameter each object properties and must return true or false depending if you want the
 * passed property in the filtered object
 *
 * @param               {Object}                object                The object to filter
 * @param               {Function}              filter                The filter function that take as parameter the property itself, and the property name
 * @return              {Object}                                      The filtered object
 *
 * @todo      tests
 *
 * @snippet         __filterObject($1, $2)
 * __filterObject
 *
 * @example           js
 * import { __filterObject } from '@coffeekraken/sugar/object';
 * __filterObject({
 *    coco: 'hello',
 *    plop: true
 * }, (key, item) => typeof item === 'string');
 * // { coco: 'hello' }
 *
 * @since         2.0.0
 * @author  Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */
export default function __filterObject(object, filter) {
    // init the new object to return
    const result = {};
    // loop on the object keys
    Object.keys(object).forEach((propertyName) => {
        // pass the property in the filter function
        if (filter(propertyName, object[propertyName])) {
            // add the property in the new object
            result[propertyName] = object[propertyName];
        }
    });
    // return the filtered object
    return result;
}
//# sourceMappingURL=filterObject.js.map