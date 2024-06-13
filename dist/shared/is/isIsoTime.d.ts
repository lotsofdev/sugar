/**
 * @name                isIsoTime
 * @namespace           shared.is
 * @type                Function
 * @platform            js
 * @platform            node
 * @status              stable
 *
 * Check if the passed value is a valid iso date string
 *
 * @param 		{Mixed} 		value 		The value to check
 * @return 		{Boolean} 					The check result
 *
 * @todo      tests
 *
 * @snippet         __isIsoTime($1)
 *
 * @example 	js
 * import { __isIsoTime } from '@lotsof/sugar/is';
 * __isIsoTime('john.doe@gmail.com') => false
 * __isIsoTime('plop@yop.com') => false
 * __isIsoTime('hello') => false
 * __isIsoTime('17:21') => true
 *
 * @see             https://www.oreilly.com/library/view/regular-expressions-cookbook/9781449327453/ch04s07.html
 * @since           2.0.0
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */
export default function __isIsoTime(value: string): boolean;
