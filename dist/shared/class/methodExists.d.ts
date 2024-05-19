/**
 * @name                methodExists
 * @namespace           shared.class
 * @type                Function
 * @platform            js
 * @platform            node
 * @status              stable
 *
 * Check if one or more methods exists on a class instance
 *
 * @param           {Object}              instance                The instance to check the methods on
 * @param           {String}              ...methods              The methods to check
 * @return          {Boolean|Array}                               Return true if all is ok, and an array of missing methods if not
 *
 * @todo      tests
 *
 * @snippet         __methodExists($1)
 *
 * @example           js
 * class Coco {
 *    hello() {}
 * }
 * import { __methodExists } from '@lotsof/sugar/class';
 * const myInstance = new Coco();
 * __methodExists(myInstance, 'hello', 'world'); // => ['world'];
 * __methodExists(myInstance, 'hello'); // => true
 *
 * @since       2.0.0
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */
export default function __methodExists(instance: any, ...methods: any[]): boolean | string[];