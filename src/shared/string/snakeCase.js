import __dashCase from './dashCase';
/**
 * @name                snakeCase
 * @namespace           shared.string
 * @type                Function
 * @platform            js
 * @platform            node
 * @status              stable
 *
 * snakeCase a string
 *
 * @param         {String}          text        The string to snakeCase
 * @return        {String}                      The snakeCased string
 *
 * @todo      tests
 *
 * @snippet         __snakeCase($1)
 *
 * @example     js
 * import { __snakeCase } from '@coffeekraken/sugar/string';
 * __snakeCase('hello world'); // => hello_world
 *
 * @see             https://www.npmjs.com/package/param-case
 * @since       2.0.0
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */
export default function __snakeCase(text) {
    const dashCase = __dashCase(text);
    return dashCase.replace(/\-/g, '_');
}
//# sourceMappingURL=snakeCase.js.map