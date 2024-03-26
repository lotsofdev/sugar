/**
 * @name                 isArray
 * @namespace            shared.is
 * @type                 Function
 * @platform             js
 * @platform             node
 * @status               stable
 *
 * Check if the passed value is a js Array
 *
 * @param    {Mixed}    value    The value to check
 * @return   {Boolean}   true if it's a Array, false if not
 *
 * @todo      tests
 *
 * @snippet         __isArray($1)
 *
 * @example    js
 * import { __isArray } from '@coffeekraken/sugar/is'
 * if (__isArray([]) {
 *   // do something
 * }
 *
 * @since           2.0.0
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */
export default function __isArray(value) {
    return Array.isArray(value);
}
//# sourceMappingURL=isArray.js.map