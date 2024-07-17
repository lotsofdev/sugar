/**
 * @name                noCase
 * @namespace           shared.string
 * @type                Function
 * @platform            js
 * @platform            node
 * @status              stable
 *
 * No case a string
 *
 * @param         {String}          text        The string to snakeCase
 * @return        {String}                      The snakeCased string
 *
 * @todo      tests
 *
 * @snippet         __noCase($1)
 *
 * @example     js
 * import { __noCase } from '@lotsof/sugar/string';
 * __noCase('hello world'); // => hello world
 *
 * @see             https://www.npmjs.com/package/change-case
 * @since       2.0.0
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */
export default function __noCase(text: string): string;
