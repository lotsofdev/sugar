/**
 * @name            deepize
 * @namespace       shared.object
 * @type            Function
 * @platform        js
 * @platform        node
 * @status          stable
 *
 * This function simply take an object like this one:
 * {
 *    'something.cool': 'hello'
 * }
 * and convert it to something like this:
 * {
 *    something: {
 *      cool: 'hello'
 *    }
 * }
 *
 * @param       {Object}        object        The object to convert
 * @return      {Object}                      The converted object
 *
 * @todo      tests
 *
 * @snippet         __deepize($1)
 *
 * @example       js
 * import { __deepize } from '@lotsof/sugar/object';
 * __deepize ({ 'something.cool': 'hello' }); // => { something: { cool: 'hello' } }
 *
 * @since       2.0.0
 * @author  Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */
export default function __deepize(object: any): any;
