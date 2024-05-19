import { format } from 'fecha';
/**
 * @name                format
 * @namespace           js.string
 * @type                Function
 * @platform            js
 * @platform            node
 * @status              stable
 *
 * Format the passed string using the requested format. Available formats are:
 * - isoDate
 *
 * @param    {String}    string    The string to format
 * @param       {String}        format      The format to use
 * @return    {String}    The formatted value
 *
 * @todo      tests
 *
 * @snippet         __format($1, $2)
 *
 * @example    js
 * import { __format } from '@coffeekraken/sugar/string'
 *
 * @see       https://www.npmjs.com/package/fecha
 * @since     2.0.0
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */
type tFormat = 'isoDate' | 'isoDateTime' | 'isoTime' | 'integer' | 'number' | 'alphanum' | 'hex' | 'hexa' | 'creditCard';
declare function format(string: string, format: tFormat): string;
export default format;
