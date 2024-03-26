/**
 * @name            linear
 * @namespace       shared.easing
 * @type            Function
 * @platform        js
 * @platform        node
 * @status          stable
 *
 * Ease linear function
 *
 * @param 		{Number} 		t 		The current time
 * @return 		{Number} 				The value depending on time
 *
 * @snippet         __linear($1)
 *
 * @example         js
 * import { __linear } from '@coffeekraken/sugar/easing';
 * __linear(0.4);
 *
 * @todo      tests
 *
 * @since           2.0.0
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */
export default function __linear(t) {
    return t;
}
//# sourceMappingURL=linear.js.map