/**
 * @name                upperFirst
 * @namespace           shared.string
 * @type                Function
 * @platform            js
 * @platform            node
 * @status              stable
 *
 * Upper first
 *
 * @param    {String}    string    The string to process
 * @return    {String}    The processed string with first letter uppercase
 *
 * @todo      tests
 *
 * @snippet         __upperFirst($1)
 *
 * @example    js
 * import { __upperFirst } from '@lotsof/sugar/string'
 * __upperFirst('hello world') // Hello world
 *
 * @since       2.0.0
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */
export default function __upperFirst(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
