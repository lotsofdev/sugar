import { v4 as uuidv4 } from 'uuid';

/**
 * @name            uniqid
 * @namespace       js.string
 * @type            Function
 * @platform        js
 * @status          stable
 * @async
 *
 * This function simply returns you a unique id
 *
 * @return          {String}            A uniqid
 *
 * @todo      tests
 *
 * @snippet         __uniqid()
 *
 * @example         js
 * import { __uniqid } from '@coffeekraken/sugar/string';
 * const id = __uniqid();
 *
 * @since       2.0.0
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */
export default uuidv4;
