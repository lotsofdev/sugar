/**
 * @name            easeInOutQuart
 * @namespace       shared.easing
 * @type            Function
 * @platform        js
 * @platform        node
 * @status          stable
 *
 * Ease in out quart function
 *
 * @param 		{Number} 		t 		The current time
 * @return 		{Number} 				The value depending on time
 *
 * @snippet         __easeInOutQuart($1)
 *
 * @example         js
 * import { __easeInOutQuart } from '@lotsof/sugar/easing';
 * __easeInOutQuart(0.4);
 *
 * @todo      tests
 *
 * @since           2.0.0
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */
export default function __easeInOutQuart(t: number): number;
