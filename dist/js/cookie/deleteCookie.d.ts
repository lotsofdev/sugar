/**
 * @name            deleteCookie
 * @namespace       js.cookie
 * @type            Function
 * @platform        js
 * @status          stable
 *
 * Delete a cookie
 *
 * @param       {String}            name            The cookie name to delete
 * @return      {any}                               The cookie value
 *
 * @snippet         __deleteCookie($1)
 *
 * @todo            tests
 *
 * @example         js
 * import { __deleteCookie } from '@lotsof/sugar/cookie';
 * __deleteCookie('myCookie');
 *
 * @since       2.0.0
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */
export default function __deleteCookie(name: string): void;
