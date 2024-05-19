/**
 * @name                proxyArray
 * @namespace           shared.array
 * @type                Function
 * @platform            js
 * @platform            node
 * @status              beta
 * @private
 *
 * This function override the passed array prototype to intercept changes made through
 *
 * @param         {Array}           array           The array to proxy
 * @return        {Array}                           The same array with his prototype proxied
 *
 * @todo        tests
 *
 * @example       js
 * import { __proxyArray } from '@coffeekraken/sugar/array';
 * const myArray = __proxyArray([1,2,3]);
 * myArray.watch(['push','pop'], (watchObj) => {
 *    // check the watchObj action
 *    switch (watchObj.action) {
 *      case 'push':
 *        // do something...
 *      break;
 *    }
 * });
 *
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */
export default function __proxyArray(array: any): any;
