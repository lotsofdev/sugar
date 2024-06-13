import __set from './set.js';
/**
 * @name            deepize
 * @namespace       shared.object
 * @type            Function
 * @platform        js
 * @platform        node
 * @status          stable
 *
 * This function simply take an object like this one:
 *
 * ```js
 * {
 *    'something.cool': 'hello'
 * }
 * ```
 *
 * and convert it to something like this:
 *
 * ```js
 * {
 *    something: {
 *      cool: 'hello'
 *    }
 * }
 * ```
 *
 * @param       {Object}        object        The object to convert
 * @return      {Object}                      The converted object
 *
 * @todo      tests
 *
 * @snippet         __deepize($1)
 *
 * @example       js
 * import { __deepize } from '@lotsof/sugar/object';
 * __deepize({ 'something.cool': 'hello' }); // => { something: { cool: 'hello' } }
 *
 * @since       2.0.0
 * @author  Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */
export default function __deepize(object) {
    const finalObject = {};
    for (const key in object) {
        __set(finalObject, key, object[key]);
    }
    return finalObject;
}
//# sourceMappingURL=deepize.js.map