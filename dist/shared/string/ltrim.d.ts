/**
 * @name                ltrim
 * @namespace           shared.string
 * @type                Function
 * @platform            js
 * @platform            node
 * @status              stable
 *
 * Trim left a specified string
 *
 * @param    {String}    string    The string to trim
 * @param    {String}    needle    The string to find an cut out if found
 * @param    {Boolean}  [trimResult=true]       If you want to trim the resulted ltrim
 * @return    {String}    The trimed string
 *
 * @todo      tests
 *
 * @snippet         __ltrim($1, $2)
 *
 * @example    js
 * import { __ltrim } from '@lotsof/sugar/string'
 *  __ltrim('Hello World', 'Hello') // World
 *
 * @since     2.0.0
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */
export default function __ltrim(string: string, needle: string, trimResult?: boolean): string;
