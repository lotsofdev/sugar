import { paramCase } from 'param-case';
/**
 * @name                paramCase
 * @namespace           shared.string
 * @type                Function
 * @platform            js
 * @platform            node
 * @status              stable
 *
 * This function transform a string into a param case one like so "something-cool"
 *
 * @param       {String}        string          The string to convert
 * @return      {String}                        The converted string
 *
 * @todo      tests
 *
 * @snippet         __paramCase($1)
 *
 * @example       js
 * import { __paramCase } from '@coffeekraken/sugar/string';
 * __paramCase('some thoing cool'); // => some-thing-cool
 *
 * @see         https://www.npmjs.com/package/param-case
 * @since       2.0.0
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */
export default function __paramCase(string) {
    return paramCase(string);
}
//# sourceMappingURL=paramCase.js.map