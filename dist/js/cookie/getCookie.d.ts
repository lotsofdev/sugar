/**
 * @name            getCookie
 * @namespace       js.cookie
 * @type            Function
 * @platform        js
 * @status          stable
 *
 * Get a cookie value
 *
 * @param       {String}            name            The cookie name to get
 * @return      {any}                               The cookie value
 *
 * @snippet         __getCookie($1)
 *
 * @todo            tests
 *
 * @example         js
 * import { __getCookie } from '@lotsof/sugar/cookie';
 * __getCookie('myCookie');
 *
 * @since       2.0.0
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */
export default function __getCookie(name: string): any;
